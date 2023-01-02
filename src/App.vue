<template>
  <div id="container">

    <HomeVue />
    <WorksVue/>
    <AboutVue/>
    <SkillsVue/>
    <ContactVue/>
  </div>
</template>

<script>
/* import LoaderVue from '@/components/elements/Loader.vue' */
import HomeVue from '@/components/views/Home.vue';
import WorksVue from '@/components/views/Works.vue';
import AboutVue from '@/components/views/About.vue';
import ContactVue from '@/components/views/Contact.vue';
import SkillsVue from '@/components/views/Skills.vue'

export default {
  name: 'App',
  components: {
    /* LoaderVue, */
    HomeVue,
    WorksVue,
    AboutVue,
    ContactVue,
    SkillsVue,
  }
}
</script>

<style scoped> 
  #container{
    width: 100vw;
    max-width: 100%;
    height: 100%;
  }
</style>
