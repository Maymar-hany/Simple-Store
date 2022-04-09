<template>
  <div class="mediaCenterContainer my-3" v-if="mediaCenter">
    <v-container>
      <v-row>
        <v-col>
          <div class="conVideo text-center">
            <youtube :video-id="videoId" ref="youtube"></youtube>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="10" class="offset-md-1 pa-0">
          <carousel
            class="carasualStyle"
            :autoplay="false"
            :margin="20"
            :responsive="{
              0: {
                items: 3,
                nav: false,
                loop: false,
                dots: true,
              },
              768: {
                items: 5,
                nav: false,
                loop: false,
                dots: true,
              },
              1000: {
                items: 7,
                nav: false,
                loop: false,
                dots: false,
              },
            }"
          >
            <div
              class="conItems"
              v-for="(media, index) in mediaCenter"
              :key="index"
            >
              <div
                class="linkEvents"
                :class="{ active: media.active }"
                @click="changeMedia(index)"
              >
                <!-- <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }"> -->
                <img
                  :src="'https://img.youtube.com/vi/' + media.url + '/0.jpg'"
                  alt="item of the Image"
                />
                <!-- v-on="on" v-bind="attrs" -->
                <!-- </template>
                  <span>{{ media.title }}</span>
                </v-tooltip> -->
              </div>
            </div>
          </carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

import { ApiService } from "@/modules/shared/services/api";
let apiServices = new ApiService();
export default {
  data: () => ({
    mediaCenter: null,
    videoId: null,
  }),
  components: {
    carousel,
  },
  methods: {
    getmediaCenter() {
      apiServices.get("media").then((res) => {
        if (res.data) {
          this.mediaCenter = res.data;
          this.mediaCenter[0].active = true;
          this.videoId = res.data[0].url;
        }
      });
    },
    changeMedia(index) {
      if (this.mediaCenter[index].url != index) {
        this.mediaCenter.forEach(function (item) {
          delete item.active;
        });
        this.mediaCenter[index].active = true;

        this.videoId = this.mediaCenter[index].url;
        this.$refs.youtube.player.loadVideoById(this.videoId);
      }
    },
  },
  created() {
    this.getmediaCenter();
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./_media-center.scss";
</style>
