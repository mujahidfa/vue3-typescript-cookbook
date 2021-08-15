<script setup>
import Tab from '../../components/Tab.vue'
</script>

# Home
Home page

https://github.com/typescript-cheatsheets/vue/blob/master/vue-3.md
https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
https://stackoverflow.com/questions/65002098/how-to-define-type-for-refbinding-on-template-in-vue3-using-typescript

<Tab>
  <template #tab1>

```vue
<template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {

    return {

    };
  },
});
</script>
```
  </template>
  <template #tab2>

```vue
<template>
</template>

<script setup lang="ts">
</script>
```
  </template>
</Tab>
