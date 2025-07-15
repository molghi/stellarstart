<script setup>
import Faq from "@/components/Faq.vue";
import Pricing from "@/components/Pricing.vue";
import { onMounted } from "vue";
onMounted(() => (document.title = "Pricing | StellarStart"));
</script>

<template>
    <Pricing />
    <Faq />
</template>

<style scoped></style>
