<template>
  <div>
    <h3>{{ listData.name }}</h3>
    <h3>{{ listData.email }}</h3>
  </div>
</template>

<script>
import { ApiService } from "@/modules/shared/services/api";
let apiServices = new ApiService();
export default {
  name: "profile",
  data() {
    return {
      listData: [],
      isLoading: false,
    };
  },
  methods: {
    getuserData() {
      this.listData = [];
      this.isLoading = true;
      apiServices.get(`user`).then((res) => {
        if (res) {
          this.listData = res;
          this.isLoading = false;
        } else this.isLoading = false;
      });
    },
    inc() {
      // Info box Incrememnt button
      if (this.quan <= 8) return this.quan++;
    },
  },
  created() {
    this.getuserData(this.$route.params.id);
  },
};
</script>

<style scoped></style>
