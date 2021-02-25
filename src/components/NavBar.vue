<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <a class="navbar-brand" href="/">thedatajournalist</a>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              href=""
              class="nav-link dropdown-toggle active"
              id="blogDropdown"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-epanded="false"
            >
              Blogs
            </a>
            <div class="dropdown-menu bg-danger" aria-labelledby="blogDropdown">
              <router-link to="" class="dropdown-item">Technology</router-link>
              <router-link to="" class="dropdown-item"
                >Entertainment</router-link
              >
              <router-link to="" class="dropdown-item">Politics</router-link>
              <router-link to="" class="dropdown-item">Fashion</router-link>
              <router-link to="" class="dropdown-item">Sports</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/podcasts"
              >Podcasts</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/models"
              >Models</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/login"
              >Sign In</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/register"
              >Sign Up</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped></style>
