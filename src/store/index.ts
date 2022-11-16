import { useAppStore } from './app/index';
import { createPinia } from 'pinia';
import { useUserStore } from './modules/user';

const pinia = createPinia();

export { useUserStore, useAppStore };
export default pinia;
