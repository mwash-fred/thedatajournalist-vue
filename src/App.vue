<template>
  <div>
    <!-- <NavBar /> -->
    <router-view class="viewer" />
    <Footer />
  </div>
</template>

<script>
//imports
//import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

//exports
export default {
  components: {
    //NavBar, '
    Footer
  }
};
</script>

<style lang="scss" scoped>
.viewer {
  min-height: 80vh;
  background-color: #e5e7eb;
}
</style>
