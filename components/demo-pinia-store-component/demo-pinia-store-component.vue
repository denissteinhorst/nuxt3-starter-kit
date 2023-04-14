<script setup lang="ts">
  // NON PERSISTENT STORE
  const user = useUser()

  const nameInput = ref('')
  const dobInput = ref('')

  const handleChangeName = () => {
    user.changeName(nameInput.value)
  }

  const handleChangeDateOfBirth = () => {
    user.changeDateOfBirth(new Date(dobInput.value))
  }

  // PERSISTENT STORE
  const pUser = usePersistentUser()

  const pNameInput = ref('')
  const pDobInput = ref('')

  const pHandleChangeName = () => {
    pUser.pChangeName(pNameInput.value)
  }

  const pHandleChangeDateOfBirth = () => {
    pUser.pChangeDateOfBirth(new Date(pDobInput.value))
  }
  
  const pHandleStoreReset = () => {
    pUser.pResetStore()
  }
</script>

<template>
  <div class="demo-component-pinia">
    <div class="demo-component-pinia__non-persistent">
      <h2>Pinia's "User" Store:</h2>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
            <th>new Value</th>
            <th>submit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>{{ user.fullName }} ( {{ user.currentAge }} )</td>
            <td><input type="text" v-model="nameInput" /></td>
            <td><button @click="handleChangeName()">Submit</button></td>
          </tr>
          <tr>
            <td>Days on Planet</td>
            <td>{{ user.daysOnPlanet }}</td>
            <td><input type="date" v-model="dobInput" /></td>
            <td><button @click="handleChangeDateOfBirth()">Submit</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr />

    <div class="demo-component-pinia__persistent">
      <h2>Pinia's PERSISTENT-"User" Store:</h2>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
            <th>new Value</th>
            <th>submit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>{{ pUser.pFullName }} ( {{ pUser.pCurrentAge }} )</td>
            <td><input type="text" v-model="pNameInput" /></td>
            <td><button @click="pHandleChangeName()">Submit</button></td>
          </tr>
          <tr>
            <td>Days on Planet</td>
            <td>{{ pUser.pDaysOnPlanet }}</td>
            <td><input type="date" v-model="pDobInput" /></td>
            <td><button @click="pHandleChangeDateOfBirth()">Submit</button></td>
          </tr>
        </tbody>
      </table>
      <button @click="pHandleStoreReset()">Click here to delete your 'persistentUser'-Cookie (Reset Store)</button>
    </div>
    <hr />
    <NuxtLink to="https://nuxt.com/docs/guide/directory-structure/components" target="_blank">Nuxt Documentation for
      "Components"</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
 @import 'demo-pinia-store-component.scss';
</style>