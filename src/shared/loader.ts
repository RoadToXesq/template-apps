import { computed, ref } from 'vue';

export const showLoader = ref(false);

export const setShowLoader = (view: boolean) => {
  showLoader.value = view;
};

export const getShowLoader = computed(() => {
  return showLoader.value;
});
