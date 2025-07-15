<script setup>
import { defineProps } from "vue";

defineProps({
    bigTitle: { type: String, required: true },
    subtitle: { type: String, required: true },
    button1: { type: String, required: true },
    button1Link: { type: String, required: true },
    button2: { type: String, required: false },
    button2Link: { type: String, required: false },
    image: { type: String, required: true },
});
</script>

<template>
    <section class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <div class="hero__body">
                    <h1 class="hero__title">{{ bigTitle }}</h1>
                    <div class="hero__text">
                        {{ subtitle }}
                    </div>
                    <div class="hero__buttons">
                        <a :href="button1Link" class="hero__button button button--yellow">{{ button1 }}</a>
                        <a v-if="button2" :href="button2Link" class="hero__button button--arrow">{{ button2 }}</a>
                    </div>
                </div>
                <div class="hero__pic">
                    <img :src="image" alt="hero image" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    background-color: #006994;
    color: #fff;
}

.hero__wrapper {
    height: calc(100vh - 84px);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hero__body {
    max-width: 562px;
    margin-right: 60px;
}

.hero__title {
    font-weight: 600;
    font-size: 54px;
    line-height: 74px;
    margin-bottom: 24px;
}

.hero__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 48px;
}

.hero__button {
    display: inline-block;
    color: #282938;
}

.hero__button:first-child {
    padding-left: 56px;
    padding-right: 56px;
    margin-right: 40px;
}

.hero__button:nth-child(2) {
    color: #fff;
    position: relative;
    z-index: 0;
    padding-right: 40px;
}

.hero__button:nth-child(2):hover {
    text-decoration: underline;
}

.hero__pic img {
    max-width: 100%;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .hero__body {
        max-width: 400px;
    }
    .hero__title {
        font-size: 45px;
        line-height: 60px;
    }
    .hero__button:first-child {
        padding-left: 30px;
        padding-right: 30px;
    }
}

@media (max-width: 992.98px) {
    .hero__body {
        max-width: none;
        margin-right: 0;
        text-align: center;
        margin-bottom: 50px;
    }
    .hero__text {
        margin-bottom: 30px;
    }
    .hero__button:first-child {
        padding-left: 56px;
        padding-right: 56px;
    }
    .hero__wrapper {
        height: auto;
        padding: 20px 0 50px;
        flex-direction: column;
        justify-content: center;
    }
}

@media (max-height: 730px) {
    .hero__wrapper {
        height: auto;
        padding: 100px 0;
    }
}

@media (max-width: 479.98px) {
    .hero__button:first-child {
        display: block;
        margin-right: 0;
        margin-bottom: 30px;
    }
    .hero__title {
        font-size: 33px;
        line-height: 50px;
    }
    .hero__button.button--arrow {
        padding-right: 0;
    }

    .hero .button--arrow {
        padding-right: 40px;
    }
}
</style>
