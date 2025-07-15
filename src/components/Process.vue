<script setup>
import img1 from "/images/icons/process-1.svg";
import img2 from "/images/icons/process-2.svg";
import img3 from "/images/icons/process-3.svg";
import img4 from "/images/icons/process-4.svg";

const content = {
    title: "How We Work",
    subtitle: "We follow a clear, effective process to bring your ideas to life—from concept to launch.",
    button: {
        text: "Get in touch with us",
        path: "#",
    },
    cards: [
        {
            cardTitle: "Strategy",
            cardSubtitle: "We begin with thorough research and planning to align business goals with user needs.",
            imgPath: img1,
        },
        {
            cardTitle: "Wireframing",
            cardSubtitle: "Next, we create structural blueprints to map out user journeys and functionality.",
            imgPath: img2,
        },
        {
            cardTitle: "Design",
            cardSubtitle: "We craft intuitive, engaging visuals that reflect your brand and enhance usability.",
            imgPath: img3,
        },
        {
            cardTitle: "Development",
            cardSubtitle: "Finally, we build scalable, high-performance solutions using modern web technologies.",
            imgPath: img4,
        },
    ],
};
</script>

<template>
    <section class="process">
        <div class="container">
            <div class="process__wrapper">
                <div class="process__body">
                    <div class="process__title section-title">{{ content.title }}</div>
                    <div class="process__text">
                        {{ content.subtitle }}
                    </div>
                    <a :href="content.button.path" class="process__link button--arrow">{{ content.button.text }}</a>
                </div>
                <div class="process__cards">
                    <div v-for="(item, index) in content.cards" :key="index" class="process__card">
                        <div class="process__card-icon">
                            <img :src="item.imgPath" alt="card icon" />
                        </div>
                        <div class="process__card-title">{{ item.cardTitle }}</div>
                        <div class="process__card-text">{{ item.cardSubtitle }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.process {
    background-color: #f4f6fc;
    padding: 128px 0;
}

.process__wrapper {
    display: flex;
}

.process__body {
    max-width: 405px;
    margin-right: 142px;
}

.process__title {
    margin-bottom: 16px;
}

.process__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
    margin-bottom: 16px;
}

.process__link {
    color: #006994;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    padding-right: 40px;
    position: relative;
}

.process__link:hover {
    text-decoration: underline;
}

.process__link:after {
    top: 7px;
    background: url("/images/icons/proj-arrow-purple.svg") 0 0 no-repeat;
    background-size: contain;
}

.process__cards {
    display: flex;
    flex-wrap: wrap;
    column-gap: 25px;
    row-gap: 48px;
}

.process__card {
    max-width: 303px;
}

.process__card-icon {
    margin-bottom: 16px;
}

.process__card-title {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 8px;
}

.process__card-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .process__body {
        margin-right: 100px;
    }
    .process__card {
        max-width: 250px;
    }
}

@media (max-width: 992.98px) {
    .process__body {
        max-width: none;
        margin-right: 0;
        text-align: center;
        margin-bottom: 50px;
    }
    .process__card {
        max-width: none;
        flex: 1 1 45%;
    }
    .process__cards {
        justify-content: center;
        column-gap: 40px;
    }
    .process__wrapper {
        flex-direction: column;
    }
}

@media (max-width: 500px) {
    .process__card {
        flex: 1 1 100%;
    }
}

@media (max-width: 479.98px) {
    .process__title {
        font-size: 40px;
    }
    .process__text {
        font-size: 14px;
    }
    .process {
        padding: 50px 0 75px;
    }
}
</style>
