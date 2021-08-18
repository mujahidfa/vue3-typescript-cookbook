<template>
  <Ref />
  <TemplateRefDefine />
  <TemplateRefSetup />
  <Computed />
  <ComputedSetAndGet />
  <Emit />
</template>

<script setup lang="ts">
import Ref from "./components/basics/Ref.vue";
import TemplateRefDefine from "./components/basics/TemplateRefDefine.vue";
import TemplateRefSetup from "./components/basics/TemplateRefSetup.vue";
import Computed from "./components/basics/Computed.vue";
import ComputedSetAndGet from "./components/basics/ComputedSetAndGet.vue";
import Emit from "./components/basics/Emit.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
