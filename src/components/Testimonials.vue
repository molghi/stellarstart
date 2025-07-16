<script setup>
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import image from "/images/content/avatar.jpg";
const content = {
    title: "What our clients say about us",
    subtitle: "Real feedback from the people we’ve had the privilege to work with",
    slides: [
        {
            text: "Highly competent and client-friendly people! It was a pleasure to work with them!",
            person: "Willie Jenson",
            position: "Chief Of Staff",
            image: image,
        },
        {
            text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
            person: "Jenny Wilson",
            position: "Vice President",
            image: image,
        },
    ],
};
</script>

<template>
    <section v-if="content.slides && content.slides.length > 0" class="testimonials">
        <div class="container">
            <div class="testimonials__wrapper">
                <div class="testimonials__body">
                    <div class="testimonials__title">{{ content.title }}</div>
                    <div class="testimonials__text">{{ content.subtitle }}</div>
                </div>
                <div class="testimonials__slider">
                    <!-- swiper slider -->
                    <Swiper
                        :modules="[Autoplay]"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }"
                        :spaceBetween="20"
                        :slidesPerView="1"
                        :loop="true"
                    >
                        <SwiperSlide v-for="(item, index) in content.slides" :key="index">
                            <div class="testimonials__slide">
                                <div class="testimonials__slide-text">
                                    {{ item.text }}
                                </div>
                                <div class="testimonials__slide-author">
                                    <div class="testimonials__slide-avatar">
                                        <img :src="item.image" alt="person avatar" />
                                    </div>
                                    <div class="testimonials__slide-info">
                                        <div class="testimonials__slide-name">{{ item.person }}</div>
                                        <div class="testimonials__slide-position">{{ item.position }}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonials {
    background-color: #f4f6fc;
    padding: 130px 0 192px;
}

.testimonials__wrapper {
    display: flex;
    justify-content: space-between;
}

.testimonials__body {
    max-width: 327px;
    margin-right: 110px;
}

.testimonials__title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    margin-bottom: 16px;
}

.testimonials__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

.testimonials__slider {
    max-width: 843px;
}

.testimonials__slide-text {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 48px;
}

.testimonials__slide-author {
    display: flex;
    align-items: center;
}

.testimonials__slide-avatar {
    min-width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
}

.testimonials__slide-name {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
}

.testimonials__slide-position {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .testimonials__body {
        min-width: 327px;
    }
}

@media (max-width: 992.98px) {
    .testimonials {
        padding: 75px 0 125px;
    }
    .testimonials__wrapper {
        flex-direction: column;
    }
    .testimonials__body {
        min-width: 300px;
        max-width: none;
        text-align: center;
        margin-bottom: 50px;
        margin-right: 0;
    }
    .testimonials__slider {
        max-width: 750px;
    }
}

@media (max-width: 767.98px) {
    .testimonials__slide-text {
        font-size: 28px;
    }
    .testimonials__body {
        margin-bottom: 30px;
    }
    .testimonials__slider {
        max-width: 450px;
    }
}

@media (max-width: 479.98px) {
    .testimonials {
        padding: 40px 0 75px;
    }
    .testimonials__slide-text {
        font-size: 20px;
        line-height: 35px;
    }
    .testimonials__slider {
        /*max-width: 300px;*/
    }
    .testimonials__title {
        font-size: 30px;
        line-height: 45px;
    }
    .testimonials__text {
        font-size: 14px;
    }
}
</style>
