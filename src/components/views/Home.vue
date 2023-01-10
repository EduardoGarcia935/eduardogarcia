<template>
  <div id="main_container">
    <main>
      <div id="hero__text">
        <h2>Creative</h2>
        <span>Front End</span>
        <h2>Developer</h2>
      </div>

      <div id="two__coluns__text">
        <div class="text">
          <h3>Hi, i am</h3>
          <h2>Eduardo Garcia</h2>
          <p>I create beautiful and uniques interfaces for the mobile and web.</p>
          <button>
            <a href="#">Contact me</a>
          </button>
        </div>
        <div class="bubbles">
          <div class="glass">
            <div class="bolha green"></div>
            <div class="bolha white"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default{
    name: 'HomeVue',
    components: {},
    data(){
      return {

      }
    },
  }
</script>

<style scoped>
  body[data-aos-delay='5400'] [data-aos],
  [data-aos][data-aos][data-aos-delay='5400'] {
    transition-delay: 5400ms;
  }

  body[data-aos-delay='5900'] [data-aos],
  [data-aos][data-aos][data-aos-delay='5900'] {
    transition-delay: 5900ms;
  }

  #main_container{
    width: 100vw;
    max-width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    color: var(--white);
    padding-top: 150px;
    padding-bottom: 80px;
  }

  main{
    padding: 24px;
  }

  #hero__text{
    margin-bottom: 280px;
  }

  #hero__text h2{
    font-family: 'Sora';
    font-size: 64px;
    font-weight: 400;
  }

  #hero__text span{
    font-size: 48px;
    font-weight: 600;
    color: var(--green-dark);
    padding-left: 70px;
    position: relative;
  }

  #hero__text span::before{
    content: '';
    position: absolute;
    background-color: var(--green-dark);
    width: 50px;
    height: 6px;
    left: -0px;
    top: 50%;
  }

  #two__coluns__text{
    height: 250px;
    display: flex;
    justify-content: space-between;
  }

  #two__coluns__text .text{
    max-width: 220px;
  }

  #two__coluns__text .text h2, h3{
    font-weight: 400;
  }

  #two__coluns__text .text h3{
    color: var(--green-dark);
    font-size: 16px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  #two__coluns__text .text h2{
    color: var(--white);
    font-size: 28px;
    margin-bottom: 20px;
  }

  #two__coluns__text .text p{
    margin-bottom: 20px;
    color: #cccccc;
  }

  #two__coluns__text .text button{
    padding: 14px 38px;
    border-radius: 12px;
    border: none;
    background-color: rgba(109, 232, 136, 0.4);
    border: 1px solid rgba(109, 232, 136, 1);
  }

  #two__coluns__text .text button a{
    color: var(--white);
  }

  #two__coluns__text .bubbles{
    margin-right: 24px;
  }

  #two__coluns__text .bubbles .glass{
    height: 100%;
    width: 50px;
    position: relative;
    padding-top: 20px;
  }

  #two__coluns__text .bubbles .glass::before{
    content: '';
    height: 100%;
    width: 40px;
    left: -30px;
    top: 0;
    background: rgba(3, 9, 23, 0.01);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    position: absolute;
    z-index: 2;
  }

  #two__coluns__text .bubbles .glass::after{
    content: '';
    position: absolute;
    height: 100%;
    width: 40px;
    top: 0;
    right: -30px;
    background: rgba(3, 9, 23, 0.01);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    position: absolute;
    z-index: 2;
  }

  .bolha{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
  }

  .green{
    background-color: var(--green-dark);
    animation: move-ball 5s ease infinite alternate
  }

  .white{
    background-color: var(--white);
    animation: move-ball 5s ease infinite 3s alternate;
  }

  @keyframes move-ball {
    0%{
      top: 20%;
      left: 30%;
    }
    50%{
      top: 50%;
      right: 80%;
    }
    100%{
      top: 30%;
      left: 60%;
    }
  }

</style>