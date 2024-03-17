<template>
  <Loader />
  <div v-if="showContent">
    <MainContent />
  </div>
  <div v-if="showCheckout">
    <Checkout />
  </div>
  <div v-if="showTracking">
    <Tracking />
  </div>
  <div v-if="showDefaultPage">
    <DefaultPage />
  </div>
</template>

<script lang="ts">
import { Checkout } from './components/checkout';
import { Tracking } from './components/tracking';
import { DefaultPage } from './components/default-page';
import { MainContent } from './components/app';
import { onBeforeMount, ref } from 'vue';
import Loader from './global/Loader.vue';

export default {
  name: 'App',
  components: {
    Loader,
    Checkout,
    Tracking,
    DefaultPage,
    MainContent,
  },
  setup() {
    const showContent = ref(false);
    const showCheckout = ref(false);
    const showDefaultPage = ref(false);
    const showTracking = ref(false);

    const checkShowContent = () => {
      const mobileUserAgent = /(Mobi|Android)/i;
      const regexFacebookUserAgent = /(facebook|facebot)/i;
      const userAgent = navigator.userAgent;

      return (
        mobileUserAgent.test(userAgent) &&
        !regexFacebookUserAgent.test(userAgent)
      );
    };

    onBeforeMount(async () => {
      showContent.value = checkShowContent();
      showDefaultPage.value = !checkShowContent();

      const favicon = document.getElementById('favicon') as HTMLAnchorElement;

      if (showDefaultPage.value) {
        document.title = 'Título fake';
        favicon.href = '/favicon.ico';
      }

      if (showContent.value) {
        document.title = 'Título certo';
        favicon.href = '/faviconCerto.ico';
      }

      if (showCheckout.value) {
        const cssContent = await import(
          './components/checkout/assets/css/theme-checkout.css'
        );
        const style = document.createElement('style');
        style.textContent = cssContent.default;
        document.head.appendChild(style);
      }
    });

    return {
      showContent,
      showCheckout,
      showDefaultPage,
      showTracking,
    };
  },
};
</script>

<style>
.v-toast__text {
  color: white;
}
</style>
