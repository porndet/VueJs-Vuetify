<template>
  <div class="introduction">
    <v-expansion-panels popout>
        <v-expansion-panel
            v-for="(value, index) in message"
            :key="index"
        >
        <v-expansion-panel-header>
            <v-row
            align="center"
            class="spacer"
            no-gutters
            >
                <v-col cols="2" class="text-center">
                    <v-avatar
                        size="40"
                        v-if="value.picture != 'IMG'"
                    >
                        <img src="../Image/Porndet Picture 2020.jpg" alt="alt">
                    </v-avatar>
                    <v-icon :color="value.color" size="30" v-else>{{ value.icon }}</v-icon>
                </v-col>
                <v-col cols="4">
                    <strong>{{ value.name }}</strong>
                </v-col>
                <v-col cols="2" v-if="value.hometown">
                    <strong>{{ value.hometown }}</strong>
                    <v-avatar
                        size="30"
                        color="red"
                        class="ml-3"
                    >
                        <img src="../Image/download(1).jpg" alt="alt">
                    </v-avatar>
                </v-col>
                <v-col cols="4" class="text-center" v-if="value.birthday">
                   <span class="grey--text"> {{ value.birthday }} </span>
                </v-col>
            </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-row v-if="value.pictureSelf" align="center" >
                <v-col cols="4" max-width="100%">
                    <img src="../Image/Somtam.jpg" alt="" style="width:100%; border-radius: 10px;">
                </v-col>
                <v-col cols="4" max-width="100%">
                    <img src="../Image/tomyamgun.jpg" alt="" style="width:100%; border-radius: 10px;">
                </v-col>
                <v-col cols="4" max-width="100%">
                    <img src="../Image/elephant.jpg" alt="" style="width:100%; border-radius: 10px;">
                </v-col>
            </v-row>
            <v-row v-else-if="value.pictureAnime">
                <v-col cols="3" >
                    <v-card>
                        <v-img src="../Image/Hibike.jpg" height="250px"></v-img>
                        <v-card-title>
                            <span style="font-size: 15px;">Hibike! Euphonium</span>
                        </v-card-title>
                        <v-card-subtitle>
                            響けユーフォニアム
                        </v-card-subtitle>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card>
                        <v-img src="../Image/kimetsu.jpg" height="250px"></v-img>
                        <v-card-title>
                            <span style="font-size: 15px;">Kimetsu no yaiba</span>
                        </v-card-title>
                        <v-card-subtitle>
                            鬼滅の刃
                        </v-card-subtitle>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card >
                        <v-img src="../Image/tenki.jpg" height="250px"></v-img>
                        <v-card-title>
                            <span style="font-size: 15px;">Tenki no ko</span>
                        </v-card-title>
                        <v-card-subtitle>
                            天気の子
                        </v-card-subtitle>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card >
                        <v-img src="../Image/youname.jpg" height="250px"></v-img>
                        <v-card-title>
                            <span style="font-size: 15px;">Kimi no na wa</span>
                        </v-card-title>
                        <v-card-subtitle>
                            君の名は
                        </v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col cols="3" >
                    <v-card>
                        <v-img src="../Image/81lNySLNxCL.jpg" height="250px"></v-img>
                        <v-card-title>
                            <span style="font-size: 15px;">お隣の天使様にいつの間にか駄目人間にされていた件</span>
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card>
                        <v-img src="../Image/9784065240410_w.jpg" height="250px"></v-img>
                        <v-card-title>
                            <span style="font-size: 15px;">甘神さんちの縁結び</span>
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card >
                        <v-img src="../Image/91hVWxN7FpL.jpg" height="250px"></v-img>
                        <v-card-title>
                            <span style="font-size: 15px;">真の実力はギリギリまで隠していようと思う</span>
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card>
                        <v-img src="../Image/322111001054.jpg" max-height="250"></v-img>
                        <v-card-title>
                            <span style="font-size: 15px;">ぽんこつかわいい間宮さん ～社内の美人広報がとなりの席に居座る件～</span>
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
    name: 'Introduction',
    data() {
        return {
            message: [
                {
                    name: 'Porndet Pipitsuntonsan',
                    picture: '../Image/Porndet Picture 2020.jpg',
                    hometown: 'THAI',
                    birthday: '19 Day, April 1997',
                    flag: 'IMG',
                    pictureSelf: true
                },
                {
                    name: 'Anime',
                    picture: 'IMG',
                    icon: 'mdi-movie-open',
                    color: 'deep-orange darken-1',
                    total: '4',
                    pictureAnime: true
                },
                {
                    name: 'Novel, Manga',
                    picture: 'IMG',
                    icon: 'mdi-book-open-page-variant',
                    color: 'green darken-1',
                    total: '4',
                }
            ]
        }
    },
}
</script>

<style>
    .introduction{
        width: 70%;
    }
</style>