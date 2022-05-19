<template>
    <div class="selectfield">

        <v-select 
            color="lime darken-1"
            v-model="selectdata.animal"
            :items="animals"
            label="Select like animal"
            :rules="rules.animal" 
            outlined>
        </v-select>

         <v-slider   
            label="Age"
            min="1"
            max="100"
            thumb-label
            color="yellow darken-1"
            hint="Be honest"
            v-model="age"
            :rules="rules.age"
        ></v-slider>

        <v-checkbox v-model="terms" color="cyan lighten-3">
            <template v-slot:label>
                <div>
                    Do you accept the
                    <a href="#">terms</a> 
                    and
                    <a href="#">condition?</a>
                </div>
            </template>
        </v-checkbox>

        <v-btn 
            elevation="3" 
            color="blue darken-1"
            @click="CheckResult" 
            text
            rounded
            :disabled="!FormisValid()"
        >
            Check Result!!
        </v-btn>


    </div>
</template>

<script>
export default {
    name: "SelectField",
    data() {
        return {
            rules: {
                animal: [val => (val || '').length > 0 || 'This field is required'],
                age: [val => val < 50 || `I don't belive you!`],
            },
            selectdata: {
                animal: '',
            },
            animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
            age: '',
            terms: ''
        }
    },
    methods: {
        CheckResult(){
            console.log(this.terms);
        },
        FormisValid(){
            return this.terms;
        }
    },
}
</script>

<style>

</style>