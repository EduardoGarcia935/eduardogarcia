<template>
  <div id="main_container">
    <main>
      <div id="hero__text">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="5400" class="title_up">Creative</h2>
        <span>Front End</span>
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="5900" class="title_down">Developer</h2>
      </div>

      <div id="two__coluns__text">
        <div class="container">
          <div class="text">
          <h3 data-aos-anchor=".title_down" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="5900">Hi, i am</h3>
          <h2 data-aos-anchor=".title_up" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="5400">Eduardo Garcia</h2>
          <p data-aos-anchor=".title_up" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="5400">I create beautiful and uniques interfaces for the mobile and web.</p>
          <button>
            <a href="#">Contact me</a>
          </button>
        </div>
        <!-- <div class="bubbles" data-aos-anchor=".title_up" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="5900">
            <div class="glass">
              <div class="bolha green"></div>
              <div class="bolha white"></div>
            </div>
          </div>
        </div> -->
        <div class="bubbles" >
            <div class="glass">
              <div class="bolha green"></div>
              <div class="bolha white"></div>
            </div>
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
    text-align: center;
  }

  #hero__text h2{
    font-family: 'Sora';
    font-size: 120px;
    font-weight: 400;
  }

  .title_up{
    animation: move-reverse 9s ease 7000ms infinite alternate;
  }
  
  .title_down{
    animation: move 9s ease 7000ms infinite alternate;
  }

  #hero__text span{
    font-size: 90px;
    font-weight: 600;
    color: var(--green-dark);
    padding-left: 70px;
    position: relative;
  }

  @keyframes move{
    0%{
      transform: translateX(0px);
    }
    50%{
      transform: translateX(-5%);
    }
    100%{
      transform: translateX(5%);
    }
  }

  @keyframes move-reverse{
    0%{
      transform: translateX(0px);
    }
    50%{
      transform: translateX(5%);
    }
    100%{
      transform: translateX(-5%);
    }
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
    justify-content: center;
    align-items: center;
  }

  #two__coluns__text .container{
    display: flex;
    width: 50em;
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
    width: 50px;
    left: -40px;
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
    width: 50px;
    top: 0;
    right: -40px;
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
      left: -30%;
    }
    50%{
      top: 50%;
      right: 60%;
    }
    100%{
      top: 30%;
      left: 40%;
    }
  }

  @media screen and (min-width: 900px){
    #two__coluns__text .bubbles{
      margin-right: 150px;
    }

  }

  @media screen and (min-width: 700px) and (max-width:880px){
    #two__coluns__text{
      padding: 0 100px;
    }
  }

  @media screen and (max-width: 700px){
    #hero__text h2{
      font-size: 64px;
    }

    #hero__text span{
      font-size: 48px;
      padding-left: 70px;
    }

    #two__coluns__text .bubbles{
      margin-right: 200px;
    }
  }

  @media screen and (max-width: 540px){
    #two__coluns__text .bubbles{
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 361px){
    #two__coluns__text .text{
      max-width: 200px;
    }
  }

  @media screen and (min-width: 536px) and (max-width: 700px){
    .bolha{
      width: 60px;
      height: 60px;
    }

    #two__coluns__text .bubbles{
      margin-right: 120px;
    }

    #two__coluns__text .bubbles .glass::before{
      width: 100px;
      left: -90px;
    }

    #two__coluns__text .bubbles .glass::after{
      width: 100px;
      right: -100px;
    }
  }

</style>