<template>
  <div class="col-12 pa-0 pb-5">
    <h5>Categories</h5>
    <v-card>
      <v-tabs background-color="grey accent-4" dark>
        <v-tab @click="setCategory(0)"> All Products</v-tab>
        <v-tab
          v-for="(item, index) in listData"
          :key="index"
          @click="setCategory(item.id)"
          >{{ item.title }}</v-tab
        >
      </v-tabs>
    </v-card>
  </div>
</template>
<script>
import { ApiService } from "@/modules/shared/services/api";
let apiServices = new ApiService();
export default {
  name: "Categories",
  data() {
    return {
      listData: [],
      isLoading: false,
    };
  },

  methods: {
    getCategoriesData() {
      this.listData = [];
      this.isLoading = true;
      apiServices.get(`categories`).then((res) => {
        if (res) {
          this.listData = res;
          this.isLoading = false;
        } else this.isLoading = false;
      });
    },
    setCategory(id) {
      this.$store.commit("setcurrentCategory", id);
    },
  },
  created() {
    this.getCategoriesData();
  },
};
</script>
