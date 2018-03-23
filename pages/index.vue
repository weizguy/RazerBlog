<template>
  <div class="home-page">
    <section class="intro">
      <h1>The latest Razer tech!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.png");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  text-align: center;
  top: 0%;
  left: 5%;
  width: 300px;
  font-size: 1.5rem;
  color: rgb(211, 211, 211);
  background-color: #333;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 2px solid #00FF00;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 1.5rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
