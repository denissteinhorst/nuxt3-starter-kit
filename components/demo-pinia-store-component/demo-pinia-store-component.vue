<script setup lang="ts">
// NON PERSISTENT STORE
const user = useDemoUser()

const nameInput = ref('')
const dobInput = ref('')

const handleChangeName = () => {
  user.changeName(nameInput.value)
}

const handleChangeDateOfBirth = () => {
  user.changeDateOfBirth(new Date(dobInput.value))
}

// PERSISTENT STORE
const pUser = useDemoPersistentUser()

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
            <td><input v-model="nameInput" type="text" /></td>
            <td><button @click="handleChangeName()">Submit</button></td>
          </tr>
          <tr>
            <td>Days on Planet</td>
            <td>{{ user.daysOnPlanet }}</td>
            <td><input v-model="dobInput" type="date" /></td>
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
            <td><input v-model="pNameInput" type="text" /></td>
            <td><button @click="pHandleChangeName()">Submit</button></td>
          </tr>
          <tr>
            <td>Days on Planet</td>
            <td>{{ pUser.pDaysOnPlanet }}</td>
            <td><input v-model="pDobInput" type="date" /></td>
            <td><button @click="pHandleChangeDateOfBirth()">Submit</button></td>
          </tr>
        </tbody>
      </table>
      <button @click="pHandleStoreReset()">
        Click here to delete your 'persistentUser'-Cookie (Reset Store)
      </button>
    </div>
    <hr />
    <NuxtLink
      to="https://nuxt.com/docs/guide/directory-structure/components"
      target="_blank"
      >Nuxt Documentation for "Components"</NuxtLink
    >
  </div>
</template>

<style scoped lang="scss">
@import 'demo-pinia-store-component.scss';
</style>
