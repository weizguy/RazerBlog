import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "Razer Phone",
                previewText: "Razer makes a phone!",
                thumbnail:
                  "https://d1urewwzb2qwii.cloudfront.net/sys-master/images/h0a/h85/8962373189662/razer-phone-usp5-AoV-desktop.jpg"
              },
              {
                id: "2",
                title: "Project Valerie",
                previewText: "Razer makes a triple display laptop!",
                thumbnail:
                  "http://assets.razerzone.com/eeimages/razer_pages/26526/projvalerie-og-1200x630-v1.png"
              },
              {
                id: "3",
                title: "Project Linda",
                previewText: "Razer merges phone and laptop!",
                thumbnail:
                  "https://d1urewwzb2qwii.cloudfront.net/sys-master/root/h92/h2e/8943648276510"
              },
              {
                id: "4",
                title: "Project Christine",
                previewText: "Razer makes an modular desktop!",
                thumbnail:
                  "https://assets.razerzone.com/eeimages/razer_pages/15506/images/razer-christine-gallery-03.jpg"
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
