import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiMessage: "",
    token: localStorage.getItem("access_token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    dialog: false,
    currentCategory: 0,
    inCart: [],
    itemsNumber: 0,
    cartItems: [],
  },
  getters: {
    apiMessage(state) {
      return state.apiMessage;
    },
    currentCategory(state) {
      return state.currentCategory;
    },
    dialog(state) {
      return state.dialog;
    },
    token(state) {
      return state.token;
    },
    user(state) {
      return state.user;
    },
    itemsNumber(state) {
      // Cart Component
      return state.cartItems.length;
    },
    totalPrice(state) {
      // Cart Component
      if (state.cartItems.length != 0) {
        return state.cartItems.reduce((a, b) => {
          return b.price == null ? a : a + b.price;
        }, 0);
      }
    },
    inCart: (state) => state.inCart,
  },
  mutations: {
    inCart(state, n) {
      // Cart Component
      return state.cartItems.push(n);
    },
    outCart(state, n) {
      // Cart Component
      let index = state.cartItems.findIndex((x) => x.id === n);
      return state.cartItems.splice(index, 1);
    },
    ADD_TO_CART(state, invId) {
      state.inCart.push(invId);
    },
    REMOVE_FROM_CART(state, index) {
      state.inCart.splice(index, 1);
    },
    setApiMessage(state, message) {
      state.apiMessage = message;
    },
    setcurrentCategory(state, message) {
      state.currentCategory = message;
    },
    UPDATE_DIALOG(state, value) {
      state.dialog = value;
    },
    setToken(state, value) {
      if (!value) localStorage.removeItem("access_token");
      else localStorage.setItem("access_token", value);
      state.token = value;
    },
    setFooterExist(state, value) {
      state.footerExist = value;
    },
    setUser(state, value) {
      if (!value) localStorage.removeItem("user");
      else localStorage.setItem("user", JSON.stringify(value));
      state.user = value;
    },
    setIsRemember(state, value) {
      localStorage.setItem("isRemember", value);
      state.isRemember = value;
    },
  },
  actions: {
    addToCart(context, invId) {
      context.commit("ADD_TO_CART", invId);
    },
    removeFromCart(context, index) {
      context.commit("REMOVE_FROM_CART", index);
    },
  },
  modules: {},
});
