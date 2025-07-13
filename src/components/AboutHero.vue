<script setup>
import img from "@/assets/images/content/about-hero.jpg";
const content = {
    title: "About us",
    subtitle: "Our designs solve problems",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: img,
};
</script>

<template>
    <section class="about-hero">
        <div class="container">
            <div class="about-hero__wrapper">
                <div class="about-hero__body">
                    <div class="about-hero__title little-title">
                        {{ content.title }}
                    </div>
                    <div class="about-hero__big-title">{{ content.subtitle }}</div>
                    <div class="about-hero__text">
                        {{ content.text }}
                    </div>
                </div>
                <div class="about-hero__pic">
                    <img :src="content.image" alt="hero image" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-hero {
    padding: 128px 0;
}

.about-hero__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.about-hero__body {
    max-width: 595px;
    margin-right: 138px;
}

.about-hero__title {
    margin-bottom: 8px;
}

.about-hero__big-title {
    font-weight: 600;
    font-size: 54px;
    line-height: 74px;
    margin-bottom: 31px;
}

.about-hero__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .about-hero__big-title {
        font-size: 41px;
        line-height: 60px;
    }
    .about-hero__body {
        margin-right: 100px;
    }
}

@media (max-width: 992.98px) {
    .about-hero__pic {
        width: 100%;
    }
    .about-hero__pic img {
        max-width: 100%;
        width: 100%;
    }
    .about-hero__big-title {
        font-size: 54px;
        line-height: 74px;
    }
    .about-hero {
        padding: 50px 0 75px;
    }
    .about-hero__wrapper {
        flex-direction: column;
    }
    .about-hero__body {
        margin-right: 0;
        margin-bottom: 50px;
        max-width: 100%;
    }
}

@media (max-width: 767.98px) {
    .about-hero {
        padding-top: 30px;
    }
}

@media (max-width: 479.98px) {
    .about-hero__big-title {
        font-size: 38px;
        line-height: 56px;
        margin-bottom: 15px;
    }
    .about-hero__body {
        margin-bottom: 25px;
    }
}
</style>
