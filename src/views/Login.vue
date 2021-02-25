<template>
  <div class="login">
    <div class="container">
      <div class="login-form">
        <div class="card card-body border border-danger">
          <div v-if="error" class="alert alert-danger text-center" role="alert">
            Username/Password is incorrect.
          </div>
          <form @submit.prevent="login">
            <div class="form-row">
              <div class="form-group col-sm col-md-12 mb-4">
                <label for="username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  required
                  v-model="username"
                />
              </div>
              <div class="form-group col-sm col-md-12 mb-4">
                <label for="username">Password</label>
                <input
                  type="text"
                  class="form-control"
                  required
                  v-model="password"
                />
              </div>
            </div>
            <div class="text-center"><a href="">Forgot Password?</a></div>
            <button class="btn btn-danger float-right" type="submit">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      this.$store.dispatch("loginUser", {
        username: this.username,
        password: this.password
      });
      //this.redirect();
      window.location="http://192.168.100.97/#/dashboard";
    },
    redirect() {
      if (this.$store.state.token == null) {
        //this.login();
        console.log(this.$store.state.token);
        return;
      } else {
        console.log(this.$store.state.token);
        window.location="http://192.168.100.97/#/dashboard";
      }
    },
    mounted() {
      console.log("Mounted");
      this.redirect();
    },
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding-top: 70px;
}
</style>
