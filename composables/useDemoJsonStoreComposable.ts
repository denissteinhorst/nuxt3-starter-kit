export default async function useDemoJsonStoreComposable() {
  const { data: demoJsonData, refresh } = await useFetch('/api/demoJsonStoreEndpoint')

  interface IDemo {
    id: number
    title: string
    content: string
  }

  const demo = ref({
    id: 0,
    title: '',
    content: '',
  }) as Ref<IDemo>

  const activeMode = ref('create') as Ref<'edit' | 'create'>

  const modes = {
    edit: {
      headlineText: '"Edit"-mode',
      buttonText: 'Save Data Entry',
    },
    create: {
      headlineText: '"Create"-mode',
      buttonText: 'Create new Data Entry',
    },
  }

  const mode = computed(() => {
    return modes[activeMode.value]
  })

  const switchMode = (mode: string, id?: number) => {
    if (mode === 'create') {
      activeMode.value = 'create'
      demo.value.title = ''
      demo.value.content = ''
    } else if (mode === 'edit') {
      activeMode.value = 'edit'
      demo.value = demoJsonData.value?.find((entry: IDemo) => entry.id === id)
    }   
  }

  const formSubmit = async () => {
    if (activeMode.value === 'create') {
      await addDemo()
    } else {
      await editDemo()
    }
  }

  const editDemo = async () => {
    demoJsonData.value = ''
    await $fetch(`/api/demoJsonStoreEndpoint/${demo.value.id}`, {
      method: 'PUT',
      body: JSON.stringify(demo.value),
    })
    demo.value.title = ''
    demo.value.content = ''
    await refresh()
  }

  const addDemo = async () => {
    demoJsonData.value = ''
    await $fetch('/api/demoJsonStoreEndpoint', {
      method: 'POST',
      body: JSON.stringify(demo.value),
    })
    demo.value.title = ''
    demo.value.content = ''
    await refresh()
  }

  const removeDemo = async (id: number) => {
    demoJsonData.value = ''
    await $fetch(`/api/demoJsonStoreEndpoint/${id}`, {
      method: 'DELETE',
    })
    await refresh()
    activeMode.value = 'create'
  }

  return {
    demoJsonData,
    mode,
    demo,
    activeMode,
    refresh,
    switchMode,
    removeDemo,
    formSubmit,
  }
}
