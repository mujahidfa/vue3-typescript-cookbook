<template>
  <EmitChild v-model="reactiveValue" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import EmitChild from "./EmitChild.vue";

let reactiveValue = ref("false");
</script>
