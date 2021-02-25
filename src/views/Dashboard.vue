<template>
  <div class="dashboard">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm col-md-9 offset-md-3 mb-4">
          <div class="card card-body shadow">
            <div class="card-text">
              <span id="greetings">Goodmorning, Willy</span>
              <button class="btn btn-danger float-right" type="submit">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm col-md-3">
          <DashBar />
        </div>
        <div class="col-sm col-md-9">
          <DashboardContent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashBar from "@/components/DashBar.vue";
import DashboardContent from "@/components/DashboardContent.vue";
export default {
  name: "Dashboard",
  components: { DashBar, DashboardContent },
  data() {
    return {
      isLoggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  padding-top: 24px;
}
#greetings {
  font-weight: lighter;
  font-size: 16pt;
}
</style>
