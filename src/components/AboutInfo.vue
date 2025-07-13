<script setup>
import image from "@/assets/images/content/about-info.jpg";
const content = {
    title: "Who We Are",
    cards: [
        {
            title: "Goal focused",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Continuous improvement",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ],
    image,
};
</script>

<template>
    <section class="about-info">
        <div class="container">
            <div class="about-info__wrapper">
                <div class="about-info__top">
                    <div class="about-info__title little-title">{{ content.title }}</div>
                    <div class="about-info__items">
                        <div v-for="(item, index) in content.cards" :key="index" class="about-info__item">
                            <div class="about-info__item-title">{{ item.title }}</div>
                            <div class="about-info__item-text">
                                {{ item.text }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-info__bottom">
                    <div class="about-info__pic">
                        <img :src="content.image" alt="section image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-info {
    margin-bottom: 128px;
}

.about-info__top {
    background-color: #f4f5f5;
    padding: 80px 110px 80px 80px;
}

.about-info__title {
    margin-bottom: 4px;
}

.about-info__items {
    display: flex;
    justify-content: space-between;
    column-gap: 61px;
}

.about-info__item-title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    margin-bottom: 16px;
}

.about-info__item-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

.about-info__pic {
    width: 100%;
}
.about-info__pic img {
    max-width: 100%;
    width: 100%;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .about-info__item-title {
        flex: 1 1 100%;
    }
    .about-info__item {
        display: flex;
        flex-direction: column;
    }
}

@media (max-width: 992.98px) {
    .about-info__top {
        padding: 50px;
    }
    .about-info__item-text {
        font-size: 14px;
    }
}

@media (max-width: 767.98px) {
    .about-info {
        margin-bottom: 75px;
    }
    .about-info__top {
        padding: 40px;
    }
    .about-info__items {
        flex-direction: column;
    }
    .about-info__item:nth-child(1) {
        margin-bottom: 20px;
    }
    .about-info__pic img {
        height: 150px;
        object-fit: cover;
    }
}

@media (max-width: 479.98px) {
    .about-info {
        margin-bottom: 50px;
    }
    .about-info__top {
        padding: 30px;
    }
    .about-info__title {
        margin-bottom: 10px;
    }
    .about-info__item-title {
        font-size: 30px;
        line-height: 40px;
    }
    .about-info__item-text {
        line-height: 22px;
    }
}
</style>
