<template>
  <div id="container">
    <nav>
      
    </nav>
    <!-- <LoaderVue/> -->

    <HomeVue/>
    <AboutVue/>
  </div>
</template>

<script>
/* import LoaderVue from '@/components/elements/Loader.vue' */
import HomeVue from '@/components/views/Home.vue';
import AboutVue from '@/components/views/About.vue';
/* import SkillsVue from '@/components/views/Skills.vue';
import WorksVue from '@/components/views/Works.vue';
import ContactVue from '@/components/views/Contact.vue'; */

export default {
  name: 'App',
  components: {
    /* LoaderVue, */
    HomeVue,
    AboutVue
  }
}
</script>

<style scoped> 
  #container{
    width: 100vw;
    max-width: 100%;
    height: 100%;
  }

  nav{
    width: 100vw;
    max-width: 100%;
    height: 80px;
    background-color: red;
    position: fixed;
  }
</style>
