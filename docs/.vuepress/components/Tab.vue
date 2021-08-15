<template>
  <CodeGroup>
    <CodeGroupItem :title="tab1Name" :active="activeTab1">
      <slot name="tab1"></slot>
    </CodeGroupItem>
    <CodeGroupItem :title="tab2Name" :active="activeTab2">
      <slot name="tab2"></slot>
    </CodeGroupItem>
  </CodeGroup>
</template>

<script setup lang="ts">
import CodeGroup from "@vuepress/theme-default/lib/client/components/global/CodeGroup.js";
import CodeGroupItem from "@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue";
import { computed } from "vue";

const props = defineProps({
  tab1Name: {
    type: String,
    required: false,
    default: "defineComponent",
  },
  tab2Name: {
    type: String,
    required: false,
    default: "script setup",
  },
  active: {
    type: String,
    required: false,
    default: "tab1",
    validator(value: "tab1" | "tab2") {
      return ["tab1", "tab2"].includes(value);
    },
  },
});

const activeTab1 = computed<boolean>(() => props.active === "tab1");
const activeTab2 = computed<boolean>(() => props.active === "tab2");
</script>
