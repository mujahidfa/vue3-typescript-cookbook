<template>
  <div ref="divRef"></div>
  <img alt="Vue logo" src="../../assets/logo.png" ref="imageRef" />
  <HelloWorld msg="Hello all!" ref="helloWorldRef" />

  <div
    v-for="(item, i) in [1, 2, 3]"
    :key="item"
    :ref="
      (el) => {
        if (el) divsRefs[i] = el;
      }
    "
  >
    {{ item }}
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate } from "vue";
import HelloWorld from "./HelloWorld.vue";

const divRef = ref<HTMLDivElement>();
const imageRef = ref<HTMLImageElement>();
const helloWorldRef = ref<InstanceType<typeof HelloWorld>>();

const divsRefs = ref<HTMLDivElement[]>([]);

// make sure to reset the refs before each update
onBeforeUpdate(() => {
  divsRefs.value = [];
});
</script>
