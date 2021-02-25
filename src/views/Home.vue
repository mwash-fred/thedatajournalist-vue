<template>
  <div class="home-page">
    <div class="welcome-image">
      <div class="banner-container">
        <p class="banner-heading">thedatajournalist</p>
        <p class="banner-text">Experience the power of AI</p>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm col-md-6 col-lg-6 mb-4">
          <div class="card border border-danger rounded">
            <div class="card-body">
              <div class="text-heading">
                <p>Featured Podcasts</p>
              </div>
              <img
                src="../assets/world.jpg"
                alt=""
                class="img-fluid img-responsive"
              />
              <div class="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque laboriosam obcaecati omnis ex, vel at neque quisquam
                  laudantium id dolorem a distinctio ea, in, similique quas.
                  Dolorem molestiae nisi numquam?
                </p>
              </div>
              <button class="btn btn-danger float-right">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm col-md-6 col-lg-6 mb-4">
          <div class="card border border-danger rounded">
            <div class="card-body">
              <div class="text-heading">
                <p>Featured Blogs</p>
              </div>
              <img
                src="../assets/world.jpg"
                alt=""
                class="img-fluid img-responsive"
              />
              <div class="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque laboriosam obcaecati omnis ex, vel at neque quisquam
                  laudantium id dolorem a distinctio ea, in, similique quas.
                  Dolorem molestiae nisi numquam?
                </p>
              </div>
              <button class="btn btn-danger float-right">
                LISTEN TO MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.welcome-image {
  background-image: url("../assets/keyboard.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
}
.text-heading {
  font-size: 20pt;
}
.banner-heading {
  font-size: 32pt;
  position: absolute;
  top: 20%;
  left: 10%;
  background-color: rgba($color: #e5e7eb, $alpha: 0.3);
  padding: 5px;
}
.banner-container {
  color: white;
  height: 60vh;
}
.banner-text {
  padding: 5px;
  font-size: 18pt;
  background-color: rgba($color: #e5e7eb, $alpha: 0.3);
  position: absolute;
  left: 10%;
  top: 30%;
}
</style>
