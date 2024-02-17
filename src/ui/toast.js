import { useToast } from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';

const options = {
  position: 'top-right',
};
const $toast = useToast();

const success = (msg) => {
  $toast.success(msg, options);
};

const error = (msg) => {
  $toast.error(msg, options);
};

const info = (msg) => {
  $toast.info(msg, options);
};

const warning = (msg) => {
  $toast.warning(msg, options);
};

const clear = () => {
  $toast.clear();
};

export default {
  success,
  warning,
  info,
  error,
  clear
};
