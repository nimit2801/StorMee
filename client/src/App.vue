<script setup lang="ts">
// import VueRouter from 'vue-router';

// const routes = {
//   '/': Home,
//   '/login': Login,
//   '/upload': Upload
// }


// const url = 'http://localhost:3000'

// const helloComponent = computed(async () => {
//   if (window.localStorage.getItem('token')) {
//     const data = window.localStorage.getItem('token');
//     const response = await fetch('url' + '/checkToken', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     console.log(await response.body);
//   }
//   else if (!window.localStorage.getItem('token')) {
//     return 'Hey there stranger please login!'
//   }
// }
// )

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// const currentView = computed(() => {
//   console.log(currentPath.value);
//   return routes[currentPath.value.slice(1) || '/'] || 'There is no such view!'
// })

</script>

<template>
  <!-- <div>Random!</div>
  <router-link to="/">Home</router-link>
  <router-link to="/login">Login</router-link>
  <router-link to="/upload">Upload</router-link> -->
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/login" class="nav-link">Login</router-link></li>
          <li class="nav-item"><router-link to="/upload" class="nav-link">Upload</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view class="view"></router-view>
  </div>
  <!-- <component :is="helloComponent" /> -->
  <!-- <div>{{ helloComponent }} </div> -->
  <!-- <component :is="currentView" /> -->
  <!-- <router-view>
    <div>hello</div>
  </router-view> -->
</template>

<style scoped>

</style>
