import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
// import disableDevtool from 'disable-devtool';
import App from './App.vue';
import { vMaska } from 'maska';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

// disableDevtool();
createApp(App)
  .use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions)
  // .directive('maska', vMaska)
  .mount('#app');
