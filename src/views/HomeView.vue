<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations-container">
      <div class="all-destinations"
      v-for="destination in destinations" 
      :key="destination.name">

        <router-link :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">
            <h4>{{ destination.name }}</h4>
            <figure>
              <img :src="require(`@/assets/${destination.image}`)" 
              :alt="destination.name" class="destination-img">
            </figure>
        </router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import router from "@/router/router.js";
import store from "@/store.js"
export default {
  name: "HomeView",
  components: {
    router
},
  data() {
    return {
      destinations: store.destinations,
    }
  }
};
</script>

<style scoped>
.destinations-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;
}
.destination-img {
  max-width: 70%;
}
</style>
