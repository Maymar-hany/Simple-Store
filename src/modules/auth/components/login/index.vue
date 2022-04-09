<template>
  <div class="conOfLoginPage fill-height">
    <v-form class="fill-height conOfLoginForm">
      <v-container fluid class="fill-height">
        <v-row class="fill-height d-flex justify-center">
          <v-col md="7" cols="12" class="d-flex justify-center">
            <img src="@/assets/img/login.jpg" class="w-75" />
          </v-col>
          <v-col md="5" cols="12">
            <div class="formCard fill-height">
              <div class="conOfFormSection fill-height">
                <v-row>
                  <v-col cols="12">
                    <div class="loginHeader"></div>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      outlined
                      placeholder="Email Address"
                      v-model="form.email"
                      class="formInput"
                      required
                      :error-messages="emailErrors"
                      @input="$v.form.email.$touch()"
                      @blur="$v.form.email.$touch()"
                      solo
                      hide-details="auto"
                    ></v-text-field>
                    <!-- persistent-placeholder -->
                  </v-col>
                  <v-col cols="12 pb-2">
                    <v-text-field
                      outlined
                      class="formInput"
                      placeholder="Password"
                      v-model="form.password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      required
                      :error-messages="passwordErrors"
                      @input="$v.form.password.$touch()"
                      @blur="$v.form.password.$touch()"
                      hide-details="auto"
                      solo
                    ></v-text-field>
                    <!-- persistent-placeholder -->
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <div class="conLoginFooter">
                      <div class="btnLoginCon">
                        <v-btn
                          class="primaryBtn loginBtn"
                          @click="loginForm"
                          text
                          tile
                          :disabled="isLoading"
                          :loading="isLoading"
                        >
                          LOGIN
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" v-if="validMessage">
                    <div class="vaidMessage">Wrong Email Or Password!</div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import { ApiService } from "@/modules/shared/services/api";
let apiServices = new ApiService();

export default {
  name: "login",
  mixins: [validationMixin],
  validations: {
    form: {
      email: { required },
      password: { required },
    },
  },
  data() {
    return {
      isLoading: false,
      validMessage: false,

      form: {
        email: "",
        password: "",
      },
      showPassword: false,
    };
  },
  methods: {
    loginForm() {
      this.$v.$touch();
      if (this.$v.$error) return;
      this.isLoading = true;
      apiServices.post("login", this.form).then((res) => {
        if (res) {
          this.validMessage = false;
          this.$store.commit("setToken", res.token);
          this.$store.commit("setUser", res.name);

          this.isLoading = false;
          this.$router.push("/");
        } else {
          this.validMessage = true;
          this.isLoading = false;
        }
      });
    },
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.required && errors.push("Password is required.");
      return errors;
    },
  },
};
</script>
<style lang="scss">
@import "./_login.scss";
</style>
