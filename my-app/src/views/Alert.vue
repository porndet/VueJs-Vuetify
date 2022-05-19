<template>
  <div>
      <h1>{{ Title }}</h1>

      <v-alert border="top" color="amber darken-3" dark type="info" dense outlined v-model="alert" dismissible>
        I'm an alert with a top border and amber color info type
      </v-alert>
      <v-btn small elevation="2" color="amber darken-3" v-if="!alert" dark @click="alert = true" class="mb-3">Reset</v-btn>

      <v-alert border="left" color="amber darken-3" dark type="error" dismissible >
        I'm an alert with a left border and amber color error type
      </v-alert>

      <v-alert border="right" color="amber darken-3" dark icon="mdi-firework" prominent>
        I'm an alert with a right border and amber color success type
      </v-alert>

      <v-alert border="bottom" color="amber darken-3" dark type="warning" icon="mdi-firework">
        <v-row align="center">
          <v-col class="grow" no-gutters>
              I'm an alert with a bottom border and amber color warning type
          </v-col>
          <v-col class="shrink">
                <v-btn small elevation="2" color="deep-orange darken-1">Take Action</v-btn>
          </v-col>
        </v-row>
      </v-alert>
      
      <v-alert border="top" colored-border color="red darken-1" elevation="2" type="error">
        I'm an alert with a top border and red color colored-border type error
      </v-alert>  

      <v-alert border="bottom" colored-border color="light-green accent-4" elevation="2" type="success">
        I'm an alert with a bottom border and light-green color colored-border type success
      </v-alert>

      <v-alert border="left" colored-border color="blue accent-2" elevation="2" type="info">
        I'm an alert with a left border and blue color colored-border type info
      </v-alert>

      <v-alert border="right" colored-border color="yellow accent-3" elevation="2" type="warning">
        I'm an alert with a right border and yellow color colored-border type warning
      </v-alert>

      <v-alert elevation="0" color="light-blue darken-1" dark text>
        <h1>Lorem Ipsum</h1>
        Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur turpis.
        <v-divider
          class="my-4 info"
          style="opacity: 0.3"
        ></v-divider>
        <v-row align="center">
          <v-col class="grow">
            Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam imperdiet imperdiet orci.
          </v-col>
          <v-col class="shrink">
            <v-btn color="light-blue darken-1" outlined>OKAY</v-btn>
          </v-col>
        </v-row>
        Hello world 
      </v-alert>

      <v-col cols="5" style="padding-left: 0px;">
        <v-alert color="orange darken-1" text icon="mdi-clock-fast" prominent>
          Nullam tincidunt adipiscing enim. 
          In consectetuer turpis ut velit. Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.
        </v-alert>
      </v-col>
      
      <v-alert elevation="2" color="light-blue" dark shaped type="success">
        I'm a shaped alert with a border-radius at top-left, bottom-right
      </v-alert>

      <v-alert type="success" shaped outlined color="green darken-2">
        I'm a shaped alert with a outline option
      </v-alert>

      <v-alert type="warning" color="orange darken-1" shaped dense>
        I'm a shaped alert with a dense option option
      </v-alert>
      
      <v-alert type="error" color="deep-orange darken-1" shaped prominent>
        I'm a shaped alert with a dense prominent option that Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Duis leo.
      </v-alert>

      <div class="text-center">
        <v-btn elevation="2" color="indigo darken-1" class="mb-2" dark @click="alertToggle = !alertToggle">TOGGLE</v-btn>
      </div>

      <v-alert :value="alertToggle" color="pink lighten-1" dark icon="mdi-home-account" border="top" transition="scale-transition">
        Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
      </v-alert>
      
      <div class="text-center" v-if="!alertTwitter">
        <v-btn small color="blue lighten-1" class="mb-2" dark @click="alertTwitter = true">Reset Button Twitter</v-btn>
      </div>
      
      <v-alert border="left" elevation="2" color="blue lighten-1" colored-border icon="mdi-twitter" dismissible v-model="alertTwitter">
        You've got 5 new updates on your timeline!.
      </v-alert>
      

      <v-alert type="success" color="green darken-1">
        I'm a success alert.
      </v-alert>
            <v-alert type="info" color="light-blue">
        I'm a info alert.
      </v-alert>
            <v-alert type="warning" color="amber lighten-1">
        I'm a warning alert.
      </v-alert>
            <v-alert type="error" color="red accent-2">
        I'm a error alert.
      </v-alert>
      <AvatarPage/>
      <BadgesPage/>
  </div>
</template>

<script>
import AvatarPage from '../components/Avatar.vue'
import BadgesPage from '../components/Badges.vue'
export default {
  name: "Alert",
  components: {
    AvatarPage,
    BadgesPage
  },
  data() {
    return {
      Title: 'Alert Page',
      alert: true,
      alertToggle: true,
      alertTwitter: true
    }
  },
}
</script>

<style>

</style>