<template>
  <div>
    <p>current theme: {{ theme }}</p>
    <button @click="changeTheme">change theme</button>
    <p>hello {{ userStore.fullName }}</p>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="firstName">first name: </label>
        <input v-model="form.firstName" />
      </div>
      <div>
        <label for="lastName">last name: </label>
        <input v-model="form.lastName" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import { useUserStore, useAppStore } from '../store';

const appStore = useAppStore();
// 解构失去响应式，用 storeToRefs 包一下即可恢复
const { theme } = storeToRefs(appStore);

const changeTheme = () => {
  // 1. 直接修改 （不推荐）
  // appStore.theme = 'dark';
  // 2. 调用 action 修改
  appStore.switchTheme();
  // 3. $patch
  appStore.$patch((state) => {
    state.theme = 'dark';
  });
};

const form = reactive({
  firstName: '',
  lastName: '',
});
const userStore = useUserStore();

const handleSubmit = () => {
  userStore.setUser(form);
};
</script>
<style scoped lang="scss"></style>
