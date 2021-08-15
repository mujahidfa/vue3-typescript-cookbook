<template></template>

<script lang="ts">
import { defineComponent, ref, computed, WritableComputedRef } from "vue";

export default defineComponent({
  setup() {
    const count = ref(1);

    // Method 1: recommended
    const plusOne = computed<number>({
      get: (): number => count.value + 1,
      set: (val: number): void => {
        count.value = val - 1;
      },
    });

    // Method 2
    const plusTwo: WritableComputedRef<number> = computed({
      get: (): number => count.value + 2,
      set: (val: number): void => {
        count.value = val - 2;
      },
    });

    plusOne.value = 1;
    console.log(count.value); // 0
    plusOne.value = 5;
    console.log(count.value); // 3

    return {
      count,
      plusOne,
      plusTwo,
    };
  },
});
</script>
