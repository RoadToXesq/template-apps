<template>
  <div v-if="showContent">
    <MainContent />
  </div>
  <div v-else>
    <DefaultPage />
  </div>
</template>

<script>
import { DefaultPage } from './components/default-page';
import { MainContent } from './components/app';
import { onBeforeMount, ref } from 'vue';

export default {
  name: 'App',
  components: {
    DefaultPage,
    MainContent
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

      document.title = 'LIMPA NOME SERASA';
      favicon.href = '/favicon2.ico';

      if (!showContent.value) {
        favicon.href = '/favicon.ico';
        document.title = 'Liberte Suas Finanças';
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
</style>
