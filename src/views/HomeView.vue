<script setup>
import Hero from "@/components/Hero.vue";
import Process from "@/components/Process.vue";
import Projects from "@/components/Projects.vue";
import Features from "@/components/Features.vue";
import Testimonials from "@/components/Testimonials.vue";
import Faq from "@/components/Faq.vue";
import Inquiry from "@/components/Inquiry.vue";
import Blog from "@/components/Blog.vue";
import img from "@/assets/images/content/hero.png";
</script>

<template>
    <Hero
        bigTitle="Building stellar websites for early startups"
        subtitle="We craft fast, scalable, and elegant websites tailored for startups aiming to make a bold first impression"
        button1="View our work"
        button1Link="#"
        button2="View pricing"
        button2Link="#"
        :image="img"
    />
    <Process />
    <Projects />
    <Features />
    <Testimonials />
    <Faq />
    <Inquiry />
    <Blog />
</template>

<style scoped></style>
