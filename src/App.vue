<template>
  <MainContent v-if="showContent" />
  <DefaultPage v-else />
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

      if (!showContent.value) {
        const favicon = document.getElementById('favicon');
        favicon.href = 'https://www.google.com/favicon.ico';
      }
    });

    return {
      showContent
    };
  }
};
</script>
