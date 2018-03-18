<template>        
    <section class="post-list">
      <PostPreview 
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://assets2.razerzone.com/images/rzr-ph/rzph-og-image-1200x630.jpg"
        title="Razer Phone!"
        previewText="The new razer phone is here!"
      />
      <PostPreview 
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://cdn.guidingtech.com/media/assets/WordPress-Import/2017/01/razer2.png"
        title="Project Valerie!"
        previewText="Razer makes a triple screen laptop!"
      />
      <PostPreview 
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://assets.razerzone.com/eeimages/razer_pages/15506/images/razer-christine-gallery-03.jpg"
        title="Project Christine!"
        previewText="Razer's modular concept computer!"
      />
      <PostPreview 
        id="4"
        :is-admin="isAdmin"
        thumbnail="https://assets.razerzone.com/eeimages/projectlinda/projectlinda_2018_og_image.jpg"
        title="Project Linda!"
        previewText="Razer combines phone with laptop!"
      />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

