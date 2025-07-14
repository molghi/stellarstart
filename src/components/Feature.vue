<script setup>
import { defineProps } from "vue";
defineProps({
    bgColor: String,
    image: String,
    smallTitle: String,
    title: String,
    text: String,
    order: String,
});
</script>

<template>
    <div class="features-block" :style="`background-color: ${bgColor}`">
        <div class="container">
            <div :class="`features-block__wrapper ${order === 'imageLeft' ? 'reversed' : ''}`">
                <div class="features-block__body">
                    <div class="features-block__sup-title">{{ smallTitle }}</div>
                    <div class="features-block__title">{{ title }}</div>
                    <div class="features-block__text">
                        {{ text }}
                    </div>
                </div>
                <div class="features-block__pic">
                    <img :src="image" alt="features image" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.features-block {
    padding: 128px 0;
}

.features-block__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 83px;
}

.features-block__body {
    max-width: 624px;
}

.features-block__sup-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #000;
    opacity: 0.87;
    margin-bottom: 16px;
}

.features-block__title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    margin-bottom: 16px;
    max-width: 572px;
}

.features-block__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

.features-block--reversed .features-block__wrapper {
    flex-direction: row-reverse;
}

.features-block--grey {
    background-color: #f4f6fc;
}

.features-block--yellow {
    background-color: rgba(252, 217, 128, 0.1);
}

.reversed {
    flex-direction: row-reverse;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .features-block__body {
        max-width: 572px;
    }
    .features-block__title {
        font-size: 30px;
        line-height: 42px;
    }
    .features-block__sup-title {
        margin-bottom: 5px;
    }
    .features-block__pic img {
        max-width: 100%;
    }
}

@media (max-width: 992.98px) {
    .features-block {
        padding: 90px 0;
    }
    .features-block__body {
        flex: 1 1 50%;
    }
    .features-block__pic {
        flex: 1 1 50%;
    }
}

@media (max-width: 767.98px) {
    .features-block {
        padding: 60px 0;
    }
    .features-block__wrapper {
        flex-wrap: wrap;
    }
    .features-block__body {
        flex: 1 1 100%;
        max-width: none;
        margin-bottom: 30px;
    }
    .features-block__title {
        max-width: none;
    }
    .features-block__pic {
        flex: 1 1 100%;
    }
    .features-block__pic img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
}

@media (max-width: 479.98px) {
    .features-block__sup-title {
        font-size: 14px;
    }
    .features-block__title {
        font-size: 24px;
    }
    .features-block__text {
        font-size: 14px;
    }
    .features-block__pic img {
        height: 300px;
    }
}
</style>
