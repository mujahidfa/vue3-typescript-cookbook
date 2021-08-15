<script setup>
import Tab from '../../../components/Tab.vue'
</script>

# Ref

## Primitive types

Refs infer the type from the initial value, so you don't need to specify the types explicitly. But if you wish to do so anyways, here's how:

```ts
import { ref } from "vue"

const title = ref<string>("Vue 3 + TypeScript is the best!")
const isDarkMode = ref<boolean>(true)

const count = ref<number | null>(null)

interface Book {
  name: string;
  isbn: number;
}
const book = ref<Book>();
const books = ref<Book[]>([]);

const book = ref<Book>({
  name: "Great Expectations",
  isbn: 2937187398279,
});
const books = ref<Book[]>([book.value]);
```

## Template refs

### HTML Elements
<Tab>
<template #tab1>

```vue
<template>
  <div ref="divRef"></div>
  <img ref="imageRef" alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const divRef = ref<HTMLDivElement>();
    const imageRef = ref<HTMLImageElement>();

    return {
      divRef,
      imageRef
    };
  },
});
</script>
```
  </template>
  <template #tab2>

```vue
<template>
  <div ref="divRef"></div>
  <img ref="imageRef" alt="Vue logo" src="./assets/logo.png" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const divRef = ref<HTMLDivElement>();
const imageRef = ref<HTMLImageElement>();
</script>
```
  </template>
</Tab>


### Custom components
<Tab>
<template #tab1>

```vue
<template>
  <HelloWorld ref="helloworld" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const helloworld = ref<InstanceType<typeof HelloWorld>>();

    return {
      helloworld,
    };
  },
});
</script>
```

  </template>
  <template #tab2>

```vue
<template>
  <HelloWorld ref="helloworld" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const helloworld = ref<InstanceType<typeof HelloWorld>>();
</script>
```

  </template>
</Tab>

## Dynamic template refs
<Tab>
  <template #tab1>

```vue
<template>
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

<script lang="ts">
import { defineComponent, ref, onBeforeUpdate } from "vue";

export default defineComponent({
  setup() {
    const divsRefs = ref<HTMLDivElement[]>([]);

    // make sure to reset the refs before each update
    onBeforeUpdate(() => {
      divsRefs.value = [];
    });

    return {
      divsRefs
    };
  },
});
</script>
```
  </template>
  <template #tab2>

```vue
<template>
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

const divsRefs = ref<HTMLDivElement[]>([]);

// make sure to reset the refs before each update
onBeforeUpdate(() => {
  divsRefs.value = [];
});
</script>
```
  </template>
</Tab>

