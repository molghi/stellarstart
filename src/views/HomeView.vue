<script setup>
import Hero from "@/components/Hero.vue";
import Process from "@/components/Process.vue";
import Projects from "@/components/Projects.vue";
import Features from "@/components/Features.vue";
import Testimonials from "@/components/Testimonials.vue";
import Faq from "@/components/Faq.vue";
import Inquiry from "@/components/Inquiry.vue";
import Blog from "@/components/Blog.vue";

import img from "/images/content/hero.png";
import img1 from "/images/content/blog-1.jpg";
import img2 from "/images/content/blog-2.jpg";
import img3 from "/images/content/blog-3.jpg";

import { onMounted } from "vue";
onMounted(() => (document.title = "StellarStart | Building stellar websites for early startups"));

const blogsData = [
    {
        cardImg: img1,
        cardDate: "Jan 19, 2022",
        cardTitle: "From Freelancer to Founder: Scaling a Solo Consultancy to Six Figures",
        cardText: "Discover how shifting to Webflow transformed a consultant’s business model and drove exponential growth.",
        cardBtnText: "Read More",
        cardPath: "#",
    },
    {
        cardImg: img2,
        cardDate: "Apr 18, 2022",
        cardTitle: "Webflow as a Growth Catalyst: A Consultant’s Journey",
        cardText: "Learn the strategies behind a one-person operation achieving a $100K milestone in just over a year.",
        cardBtnText: "Read More",
        cardPath: "#",
    },
    {
        cardImg: img3,
        cardDate: "Jul 14, 2025",
        cardTitle: "Turning Design into Revenue: A Case Study in Smart Scaling",
        cardText:
            "Explore the pivotal decisions and tools that helped one designer turn freelance work into a thriving consultancy.",
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
        image="/stellarstart/images/content/hero.png"
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
