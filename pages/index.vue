<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest Razer news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview 
        id="1"
        thumbnail="https://assets2.razerzone.com/images/rzr-ph/rzph-og-image-1200x630.jpg"
        title="Razer Phone!"
        previewText="The new razer phone is here!"
      />
      <PostPreview 
        id="2"
        thumbnail="https://cdn.guidingtech.com/media/assets/WordPress-Import/2017/01/razer2.png"
        title="Project Valerie!"
        previewText="Razer makes a triple screen laptop!"
      />
      <PostPreview 
        id="3"
        thumbnail="https://assets.razerzone.com/eeimages/razer_pages/15506/images/razer-christine-gallery-03.jpg"
        title="Project Christine!"
        previewText="Razer's modular concept computer!"
      />
      <PostPreview 
        id="4"
        thumbnail="https://assets.razerzone.com/eeimages/projectlinda/projectlinda_2018_og_image.jpg"
        title="Project Linda!"
        previewText="Razer combines phone with laptop!"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.png');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
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


