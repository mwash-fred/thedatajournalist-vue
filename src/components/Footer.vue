<template>
  <div class="footer">
    <hr />
    <div class="text-center">
      <p>&copy; {{ year }} thedatajournalist. All Rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getYear() {
      var y = new Date();
      this.year = y.getFullYear();
    }
  },
  data() {
    return {
      year: this.getYear()
    };
  },
  mounted() {
    this.getYear();
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background: #000000;
  color: white;
  padding: 15px;
}
.footer hr {
  background: #ffffff;
  color: #ffffff;
}
</style>
