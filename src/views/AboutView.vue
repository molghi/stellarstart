<script setup>
import AboutHero from "@/components/AboutHero.vue";
import AboutInfo from "@/components/AboutInfo.vue";
import AboutProcess from "@/components/AboutProcess.vue";
import AboutMission from "@/components/AboutMission.vue";
import AboutBenefits from "@/components/AboutBenefits.vue";
import AboutTeam from "@/components/AboutTeam.vue";
import { onMounted } from "vue";
onMounted(() => (document.title = "About Us | StellarStart"));
</script>

<template>
    <AboutHero />
    <AboutInfo />
    <AboutProcess />
    <AboutMission />
    <AboutBenefits />
    <AboutTeam />
</template>

<style scoped></style>
