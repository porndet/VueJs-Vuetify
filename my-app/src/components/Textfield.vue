<template>
  <div class="TextField">
    <p>{{ Title_Textfield }}</p>
    <v-text-field 
      v-model="title"
      label="Title Cartoon"
      placeholder="Title"
      outlined
      clearable
    ></v-text-field>

    <v-text-field
      v-model="title1"
      :rules="rules.length"
      counter="25"
      hint="This field uses counter prop"
      label="Regular"
    ></v-text-field>

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

    <v-btn
        elevation="2"
        @click="resultForm"
        color="teal lighten-1"
        dark
    >Click Result!!</v-btn>

    <v-select color="lime darken-1" v-model="form.animals" :items="animals"
    label="Select like animal" :rules="rules.animal" outlined class="mt-5"></v-select>
    
  </div>
</template>

<script>
  export default {
    name: 'TextField',
    data() {
        const defalutForm = Object.freeze({
            first: '',
            animals: '',
            bio: ''
        });

        return {
            form: Object.assign({}, defalutForm),
            title: '',
            title1: '',
            title2: '',
            message1: 'Hey!',
            Title_Textfield: 'Textfield',
            rules: {
                length: [v => v.length <= 25 || 'Max 25 characters'],
                name: [val => (val || '').length > 0 || 'This field is required'],
                animal: [val => (val || '').length > 0 || 'This field is required']
            },
            animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
            wordsRules: [v => v.trim().split(' ').length <= 5 || 'Max 5 words'],
            defalutForm
        }
    },
    methods: {
        resultForm(){
            console.log(this.form.bio);
        }
    },
  }
</script>

<style scoped>
    .TextField{
        padding: 5px 1rem;
    }
</style>
