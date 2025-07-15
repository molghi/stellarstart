<script setup>
import BlogArticle from "@/components/BlogArticle.vue";
import { onMounted } from "vue";
onMounted(() => (document.title = "Blog Article | StellarStart"));
</script>

<template>
    <BlogArticle />
</template>

<style scoped></style>
