<template>
  <div class="about-page">
    <h1>About this Blog!</h1>
    <p>A quick blog created with VueJS, Nuxt, and Firebase based on a Razer Theme</p>
    <div class="logos">
      <div class="bg-logo" id="vue"></div>
      <div class="bg-logo" id="nuxt"></div>
      <div class="bg-logo" id="firebase"></div>
      <div class="bg-logo" id="razer"></div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  text-align: center;
}

.logos {  
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-logo {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
}
#vue {
  background-image: url("~assets/images/vue.png");
}
#nuxt {
  background-image: url("~assets/images/nuxt.png");
}
#firebase {
  background-image: url("~assets/images/firebase.png");
}
#razer {
  background-image: url("~assets/images/razer.png");
}
</style>
