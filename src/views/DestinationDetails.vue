<template>
  <div>
    <section>
      <h1>{{ destination.name }}</h1> 
      <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </section>
    <router-view :key="$route.path" />
    <section>
      <h2>Top experiences in {{ destination.name }}</h2>

      <div class="cards">
          <div class="card"
            v-for="experience in destination.experiences"
            :key="experience.slug">

            <router-link 
            :to="{name: 'experienceDetails', params: { experienceSlug: experience.slug }}">

              <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
              <h5>{{ experience.name }}</h5>
              
            </router-link>

          </div>
        </div>

      
    </section>

  </div>
</template>

<script>
import store from '@/store.js';
export default {
  data(){
    return{};
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  }
}
</script>

<style>

</style>