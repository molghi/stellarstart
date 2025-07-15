<script setup>
import ContactShort from "@/components/ContactShort.vue";
import Project from "@/components/Project.vue";
import { onMounted } from "vue";
onMounted(() => (document.title = "Project | StellarStart"));
</script>

<template>
    <Project />
    <ContactShort />
</template>

<style scoped></style>
