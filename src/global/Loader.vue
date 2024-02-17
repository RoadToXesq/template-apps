<template>
  <div v-if="isLoading" :class="{ 'overlay-loader': overlay }">
    <div class="custom-loader" :style="styles"></div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { getShowLoader } from '@/shared/loader';

export default {
  name: 'ZLoader',
  props: {
    loading: { type: Boolean, default: undefined },
    overlay: { type: Boolean, default: true },
    width: { type: [String, Number], default: '60px' },
    height: { type: [String, Number], default: '60px' },
  },
  setup(props) {
    const isLoading = computed(() =>
      typeof props.loading === 'boolean' ? props.loading : getShowLoader.value
    );

    const styles = computed(() => ({
      height: props.height,
      width: props.width,
    }));

    return {
      styles,
      isLoading,
    };
  },
};
</script>

<style lang="css">
.overlay-loader {
  position: fixed;
  top: 0 !important;
  left: 0;
  width: 100%;
  height: calc(100%);
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1060 !important;
}

.app-light-sidebar .overlay-loader {
  width: 100%;
  top: 0;
  height: 100% !important;
}

.loader {
  border: 4px solid var(--bs-text-gray-300);
  border-top: 4px solid var(--bs-primary);
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.custom-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #0069b1);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;
}

@keyframes s3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
