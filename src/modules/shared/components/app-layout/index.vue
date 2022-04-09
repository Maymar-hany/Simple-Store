<template>
  <v-app class="v-app-Style fill-height">
    <main class="mainStyle">
      <Header @togglenav="navOpen = !navOpen" />
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Header from "@/modules/shared/components/layout/Header";

export default {
  data() {
    return {
      navOpen: this.$vuetify.breakpoint.mobile ? false : true,
      isSideBar: false,
    };
  },
  components: {
    Header,
  },
  computed: {},
  watch: {},
};
</script>
<style>
.mainStyle {
  height: 100%;
}
</style>
