<template>
  <div id="main_container">
    <div id="content">
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'AboutVue',
    components: {},
    data(){
      return {

      }
    },
  }
</script>

<style scoped>
  #main_container{
    width: 100vw;
    max-width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: gray;

    color: white;
  }

  #content{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rosybrown;
  }

  #content .container{
    background-color: red;
    width: 50em;

  }

</style>