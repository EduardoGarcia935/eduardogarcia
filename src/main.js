import { createApp } from 'vue';
import App from './App.vue';
import Aos from 'aos';

import "aos/dist/aos.css";
import './assets/styles/normalize.css';
import './assets/styles/reset.css';

const app = createApp(App);
Aos.init()
app.mount('#app')
