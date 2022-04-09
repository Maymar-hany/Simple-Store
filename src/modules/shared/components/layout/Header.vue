<template>
  <div class="topbar">
    <v-app-bar class="ConatinerOfHeader" color="white">
      <v-btn icon @click="$emit('togglenav')" class="hidden-lg-and-up">
        <img src="" alt="menu icon" />
      </v-btn>
      Simple Store
      <v-spacer></v-spacer>
      <div class="conOfCartIcon" @click="openCart">
        <div class="noOfItems">{{ itemsNumber }}</div>
        <v-icon> mdi-cart-outline </v-icon>
      </div>

      <v-menu
        class="conOfNotificationMenu"
        offset-y
        rounded="0"
        max-width="300"
        :left="true"
      >
      </v-menu>
      <v-menu :close-on-content-click="false" bottom offset-y :left="true">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="conUserbtn"
            v-bind="attrs"
            v-on="on"
            :ripple="false"
            text
          >
            <div class="conOfuserControl d-flex align-center">
              <div class="conOfUserInfo mx-2">
                <div class="userName">{{ user }}</div>
              </div>
            </div>

            <v-icon> mdi-chevron-down </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item class="conOfListUser" @click="$router.push('/profile')">
            <v-list-item-icon>
              <v-icon class="iconStyle">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item class="conOfListUser" @click="logout">
            <v-list-item-icon>
              <v-icon class="iconStyle">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <Cart ref="cartMove" />
  </div>
</template>
<script>
// import  ApiService  from "@/modules/shared/services/api.js";
// let apiServices = new ApiService();
import { mapGetters } from "vuex";
import Cart from "@/modules/Cart.vue";

export default {
  components: {
    Cart,
  },
  data: () => {
    return {
      notificationNumber: null,
      isLoadingNotificationNumber: false,
      metaProduct: null,
      isLoadingNotification: false,
      listData: [],
      pagination: {
        current_page: 1,
      },
    };
  },
  computed: {
    ...mapGetters(["user", "itemsNumber"]),
  },
  methods: {
    logout() {
      this.$store.commit("setToken", null);
      this.$store.commit("setUser", null);
      this.$router.push({ name: "auth" });
    },
    openCart() {
      this.$refs.cartMove.cartON();
    },
  },
  created() {},
  watch: {
    $route: {
      handler: function (to) {
        this.metaProduct = to.meta;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.noOfItems {
  position: absolute;
  top: -51%;
  left: 16px;
  background: #e95353;
  border-radius: 50px;
  padding: 0px 6px;
  color: #fff;
}
.conOfCartIcon {
  position: relative;
}
::v-deep {
  .theme--light.v-btn:focus::before {
    opacity: 0;
  }
  .topbar header.ConatinerOfHeader .v-toolbar__content {
    background: #00000085;
    color: #fff;
  }
}
</style>
