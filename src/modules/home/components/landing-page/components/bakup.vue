<template>
  <section class="home-sec">
    <div class="menu-web d-md-block d-none">
      <div
        class="home menuTxt menuTxt01"
        v-bind:class="{ 'stroke-text': !showImage1 }"
        @mouseenter="showImage1 = true"
        @mousemove.self="onMouseMove($event)"
        @mouseleave="showImage1 = false"
      >
        Contacts
      </div>
      <div class="conOfimg">
        <img
          v-show="showImage1"
          src="@/assets/img/contact-img.png"
          class="img1"
          :style="{ left: page.left + 'px', top: page.top + 'px' }"
        />
      </div>
      <div
        class="home menuTxt menuTxt02"
        v-bind:class="{ 'stroke-text': !showImage2 }"
        @mouseenter="showImage2 = true"
        @mousemove.self="onMouseMove($event)"
        @mouseleave="showImage2 = false"
        @click="$router.push({ name: 'service' })"
      >
        Services
      </div>
      <div class="conOfimg">
        <img
          v-show="showImage2"
          src="@/assets/img/sound.jpg"
          class="img1"
          :style="{ left: page.left + 'px', top: page.top + 'px' }"
        />
      </div>
      <div
        class="home menuTxt menuTxt03"
        v-bind:class="{ 'stroke-text': !showImage3 }"
        @mouseenter="showImage3 = true"
        @mousemove.self="onMouseMove($event)"
        @mouseleave="showImage3 = false"
      >
        Soundtracks
      </div>
      <div class="conOfimg">
        <img
          v-show="showImage3"
          src="@/assets/img/menu-img.png"
          class="img1"
          :style="{ left: page.left + 'px', top: page.top + 'px' }"
        />
      </div>
      <div
        class="home menuTxt menuTxt04"
        v-bind:class="{ 'stroke-text': !showImage4 }"
        @mouseenter="showImage4 = true"
        @mousemove.self="onMouseMove($event)"
        @mouseleave="showImage4 = false"
      >
        Music
      </div>
      <div class="conOfimg">
        <img
          v-show="showImage4"
          src="@/assets/img/music.jpg"
          class="img1"
          :style="{ left: page.left + 'px', top: page.top + 'px' }"
        />
      </div>
    </div>
    <div class="pt-4">
      <div class="leftTxt">Arab Business</div>
    </div>

    <div class="pt-3 rollTxt">
      <vgl-rollup text="Home"></vgl-rollup>
    </div>
    <div class="pt-3 rollTxt">
      <vgl-rollup text="News"></vgl-rollup>
    </div>
    <div class="pt-3 rollTxt">
      <vgl-rollup text="Events"></vgl-rollup>
    </div>
    <div class="menu-mob d-md-none d-block">
      <div
        class="home menuMobTxt"
        v-bind:class="{ 'stroke-text': !menumobenter01 }"
        @mouseenter="menumobenter01 = true"
        @mousemove.self="onMouseMovemob($event)"
        @mouseleave="menumobenter01 = false"
      >
        Contacts
      </div>
      <div class="conOfimg">
        <img
          v-show="menumobenter01"
          src="@/assets/img/contact-img.png"
          class="imgMob"
          :style="{ left: page.left + 'px', top: page.top + 'px' }"
        />
      </div>
      <div
        class="home menuMobTxt"
        v-bind:class="{ 'stroke-text': !menumobenter02 }"
        @mouseenter="menumobenter02 = true"
        @mousemove.self="onMouseMovemob($event)"
        @mouseleave="menumobenter02 = false"
        @click="$router.push({ name: 'service' })"
      >
        Services
      </div>
      <div class="conOfimg">
        <img
          v-show="menumobenter02"
          src="@/assets/img/sound.jpg"
          class="imgMob"
          :style="{ left: page.left + 'px', top: page.top + 'px' }"
        />
      </div>
      <div
        class="home menuMobTxt"
        v-bind:class="{ 'stroke-text': !menumobenter03 }"
        @mouseenter="menumobenter03 = true"
        @mousemove.self="onMouseMovemob($event)"
        @mouseleave="menumobenter03 = false"
      >
        Soundtracks
      </div>
      <div class="conOfimg">
        <img
          v-show="menumobenter03"
          src="@/assets/img/menu-img.png"
          class="imgMob"
          :style="{ left: page.left + 'px', top: page.top + 'px' }"
        />
      </div>
      <div
        class="home menuMobTxt"
        v-bind:class="{ 'stroke-text': !menumobenter04 }"
        @mouseenter="menumobenter04 = true"
        @mousemove.self="onMouseMovemob($event)"
        @mouseleave="menumobenter04 = false"
      >
        Music
      </div>
      <div class="conOfimg">
        <img
          v-show="menumobenter04"
          src="@/assets/img/music.jpg"
          class="imgMob"
          :style="{ left: page.left + 'px', top: page.top + 'px' }"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      showImage1: false,
      showImage2: false,
      showImage3: false,
      showImage4: false,
      menumobenter01: false,
      menumobenter02: false,
      menumobenter03: false,
      menumobenter04: false,
      page: {
        left: 0,
        top: 0,
      },
    };
  },

  methods: {
    onMouseMove(e) {
      this.page.left = e.pageX - 120;
      this.page.top = e.pageY - 150;
    },
    onMouseMovemob(e) {
      this.page.left = e.pageX - 20;
      this.page.top = e.pageY - 50;
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import "./_landing-page.scss";
</style>
