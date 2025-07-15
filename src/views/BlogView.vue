<script setup>
import BlogFeatured from "@/components/BlogFeatured.vue";
import Blog from "@/components/Blog.vue";

import { onMounted } from "vue";
onMounted(() => (document.title = "Blog | StellarStart"));

import img1 from "/images/content/blog-1.jpg";
import img2 from "/images/content/blog-2.jpg";
import img3 from "/images/content/blog-3.jpg";
import img4 from "/images/content/blog-4.jpg";
import img5 from "/images/content/blog-5.jpg";
import img6 from "/images/content/blog-6.jpg";

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
    {
        cardImg: img4,
        cardDate: "Jul 14, 2025",
        cardTitle: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        cardText: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        cardBtnText: "Read More",
        cardPath: "#",
    },
    {
        cardImg: img5,
        cardDate: "Jul 14, 2025",
        cardTitle: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        cardText: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        cardBtnText: "Read More",
        cardPath: "#",
    },
    {
        cardImg: img6,
        cardDate: "Jul 14, 2025",
        cardTitle: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        cardText: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
        cardBtnText: "Read More",
        cardPath: "#",
    },
];
</script>

<template>
    <BlogFeatured />
    <Blog titleCentered="true" :blogsData="blogsData" />
</template>

<style scoped></style>
