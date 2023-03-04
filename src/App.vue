<template>
  <div>
    <TheNavigation />
    <transition name="moveUp">
      <router-view :key="$route.path"/>
    </transition>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components:{
    TheNavigation,
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* SLIDE */
.slide-enter-active,
.slide-leave-active {
  transition: opacity .3s, transform .3s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
/* MOVEUP */
.moveUp-enter-active {
  animation: fadeIn .6s ease-in;
}
@keyframes fadeIn {
  0%{opacity: 0;}
  50%{opacity: .5;}
  100%{opacity: 1;}
}
.move-leave-active {
  animation: moveUp 1s ease-in;
}
@keyframes moveUp {
  0%{tranform: translateY(0);}
  100%{tranform: translateY(-400px);}
}
/* FADE */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-to,
.fade-leave-to {
  opacity: 0;
}

</style>
