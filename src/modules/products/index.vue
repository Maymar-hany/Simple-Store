<template>
  <section>
    <v-row>
      <div>
        <transition-group name="fade" class="row" tag="div">
          <div
            v-for="(item, index) in listData"
            :key="index"
            class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3"
          >
            <div class="card">
              <div class="d-flex justify-center">
                <img
                  class="card-img-top"
                  src="@/assets/img/3.jpg"
                  alt="Card image cap"
                />
              </div>

              <div class="card-body">
                <div class="conOfItemTitle d-flex">
                  <div class="card-title">{{ item.title }}</div>
                  <div class="card-text">${{ item.price }}</div>
                </div>
                <div class="conOfItemTitle d-flex">
                  <div class="inStockTxt pb-1">In Stock({{ item.stock }})</div>
                </div>
                <div class="conOfItemTitle d-flex">
                  <button
                    type="button"
                    class="btn viewBtn btn-lg"
                    @click="$router.push('/item/' + item.id)"
                  >
                    view
                  </button>
                  <button
                    type="button"
                    class="btn addBtn btn-lg"
                    @click="addtoCart(item)"
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </v-row>
  </section>
</template>

<script>
import { dollars } from "@/modules/filters";
import { ApiService } from "@/modules/shared/services/api";
let apiServices = new ApiService();
export default {
  name: "products",
  props: ["invId", "name", "image", "price"],
  data() {
    return {
      listData: [],
      isLoading: false,
    };
  },

  filters: {
    dollars,
  },
  methods: {
    addtoCart(it) {
      this.$store.commit("inCart", it);
    },
    getProductsData() {
      this.listData = [];
      this.isLoading = true;
      apiServices.get(`products`).then((res) => {
        if (res) {
          this.listData = res;
          this.isLoading = false;
        } else this.isLoading = false;
      });
    },
  },
  created() {
    this.getProductsData();
  },
};
</script>

<style lang="scss" scoped>
.inStockTxt {
  color: #7a7272;
  font-size: 0.8rem;
}
.conOfItemTitle {
  justify-content: space-between;
  padding: 0px 20px;
}
.addBtn {
  background: #cb3232;
  padding: 8px;
  border-radius: 5px;
  color: #fff;
}
.viewBtn {
  background: #7a7272;
  padding: 8px;
  border-radius: 5px;
  color: #fff;
}
.fade-move {
  transition: transform 1s;
}
.card {
  transition: 500ms;
  position: relative;
  overflow: hidden;
  border: 1px solid #8080808f;
}

.card img {
  z-index: 1;
  width: 75%;
}

.card button {
  width: 40%;
  margin-bottom: 10px;
}

.card:hover img {
  filter: blur(4px);
}

.card:hover .overlay {
  opacity: 0.8;
}

.card .overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #232b34;
  opacity: 0;
  z-index: 100;
  transition: all 0.3s ease-in;
}

.card:hover,
.card:active {
  transform: scaleY(1.1) scaleX(1.06);
  box-shadow: 0 14px 98px rgba(0, 0, 0, 0.25), 0 0px 60px rgba(0, 0, 0, 0.22);
}
</style>
