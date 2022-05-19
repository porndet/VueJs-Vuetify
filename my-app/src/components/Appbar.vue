<template>
    <div class="appbar mt-5">
        <v-app-bar color="deep-purple accent-4" elevate-on-scroll :collapse="!collapseOnScroll" :collapse-on-scroll="collapseOnScroll" dark scroll-target="#scrolling-techniques-6">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Page title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-checkbox hide-details v-model="collapseOnScroll"></v-checkbox>
        </v-app-bar>
        <v-sheet
            id="scrolling-techniques-6"
            class="overflow-y-auto"
            max-height="600"
        >
            <v-container style="height: 1000px;"></v-container>
        </v-sheet>

        <v-app-bar color="deep-purple accent-4" dense dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                left
                bottom
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="n in 5"
                    :key="n"
                    @click="() => {}"
                >
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list
            nav
            dense
        >
            <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
            >
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
        <!-- shrink-on-scroll, hide-on-scroll, elevate-on-scroll, inverted-scroll -->
        <v-app-bar color="blue darken-2 mt-3" dense dark scroll-target="#scrolling-techniques-1" shrink-on-scroll>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <template v-slot:extension>
                <v-tabs align-with-title>
                <v-tab>Tab 1</v-tab>
                <v-tab>Tab 2</v-tab>
                <v-tab>Tab 3</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-sheet
            id="scrolling-techniques-1"
            class="overflow-y-auto"
            max-height="600"
        >
            <v-container style="height: 1000px;"></v-container>
        </v-sheet>

        <!-- prominent, collapse, dense -->
        <v-toolbar
            dark
            dense
            collapse
            :src="hibike_img"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Vuetify</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>

export default {
    name: "APPBAR",
    data() {
        return {
            collapseOnScroll: true,
            drawer: false,
            group: null,    
            hibike_img: require('../Image/Hibike.jpg')
        }
    },
}
</script>

<style>

</style>