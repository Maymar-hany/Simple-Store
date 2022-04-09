<template>
  <div id="app" class="container">
    <div class="row mb-3">
      <div class="col-md-9"></div>
      <div class="col-md-3">
        <Header />
      </div>
      <Categories />
    </div>
    <Products v-if="currentCategory === 0" />
    <CategoryProducts :currentCategory="currentCategory" v-else />
  </div>
</template>

<script>
import Products from "@/modules/products";
import CategoryProducts from "@/modules/categoryProducts";

import Categories from "@/modules/categories";
import { mapGetters } from "vuex";

export default {
  name: "home",

  computed: {
    forSale() {
      return this.$store.getters.forSale;
    },
    ...mapGetters(["currentCategory"]),
  },
  components: {
    Products,
    Categories,
    CategoryProducts,
  },
};
</script>
