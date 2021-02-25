<template>
  <div class="model-component">
    <div class="container">
      <div class="row">
        <div class="col-sm col-md-12 col-lg-12">
          <div class="card card-body border border-danger">
            <form @submit.prevent="uploadModel">
              <div class="form-row">
                <div class="form-group col-sm col-md-12 mb-4">
                  <label for="">Podcast Title</label>
                  <input v-model="title" type="text" class="form-control" />
                </div>
                <div class="form-group col-sm col-md-12 mb-4">
                  <label for="">Podcast Description</label>
                  <textarea v-model="desc" class="form-control"></textarea>
                </div>
                <div class="form-group col-sm col-md-12 mb-4">
                  <label for="">Github reppository (.git)</label>
                  <input v-model="url" type="text" class="form-control" />
                </div>
              </div>
              <button class="btn btn-danger float-right" type="submit">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      desc: "",
      url: ""
    };
  },
  methods: {
    uploadModel() {}
  }
};
</script>

<style lang="scss" scoped>
.model-component {
  padding-top: 70px;
}
</style>
