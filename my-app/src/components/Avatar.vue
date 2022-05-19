<template>
    <div class="avatar">
        <h1>{{ Title }}</h1>
        <v-avatar
            size="36"
            color="deep-purple"
        >
        <span class="white--text text-h5">36</span>
        </v-avatar>
        
        <v-avatar
            size="48"
            color="green darken-1"
            class="ml-3"
        >
            <span class="white--text text-h5">48</span>
        </v-avatar>

        <v-avatar
            size="62"
            color="amber darken-1"
            class="ml-3"
        >
        <span class="white--text text-h5">62</span>
        </v-avatar>

        <v-avatar
            color="light-blue"
            class="ml-3"
            tile
        >
        <v-icon dark>mdi-calendar-clock</v-icon>
        </v-avatar>

        <v-avatar
            size="50"
            color="blue darken-1"
            class="ml-3"
        >
        <v-icon dark>mdi-account-cowboy-hat-outline</v-icon>
        </v-avatar>
    </div>
</template>

<script>
export default {
    name: 'Avatar',
    data() {
        return {
            Title: "Avatar",
        }
    },
}
</script>

<style>

</style>