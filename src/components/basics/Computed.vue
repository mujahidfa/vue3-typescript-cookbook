<template>
  <h1>Hi, my name is {{ fullName1 }}</h1>
  <h1>Hi, my name is {{ fullName2 }}</h1>
  <h1>Hi, my name is {{ fullName3 }}</h1>
  <h1>Hi, my name is {{ fullName4 }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref, computed, ComputedRef } from "vue";

export default defineComponent({
  setup() {
    const firstName = ref("Mujahid");
    const lastName = ref("Anuar");

    // Method 1: recommended
    const fullName1 = computed<string>(
      () => `${firstName.value} - ${lastName.value}`
    );
    // Method 2
    const fullName2: ComputedRef<string> = computed(
      () => `${firstName.value} - ${lastName.value}`
    );
    // Method 3
    const fullName3 = computed(
      (): string => `${firstName.value} - ${lastName.value}`
    );
    // Or, a mix of all 3
    const fullName4: ComputedRef<string> = computed<string>(
      (): string => `${firstName.value} - ${lastName.value}`
    );

    return {
      fullName1,
      fullName2,
      fullName3,
      fullName4,
    };
  },
});
</script>
