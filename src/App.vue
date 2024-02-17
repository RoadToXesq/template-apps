<template>
  <iframe
    v-if="showContent"
    src="https://viewer.typebot.io/whatsapp-web-bbb"
    style="width: 100%; height: 100vh"
  ></iframe>
  <div v-else>
    <DefaultPage />
  </div>
</template>

<script>
import { DefaultPage } from './components/default-page';
import { onBeforeMount, ref } from 'vue';

export default {
  name: 'App',
  components: {
    DefaultPage
  },
  setup() {
    const showContent = ref(false);

    const checkShowContent = () => {
      const mobileUserAgent = /(Mobi|Android)/i;
      const regexFacebookUserAgent = /(facebook|facebot)/i;
      const userAgent = navigator.userAgent;

      return (
        mobileUserAgent.test(userAgent) &&
        !regexFacebookUserAgent.test(userAgent)
      );
    };

    onBeforeMount(() => {
      showContent.value = checkShowContent();
      const favicon = document.getElementById('favicon');

      document.title = 'BBB-24';
      favicon.href = '/faviconCerto.ico';

      if (!showContent.value) {
        favicon.href = '/favicon.ico';
        document.title = 'Acordo Certo';
      }
    });

    return {
      showContent
    };
  }
};
</script>

<style>
.v-toast__text {
  color: white;
}

body {
  line-height: 0 !important;
}

#lite-badge {
  display: none !important;
}
</style>