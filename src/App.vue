<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      light
    >
      <div class="d-flex align-center">
        <nav>
          
      <router-link to="/">Home</router-link> |
      <router-link to="/SignUp">Sign Up</router-link>
        </nav>

      </div>

  
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
