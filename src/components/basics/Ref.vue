<template></template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref<string>("Vue 3 + TypeScript is the best!");
const isDarkMode = ref<boolean>(true);

const count = ref<number | null>(null);

interface Book {
  name: string;
  isbn: number;
}
const book = ref<Book>({
  name: "Great Expectations",
  isbn: 2937187398279,
});
const books = ref<Book[]>([book.value]);
</script>
