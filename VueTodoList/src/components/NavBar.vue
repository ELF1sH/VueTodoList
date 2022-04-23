<template>
  <div style="position: relative;">
    <va-app-bar>
      <router-link to="/">
        <va-button icon="home" color="#fff" flat :rounded="false" />
      </router-link>

      <router-link to="/">
        <va-button color="#fff" flat :rounded="false">TodoList</va-button>
      </router-link>

      <va-button color="#fff" flat :rounded="false" @click="$router.push('/about')">About</va-button>

      <va-button color="#fff" flat :rounded="false" @click="$router.push('/oneMorePage')">OneMorePage</va-button>

    </va-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>