<script setup>
import Hero from "@/components/Hero.vue";
import Faq from "@/components/Faq.vue";
import img from "@/assets/images/content/feature.png";
import AboutBenefits from "@/components/AboutBenefits.vue";
import Feature from "@/components/Feature.vue";
import featuresImg1 from "@/assets/images/content/features-1.jpg";
import featuresImg2 from "@/assets/images/content/features-2.jpg";
import featuresImg3 from "@/assets/images/content/features-3.jpg";
import featuresImg4 from "@/assets/images/content/features-4.jpg";
import { onMounted } from "vue";
onMounted(() => (document.title = "Features | StellarStart"));
</script>

<template>
    <Hero
        bigTitle="All the features you need"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        button1="View pricing"
        button1Link="#"
        :image="img"
    />
    <AboutBenefits order="reversed" />
    <Feature
        bgColor="#ffff"
        :image="featuresImg2"
        smallTitle="Use Client-first"
        title="Top agencies and freelancers around the world use Client-first"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        order="imageRight"
    />
    <Feature
        bgColor="#f4f6fc"
        :image="featuresImg4"
        smallTitle="Free Revision Rounds"
        title="Get free Revisions and one week of free maintenance"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        order="imageLeft"
    />
    <Feature
        bgColor="#fff"
        :image="featuresImg1"
        smallTitle="24/7 Support"
        title="Working with us, you will be getting 24/7 priority support"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        order="imageRight"
    />
    <Feature
        bgColor="rgba(252, 217, 128, 0.1)"
        :image="featuresImg3"
        smallTitle="Quick Delivery"
        title="Guaranteed 1 week delivery for standard five pager website"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        order="imageLeft"
    />
    <Faq />
</template>

<style scoped></style>
