<script setup>
import Faq from "@/components/Faq.vue";
import { onMounted } from "vue";
onMounted(() => (document.title = "FAQ | StellarStart"));
</script>

<template>
    <Faq />
</template>

<style scoped></style>
