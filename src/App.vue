<template>
  <div
    v-if="showContent"
    class="page-template page-template-elementor_canvas page page-id-218 elementor-default elementor-template-canvas elementor-kit-6 elementor-page elementor-page-218"
  >
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

      document.title = 'Resgata Brasil - Gov.br';
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
</style>