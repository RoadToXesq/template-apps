import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import disableDevtool from 'disable-devtool';
import App from './App.vue';
import { vMaska } from 'maska';

disableDevtool();
createApp(App).directive('maska', vMaska).mount('#app');
