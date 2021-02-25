<template>
  <div class="register">
    <div class="container">
      <div class="registration-form">
        <div class="card card-body border border-danger">
          <form @submit.prevent="registerUser">
            <div class="form-row">
              <div class="form-group col-sm col-md-6 mb-4">
                <label for="">Username</label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group col-sm col-md-6 mb-4">
                <label for="">First Name</label>
                <input
                  v-model="fname"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group col-sm col-md-6 mb-4">
                <label for="">Second Name</label>
                <input v-model="mname" type="text" class="form-control" />
              </div>
              <div class="form-group col-sm col-md-6 mb-4">
                <label for="">Last Name</label>
                <input
                  v-model="lname"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group col-sm col-md-6 mb-4">
                <label for="">Email</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group col-sm col-md-6 mb-4">
                <label for="">Date of Birth</label>
                <input
                  v-model="dob"
                  type="date"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group col-sm col-md-6 mb-4">
                <label for="">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group col-sm col-md-6 mb-4">
                <label for="">Confirm Password</label>
                <input
                  v-model="confirmation"
                  type="password"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <button class="btn btn-danger float-right" type="submit">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      fname: "",
      mname: "",
      lname: "",
      email: "",
      dob: null,
      password: "",
      confirmation: "",
      joined: ""
    };
  },
  methods: {
    registerUser() {
      if (this.password === this.confirmation) {
        let userData = {
          username: "",
          first_name: "",
          second_name: "",
          last_name: "",
          email: "",
          dob: "",
          password: ""
        };
        userData.username = this.username;
        userData.first_name = this.fname;
        userData.second_name = this.mname;
        userData.last_name = this.lname;
        userData.dob = this.dob;
        userData.email = this.email;
        userData.password = this.password;
        //console.log(userData);
        this.$store.dispatch("registerUser", userData);
        window.location("http://192.168.100.97:8081/#/login")
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  padding-top: 70px;
}
</style>
