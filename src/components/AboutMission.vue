<script setup>
import img1 from "/images/content/about-mission-1.jpg";
import img2 from "/images/content/about-mission-2.jpg";
const content = {
    cards: [
        {
            smallTitle: "Our Mission",
            bigTitle: "Inspire, Innovate, Share",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: img1,
        },
        {
            smallTitle: "Our Vision",
            bigTitle: "Laser focus",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: img2,
        },
    ],
};
</script>

<template>
    <section class="about-mission">
        <div class="container">
            <div class="about-mission__wrapper">
                <div v-for="(item, index) in content.cards" :key="index" class="about-mission__row">
                    <div class="about-mission__body">
                        <div class="about-mission__title little-title">{{ item.smallTitle }}</div>
                        <div class="about-mission__big-title">{{ item.bigTitle }}</div>
                        <div class="about-mission__text">
                            {{ item.text }}
                        </div>
                    </div>
                    <div class="about-mission__pic">
                        <img :src="item.image" alt="item image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-mission {
    background-color: #eef4fa;
    padding: 128px 0;
    margin-bottom: 128px;
}

.about-mission__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 140px;
}

.about-mission__row:nth-child(1) {
    margin-bottom: 96px;
}

.about-mission__row:nth-child(2) {
    flex-direction: row-reverse;
}

.about-mission__title {
    margin-bottom: 16px;
}

.about-mission__big-title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    margin-bottom: 16px;
}

.about-mission__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .about-mission__text {
        font-size: 14px;
    }
    .about-mission__row {
        column-gap: 75px;
    }
    .about-mission__big-title {
        font-size: 31px;
    }
}

@media (max-width: 992.98px) {
    .about-mission__pic {
        width: 100%;
    }
    .about-mission__pic img {
        max-width: 100%;
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: top;
    }
    .about-mission__row:nth-child(1) {
        margin-bottom: 60px;
    }
    .about-mission__row:nth-child(2) {
        flex-direction: column;
    }
    .about-mission__row {
        flex-direction: column;
    }
    .about-mission__body {
        margin-bottom: 50px;
    }
}

@media (max-width: 767.98px) {
    .about-mission {
        padding: 75px 0;
        margin-bottom: 75px;
    }
}

@media (max-width: 479.98px) {
    .about-mission__pic img {
        height: 300px;
    }
    .about-mission {
        margin-bottom: 50px;
    }
    .about-mission__big-title {
        font-size: 36px;
    }
}
</style>
