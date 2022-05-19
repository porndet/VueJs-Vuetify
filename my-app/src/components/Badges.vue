<template>
    <div class="badges mt-3">
        <h1>{{ TitleBadges }}</h1>
        <v-container>
            <v-row align="center" justify="center">
                <v-badge bordered overlap color="orange accent-2" icon="mdi-battery-positive" bottom>
                    <v-btn elevation="2" color="amber" dark>
                        Lock Account
                    </v-btn>
                </v-badge>
            </v-row>
            <v-row align="center" justify="center" class="text-center">
                <v-col cols="6">
                    <v-btn class="mr-2" dark color="blue accent-2" @click="PlusValue++">SEND MESSAGE</v-btn>
                    <v-btn dark color="orange darken-2" @click="PlusValue = 0">CLEAR NOTIFICATIONS</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-badge bordered overlap color="red darken-1" :value="PlusValue" :content="PlusValue">
                        <v-icon size="40">mdi-vuetify</v-icon>
                    </v-badge>
                </v-col>
            </v-row>
            <v-row align="center" justify="center" class="text-center">
                <v-col cols="12">
                    <v-badge :value="hover" content="+9999" transition="slide-x-transition">
                        <v-hover v-model="hover">
                            <v-icon size="40">mdi-account</v-icon>
                        </v-hover>
                    </v-badge>
                </v-col>
            </v-row>

            <v-toolbar class="mt-3">
                <v-tabs grow background-color="blue darken-2" dark>
                    <v-tab @click="ITEMONE(1)">
                        <v-badge color="pink lighten-1" dot>
                            ITEM ONE
                        </v-badge>
                    </v-tab>
                    <v-tab  @click="ITEMONE(2)">
                        <v-badge color="deep-purple lighten-1" content="6">
                            ITEM TWO
                        </v-badge>
                    </v-tab>
                    <v-tab  @click="ITEMONE(3)">
                        <v-badge color="cyan lighten-1" icon="mdi-vuetify">
                            ITEM THREE
                        </v-badge>
                    </v-tab>
                </v-tabs>
            </v-toolbar>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Badges",
    data() {
        return {
            PlusValue : 0,
            hover: false,
            TitleBadges : 'Badges Page'
        }
    },
    methods: {
        ITEMONE(e){
            console.log(e);
        }
    },
}
</script>

<style>

</style>