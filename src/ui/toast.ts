import { useToast } from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();
const options = { position: 'top-right' } as any;

const success = (msg: string) => {
  $toast.success(msg, options);
};

const error = (msg: string) => {
  $toast.error(msg, options);
};

const info = (msg: string) => {
  $toast.info(msg, options);
};

const warning = (msg: string) => {
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
  clear,
};
