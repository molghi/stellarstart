<script setup>
import { onMounted } from "vue";
onMounted(() => (document.title = "Portfolio | StellarStart"));
import PortfolioTop from "@/components/PortfolioTop.vue";
import ContactShort from "@/components/ContactShort.vue";
import ProjectsGrid from "@/components/ProjectsGrid.vue";
</script>

<template>
    <PortfolioTop />
    <ProjectsGrid />
    <ContactShort />
</template>

<style scoped></style>
