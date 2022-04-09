<template>
  <section class="sec-menu">
    <v-toolbar-items class="">
      <v-menu
        :close-on-content-click="false"
        v-for="item in items"
        :key="item.title.En"
        open-on-hover
        bottom
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            :class="[item.className, item.addActive]"
            :ripple="false"
          >
            {{ item.title.En }}

            <v-icon v-if="!item.single"> mdi-chevron-down </v-icon>
          </v-btn>
        </template>
        <v-list dense v-if="item.items">
          <v-list-item-group v-model="selectedItem" class="conChildItem">
            <v-list-item v-for="child in item.items" :key="child.title">
              <v-list-item-content>
                <v-btn text tile :ripple="false">
                  <v-list-item-title
                    class="titleOfChildNav"
                    v-text="child.title"
                  ></v-list-item-title>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      drawer: false,
      selectedItem: "",
      items: [
        {
          active: false,
          title: { En: "Home", AR: "الرئيسية" },
          routeName: "home",
          addActive: "",
          single: true,
        },

        {
          active: false,
          single: true,
          title: { En: "ABOUT US", AR: "نبذه  عنا" },
          addActive: "",
          routeName: "about",
        },
        {
          active: false,
          title: { En: "News", AR: "تواصل معنا" },
          routeName: "news",
          className: "news",
          addActive: "",
          single: true,
        },
        {
          active: false,
          title: { En: "Partners", AR: "المناطق" },
          routeName: "partners",
          addActive: "",
          single: true,
        },

        {
          active: false,
          title: { En: "Store", AR: " وسائط" },
          addActive: "",
          single: true,
          routeName: "store",
        },
        {
          active: false,
          title: { En: "CONTACT US", AR: "تواصل معنا" },
          routeName: "contact",
          className: "contactUs",
          addActive: "",
          single: true,
        },
        {
          active: false,
          title: { En: "Careers", AR: "تواصل معنا" },
          routeName: "careers",
          className: "careers",
          addActive: "",
          single: true,
        },
        // {
        //   title: "Apply for membership",
        //   routeName: "register",
        //   className: "applyForMembership",
        //   single: true,
        // },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.sec-menu {
  padding: 10px;
  position: absolute;
  right: 0;
  z-index: 2;
}
::v-deep {
  .theme--light.v-btn--active:hover::before,
  .theme--light.v-btn--active::before,
  .theme--light.v-btn:hover::before {
    opacity: 0 !important;
  }
  .v-toolbar__items > .v-btn {
    height: unset !important;
  }
  .theme--light.v-btn.v-btn--has-bg {
    background-color: transparent;
  }
  .v-btn--is-elevated {
    box-shadow: none;
  }
  .theme--light.v-btn:hover::before {
    background-color: transparent;
  }
  .v-btn--is-elevated:hover {
    box-shadow: none;
    background: transparent;
  }
}
</style>
