<script setup>
import Tab from '../../../components/Tab.vue'
</script>

# Emit

Child component:
<Tab>
  <template #tab1>

```vue
<!-- EmitChild.vue -->
<template>
  <input :value="modelValue" @input="(event) => updateModelValue(event)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: {
    "update:modelValue": (value: string) => true,
  },
  setup(props, { emit }) {
    const updateModelValue = (event: Event) => 
      emit("update:modelValue", (event.target as HTMLTextAreaElement).value);

    return {
      props,
      emit,
      updateModelValue,
    };
  },
});
</script>
```
  </template>
  <template #tab2>

```vue
<!-- EmitChild.vue -->
<template>
  <input :value="modelValue" @input="(event) => updateModelValue(event)" />
</template>

<script setup lang="ts">
// Method 1
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

// Method 2
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const emit = defineEmits({
  "update:modelValue": (value: string) => true,
});

const updateModelValue = (event: Event) =>
  emit("update:modelValue", (event.target as HTMLTextAreaElement).value);
</script>
```
  </template>
</Tab>

Parent component:
<Tab>
  <template #tab1>

```vue
<template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let reactiveValue = ref("false");

    return {
      ref,
      EmitChild,
      reactiveValue,
    };
  },
});
</script>
```
  </template>
  <template #tab2>

```vue
<template>
  <EmitChild v-model="reactiveValue" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import EmitChild from "./EmitChild.vue";

let reactiveValue = ref("false");
</script>
```
  </template>
</Tab>