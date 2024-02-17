<template>
  <div v-if="showContent">
    <MainContent />
  </div>
  <div v-else-if="showCheckout">
    <Checkout />
  </div>
  <div v-else>
    <DefaultPage />
  </div>
</template>

<script lang="ts">
import { Checkout } from './components/checkout';
import { DefaultPage } from './components/default-page';
import { MainContent } from './components/app';
import { onBeforeMount, ref } from 'vue';

export default {
  name: 'App',
  components: {
    Checkout,
    DefaultPage,
    MainContent,
  },
  setup() {
    const showContent = ref(false);
    const showCheckout = ref(false);

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
      // showContent.value = checkShowContent();
      showContent.value = true;
      const favicon = document.getElementById('favicon') as HTMLAnchorElement;

      if (!showContent.value) {
        favicon.href = '/favicon.ico';
        document.title = 'Acordo Certo';
      }

      if (showContent.value) {
        document.title = 'título da página correto';
        favicon.href = '/faviconCerto.ico';
      }

      if (showCheckout.value) {
        const cssContent = await import(
          './components/checkout/assets/css/theme-checkout.css'
        );
        const style = document.createElement('style');
        style.textContent = cssContent;
        document.head.appendChild(style);
      }
    });

    return {
      showContent,
      showCheckout,
    };
  },
};
</script>

<style>
.v-toast__text {
  color: white;
}
</style>
