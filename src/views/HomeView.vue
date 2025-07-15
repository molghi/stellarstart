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
import img1 from "@/assets/images/content/blog-1.jpg";
import img2 from "@/assets/images/content/blog-2.jpg";
import img3 from "@/assets/images/content/blog-3.jpg";

import { onMounted } from "vue";
onMounted(() => (document.title = "StellarStart | Building stellar websites for early startups"));

const blogsData = [
    {
        cardImg: img1,
        cardDate: "Jan 19, 2022",
        cardTitle: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        cardText: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        cardBtnText: "Read More",
        cardPath: "#",
    },
    {
        cardImg: img2,
        cardDate: "Apr 18, 2022",
        cardTitle: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        cardText: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        cardBtnText: "Read More",
        cardPath: "#",
    },
    {
        cardImg: img3,
        cardDate: "Jul 14, 2025",
        cardTitle: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        cardText: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        cardBtnText: "Read More",
        cardPath: "#",
    },
];
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
    <Blog :blogsData="blogsData" />
</template>

<style scoped></style>
