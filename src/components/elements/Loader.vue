<template>
   <div id="main_container">
    <svg width="627" height="536" viewBox="0 0 627 536" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Logo">
      <g id="letra_G">
      <path d="M610.899 226.571H349.721L302.197 533H225.125L259.632 306.536L283.187 150.945H623.71L610.899 226.571Z" fill="url(#paint0_linear_145_2)"/>
      <path d="M511.718 379.269H409.23H406.337L417.909 306.743H596.848L562.548 533H383.195L394.766 462.54H499.32L511.718 379.269Z" fill="url(#paint1_linear_145_2)"/>
      <path d="M610.899 226.571H349.721L302.197 533H225.125L259.632 306.536L283.187 150.945H623.71L610.899 226.571Z" stroke="#41FB74" stroke-width="5"/>
      <path d="M511.718 379.269H409.23H406.337L417.909 306.743H596.848L562.548 533H383.195L394.766 462.54H499.32L511.718 379.269Z" stroke="#41FB74" stroke-width="5"/>
      </g>
      <path id="letra_E" d="M101.355 226.571L89.3704 307.156H260.458L248.887 380.715H3L60.4425 3H342.696L329.885 77.7992H123.257L112.926 151.772H214.173L202.189 226.571H101.355Z" fill="url(#paint2_radial_145_2)" stroke="white" stroke-width="5"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_145_2" x1="501.799" y1="533" x2="156.318" y2="248.267" gradientUnits="userSpaceOnUse">
      <stop stop-color="#41FB74"/>
      <stop offset="1" stop-color="#41FB74" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_145_2" x1="501.799" y1="533" x2="156.318" y2="248.267" gradientUnits="userSpaceOnUse">
      <stop stop-color="#41FB74"/>
      <stop offset="1" stop-color="#41FB74" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="paint2_radial_145_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.8713 -7.95127) rotate(57.4029) scale(576.855 518.791)">
      <stop stop-color="#FDFDFD"/>
      <stop offset="1" stop-color="#EEEEEE" stop-opacity="0"/>
      </radialGradient>
      </defs>
    </svg> 
    <p>Eduardo Garcia</p>
    <div class="box"></div>
  </div>
</template>

<script>
  export default{
    name: 'LoaderVue',
    components: {},
    data(){
      return {

      }
    },
  }
</script>

<style scoped>
#main_container{
  background-color: var(--black-dark);
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 1000;
  animation: endLoader 4s ease 4100ms forwards;
}

svg{
  width: 100px;
  height: 100px;
  fill-opacity: 0;
  animation: logo-animated 6300ms ease 0s forwards;
  margin-bottom: 10px;
}

p{
  font-size: 16px;
  letter-spacing: 1.5px;
  color: #FAF8F5;
  animation: revealWords 4200ms ease 0s forwards;
}

@keyframes endLoader {
  from{
    top: 0;
  }
  to{
    top: -2000px;
  }
}

@keyframes revealWords {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes logo-animated {
  0%{
    fill-opacity: 0;
    stroke-dasharray: 1 1000;
    stroke-dashoffset: 0;
    stroke-width: 0;
    opacity: 1;
  }
  30%{
    fill-opacity: 0;
    stroke-dasharray: 150 0;
    stroke-dashoffset: 0;
    stroke-width: 1;
    opacity: 1;
  }
  85%, 100%{
    fill-opacity: 1;
    stroke-dasharray: 150 0;
    stroke-dashoffset: 0;
    stroke-width: 0;
    opacity: 1;
  }
}

.box{
  width: 100%;
  height: 500px;
  background-color: var(--green);
  position: fixed;
  bottom: -100%;
  animation: line 1.6s ease 4100ms forwards, encolher 1.5s ease 4400ms forwards;
}

@keyframes line {
  from{
    bottom: -100%;
  }
  to{
    bottom: 100%;
  }
}

@keyframes encolher {
  from{
    height: 500px;
  }
  to{
    height: 20px;
  }
}
</style>