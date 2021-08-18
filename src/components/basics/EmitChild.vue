<template>
  <input :value="modelValue" @input="(event) => updateModelValue(event)" />
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";

// Method 1
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

// Method 2
// const props = defineProps({
//   modelValue: {
//     type: String,
//     required: true,
//   },
// });
// const emit = defineEmits({
//   "update:modelValue": (value: string) => true,
// });

const updateModelValue = (event: Event) =>
  emit("update:modelValue", (event.target as HTMLTextAreaElement).value);
</script>
