<template>
  <div class="TextField">
    <p>{{ Title_Textfield }}</p>
    <v-row>
      <v-col cols="12" sm="6">
          <v-text-field 
            v-model="title"
            label="Title Cartoon"
            placeholder="Title"
            filled
            clearable
            type="text"
            shaped
            :prepend-icon="icon"
            @click:prepend="changeIcon"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
          <v-text-field
            v-model="title1"
            :rules="rules.length"
            counter="25"
            dense
            filled
            rounded
            hint="This field uses counter prop"
            label="Regular"
          ></v-text-field>
      </v-col>
    </v-row>

      <v-text-field
      v-model="title2"
      :rules="wordsRules"
      counter="5"
      hint="This field uses counter prop"
      label="Regular"
      :counter-value="v => v.trim().split(' ').length"
    ></v-text-field>


    <v-text-field
        v-model="form.first"
        :rules="rules.name"
        label="First Name"
        clearable
        outlined
    ></v-text-field>

    <v-textarea
        v-model="form.bio"
        color="teal"
    >
        <template v-slot:label>
            <div>
                Bio <small>(optional)</small>
            </div>
        </template>
    </v-textarea>

    <v-text-field v-model="textfield1" hint="Hello world vuejs"
    clearable type="text" :loading="isLoading">            
      <template v-slot:prepend>
        <v-tooltip
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">
              mdi-help-circle-outline
            </v-icon>
          </template>
          I'm a tooltip
        </v-tooltip>
      </template>
      <template v-slot:append>
        <v-fade-transition leave-absolute>
          <v-progress-circular
            v-if="loading"
            size="24"
            color="info"
            indeterminate
          ></v-progress-circular>
          <img
            v-else
            width="24"
            height="24"
            src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
            alt=""
          >
        </v-fade-transition>
      </template>
      <template v-slot:append-outer>
          <v-btn elevation="2" color="purple lighten-1" dark @click="clickMe">Click Me</v-btn>
      </template>
      <template v-slot:label>
        What about <strong>icon</strong> here?  <v-icon color="blue lighten-1" style="vertical-align: middle;">mdi-account-circle</v-icon>
      </template>
    </v-text-field>

    <v-text-field
      v-model="value"
      color="cyan darken"
      label="Text field"
      placeholder="Start typing..."
      loading
    >
      <template v-slot:progress>
        <v-progress-linear
          v-if="custom"
          :value="progress"
          :color="color"
          absolute
          height="3"
        ></v-progress-linear>
      </template>
    </v-text-field>

    <v-autocomplete
      v-model="selected"
      :items="item"
      chips
      label="To"
      full-width
      hide-details
      hide-no-data
      hide-selected
      multiple
      single-line
      class="mb-3"
    ></v-autocomplete>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Normal with hint text"
      hint="At least 8 characters"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>

    <v-btn
        elevation="2"
        @click="resultForm"
        color="teal lighten-1"
        dark
    >Click Result!!
    </v-btn>  
  </div>
</template>

<script>
  export default {
    name: 'TextField',
    data() {
        const defalutForm = Object.freeze({
            first: '',
        });

        return {
            form: Object.assign({}, defalutForm),
            title: '',
            title1: '',
            title2: '',
            textfield1: '',
            message1: 'Hey!',
            value: '',
            selected: '',
            isLoading: false,
            custom: true,
            item: ['Trevor Handsen', 'Alex Nelson', "Hello world"],
            Title_Textfield: 'Textfield',
            show1: false,
            password: '',
            rules: {
                length: [v => v.length <= 25 || 'Max 25 characters'],
                required: value => !!value || 'Required.',
                name: [val => (val || '').length > 0 || 'This field is required'],
                animal: [val => (val || '').length > 0 || 'This field is required']
            },
            animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
            wordsRules: [v => v.trim().split(' ').length <= 5 || 'Max 5 words'],
            defalutForm,
            isvalid: false,
            icons: [
              'mdi-emoticon',
              'mdi-emoticon-cool',
              'mdi-emoticon-dead',
              'mdi-emoticon-excited',
              'mdi-emoticon-happy',
              'mdi-emoticon-neutral',
              'mdi-emoticon-sad',
              'mdi-emoticon-tongue',
            ],
            iconIndex: 0,
            loading: false
        }
    },
    computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
      progress () {
        return Math.min(100, this.value.length * 10)
      },
      color () {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      },
    },
    methods: {
        resultForm(){
            console.log(this.selected);
        },
        FormIsvalid(){
          return this.form.bio
        },
        changeIcon () {
          this.iconIndex === this.icons.length - 1
            ? this.iconIndex = 0
            : this.iconIndex++
        },
        clickMe(){
          this.loading = true;
          this.textfield1 = 'Wait for it...';
          this.isLoading = true;
          setTimeout(() => {
            this.loading = false;
            this.isLoading = false; 
            this.textfield1 = `You've clicked me!`;
          },2000);
        }
    },
  }
</script>

<style scoped>

</style>
