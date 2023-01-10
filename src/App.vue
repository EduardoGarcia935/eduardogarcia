<template>
  <div id="container">
    <nav>
      <div class="links__one">
        <ul>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="6000"><a href="#home">Home</a></li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="6200"><a href="#about">About</a></li>
        </ul>
      </div>
      <div class="logo">
        <div class="container__logo">
          <a href="#home" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="6400"><img src="./assets/img/Logo.svg" alt="logo"/></a>
        </div>
      </div>
      <div class="links__two">
        <ul>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="6600"><a href="#skills">Skills</a></li>
          <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="6800"><a href="#works">Works</a></li>
        </ul>
      </div>
    </nav>

    <LoaderVue/>

    <div id="home">
      <HomeVue/>
    </div>

    <div id="about">
      <AboutVue/>
    </div>

    <div id="skills">
      <SkillsVue/>
    </div>

    <div id="works">
      <WorksVue/>
    </div>

    <div id="contact">
      <ContactVue/>
    </div>

  </div>
</template>

<script>
import LoaderVue from '@/components/elements/Loader.vue'
import HomeVue from '@/components/views/Home.vue';
import AboutVue from '@/components/views/About.vue';
import SkillsVue from '@/components/views/Skills.vue';
import WorksVue from '@/components/views/Works.vue';
import ContactVue from '@/components/views/Contact.vue';

import './assets/styles/navBar.css';

export default {
  name: 'App',
  components: {
    LoaderVue,
    HomeVue,
    AboutVue,
    SkillsVue,
    WorksVue,
    ContactVue
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
