<script setup>
import img from "@/assets/images/content/blog-big.jpg";
import { RouterLink } from "vue-router";
const content = {
    title: "A UX Case Study on Creating a Studious Environment for Students",
    whoPosted: ["Andrew Jonson", "Posted on 27th January 2021"],
    image: img,
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.",
    buttonText: "Read more",
    buttonLink: "A UX Case Study on Creating a Studious Environment for Students".toLowerCase().replaceAll(" ", "-"),
};
</script>

<template>
    <section class="blog-top">
        <div class="container">
            <div class="blog-top__wrapper">
                <div class="blog-top__title">{{ content.title }}</div>
                <div class="blog-top__info">
                    <span v-for="(item, index) in content.whoPosted" :key="index">{{ item }}</span>
                </div>
                <div class="blog-top__pic">
                    <img :src="content.image" alt="featured blog image" />
                </div>
                <div class="blog-top__text">{{ content.text }}</div>
                <RouterLink :to="`blog/${content.buttonLink}`" class="blog-top__button">{{ content.buttonText }}</RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.blog-top {
    margin: 100px 0 0;
}

.blog-top__wrapper {
    text-align: center;
}

.blog-top__title {
    max-width: 949px;
    margin: 0 auto 16px;
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
}

.blog-top__info {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    column-gap: 5px;
    justify-content: center;
}

.blog-top__pic {
    margin-bottom: 48px;
}

.blog-top__pic img {
    max-width: 100%;
}

.blog-top__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
    max-width: 831px;
    margin: 0 auto 16px;
}

.blog-top__button {
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 105, 148, 0.7);
}

.blog-top__button:hover {
    text-decoration: underline;
}

/* RESPONSIVE DESIGN */

@media (max-width: 992.98px) {
    .blog-top {
        margin: 40px 0 0;
    }
    .blog-top__title {
        font-size: 42px;
    }
}

@media (max-width: 767.98px) {
    .blog-top__title {
        font-size: 33px;
        line-height: 47px;
    }
}

@media (max-width: 479.98px) {
    .blog-top__title {
        font-size: 29px;
        line-height: 41px;
    }
    .blog-top__info span {
        display: block;
    }
    .blog-top__pic {
        margin-bottom: 30px;
    }
    .blog-top__text {
        font-size: 14px;
    }
}
</style>
