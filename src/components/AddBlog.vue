<template>
  <div class="blog-component">
    <div class="container">
      <div class="row">
        <div class="col-sm col-md-12 col-lg-12">
          <div class="card card-body border border-danger">
            <form @submit.prevent="uploadBlog">
              <div>
                <span class="card-title">Add Blog to publish</span>
                <button class="btn btn-danger float-right">Publish</button>
              </div>
              <div
                class="image-preview col-sm col-md-12 col-lg-12 mt-4"
                :style="{ 'background-image': `url(${previewImage})` }"
                @click="selectImage"
              ></div>
              <div class="form-row">
                <div class="form-group col-sm col-md-12 col-lg-12">
                  <label for="thumbnail" class="blog-title"
                    >Blog Thumbnail</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    ref="fileInput"
                    @input="pickFile"
                  />
                </div>
                <div class="form-group col-sm col-md-12 col-lg-12 mb-4">
                  <label for="blog_title" class="blog-title">Blog Title</label>
                  <input
                    v-model="blog_title"
                    type="text"
                    class="form-control title"
                    placeholder="Blog Title"
                  />
                </div>
                <div class="form-group col-sm col-md-12 col-lg-12 mb-4">
                  <label for="blog_body" class="blog-body text-dark"
                    >Blog Content</label
                  >
                  <ckeditor
                    class="form-control"
                    :editor="editor"
                    v-model="blog_body"
                    :config="editorConfig"
                  ></ckeditor>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "AddBlog",
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {},
      blog_title: "",
      blog_body: "",
      previewImage: null
    };
  },
  methods: {
    uploadBlog() {},
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = e => {
          this.previewImage = e.target.result;
          console.log(this.previewImage);
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-title,
.blog-body {
  font-weight: bold;
  font-size: 16pt;
}
.title {
  height: 70px;
  font-weight: lighter;
  font-size: 28pt;
}
.blog-component {
  padding-top: 70px;
  padding-bottom: 24px;
}
.card-title {
  font-weight: lighter;
  font-size: 18pt;
}
.image-preview {
  height: 30vh;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
</style>
