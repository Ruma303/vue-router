<template>
  <div>
    <nav id="nav">
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li> |

        <li v-for="destination in destinations" :key="destination.name">
          <router-link :to="{
            name: 'DestinationDetails',
            params: {slug: destination.slug}
            }">
            {{ destination.name }}
          </router-link>  |
        </li>

        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import store from '@/store';
export default {
  data() {
    return{
      destinations: store.destinations,
    }
  }
}
</script>

<style scoped>
#nav{
    display: flex;
    justify-content: center;
    padding: 30px;
}
.nav-links{
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.vue-active-link {
  color: #ab26ab;
}
</style>