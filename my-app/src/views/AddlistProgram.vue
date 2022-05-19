<template>
    <div class="addlistprogram">
        <v-toolbar>
            <v-tabs grow background-color="blue darken-2" dark>
                <v-tab @click="IsHome = true">
                    {{ Tab.Home }}
                </v-tab>
                <v-tab @click="IsHome = false">
                    {{ Tab.Crud }}
                </v-tab>
            </v-tabs>
        </v-toolbar>
        <div v-if="IsHome">
            <HomeList/>
        </div>
        <div v-else>
            <CrudList/>
            1234
        </div>
    </div>
</template>

<script>
import HomeList from '../components/Homelist.vue'
import CrudList from '../components/CrudList.vue'

export default {
    name: "AddlistProgram",
    components: {
        HomeList,
        CrudList
    },
    data() {
        return {
            Title : "AddList Program",
            IsHome : true,
            Tab : { Home : 'Home', Crud : "CRUD List Program" }
        }
    },
}
</script>

<style>

</style>