<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name" 
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-btn 
        v-for="(value, index) in Appbar" :key="index" :href="value.link"
        text
      >
        <span class="mr-1">{{ value.name }}</span>
        <v-icon small>mdi-{{ `${value.icon}` }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="ma-5">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      Appbar: [
        { name: 'Home', icon: 'home', link: '/' },
        { name: 'About', icon: 'information', link: '/about' },
        { name: 'TextField', icon: 'message-reply-text', link: '/textfield' },
        { name: 'Select-Slider', icon: 'select', link: '/selectfield' },
        { name: 'Alert', icon: 'alpha-a-box-outline', link: '/alert' },
        { name: 'Introduction', icon: 'account-tie', link: '/introduction' },
        { name: 'Banner', icon: 'alpha-b-box', link: '/banner' },
        { name: 'Addprogram', icon: 'playlist-plus', link: '/Addprogram' }
      ]
    }
  },
};
</script>

<style scoped>

</style>
