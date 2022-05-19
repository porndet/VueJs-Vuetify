<template> 
    <div class="banner">
        <h1>{{ TitleBanner }}</h1>
        <v-card>
            <v-toolbar flat>
                <v-toolbar-title>
                    <v-avatar
                        size="50"
                        color="red lighten-4"
                        v-if="sticky"
                    >
                        <v-icon color="red lighten-1" size="40">mdi-account-supervisor-circle</v-icon> 
                    </v-avatar>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <div>
                    <v-switch label="Sticky Banner" v-model="sticky" hide-details></v-switch>
                </div>
            </v-toolbar>
            <v-banner single-line>
                We can't save your edits while you are in offline mode.
                <template v-slot:actions>
                    <v-btn class="my-2 mx-2" elevation="2" color="blue accent-2" @click="log(sticky)" dark>Show Sticky</v-btn>
                </template>
            </v-banner>
        </v-card>

        <v-banner single-line size="40">
            <v-icon color="orange lighten-1">mdi-wifi</v-icon>
            Unable to verify your Internet connection
        </v-banner>

        <v-checkbox label="Visible" v-model="bannerControl"></v-checkbox>
        <v-banner
            single-line
            v-model="bannerControl"
            transition="slide-y-transition"
        >
            No Internet connection
            <template v-slot:actions="{ dismiss }">
                <v-btn text color="primary" @click="dismiss">
                    DISMISS
                </v-btn>
                <v-btn text color="primary">
                    RETRY
                </v-btn>
            </template>
        </v-banner>
        <!-- <v-btn small elevation="2" @click="log(bannerControl)">Result</v-btn>-->

        <v-banner two-line>
            <v-avatar
                size="40"
                color="deep-purple accent-2"
                slot="icon"
            >
                <v-icon dark>mdi-lock</v-icon>
            </v-avatar>
            Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.
            <template v-slot:actions>
                <v-btn text color="primary">
                    ACTION
                </v-btn>
                <v-btn text color="primary">
                    ACTION
                </v-btn>
            </template>
        </v-banner>
        <appbar />
    </div>
</template>

<script>
import appbar from '../components/Appbar.vue'
export default {
    name : "Banner",
    components:{
        appbar
    },
    data() {
        return {
            TitleBanner : 'Banner Page',
            sticky : false,
            bannerControl: false,
        }
    },
    methods: {
        log(message){
            console.log(message);
        }
    },
}
</script>

<style>

</style>