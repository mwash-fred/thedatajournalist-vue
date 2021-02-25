<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-sm col-md-4 mb-3">
        <div class="card card-body shadow">
          <div class="card-text text-center">
            <div class="engagement">
              None yet
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm col-md-4 mb-3">
        <div class="card card-body shadow">
          <div class="card-text text-center">
            <div class="engagement">
              None yet
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm col-md-4 mb-3">
        <div class="card card-body shadow">
          <div class="card-text text-center">
            <div class="engagement">
              None yet.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardContent"
};
</script>

<style lang="scss" scoped>
.engagement{
  font-weight: lighter;
  font-size: 18pt;
}
</style>
