<script setup>
import img1 from "@/assets/images/content/projects-1.jpg";
import img2 from "@/assets/images/content/projects-2.jpg";
import img3 from "@/assets/images/content/projects-3.jpg";

const content = {
    title: "View our projects",
    button: {
        text: "View more",
        path: "/",
    },
    cards: [
        {
            cardTitle: "Workhub office Webflow Webflow Design",
            cardTitleLink: "#",
            cardText: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam",
            buttonText: "View portfolio",
            buttonPath: "#",
            imgPath: img1,
        },
        {
            cardTitle: "Unisaas Website Design",
            cardTitleLink: "#",
            cardText: "",
            buttonText: "View portfolio",
            buttonPath: "#",
            imgPath: img2,
        },
        {
            cardTitle: "Worshipper Website Design",
            cardTitleLink: "#",
            cardText: "",
            buttonText: "View portfolio",
            buttonPath: "#",
            imgPath: img3,
        },
    ],
};
</script>

<template>
    <section class="projects">
        <div class="container">
            <div class="projects__wrapper">
                <div class="projects__top">
                    <div class="projects__title section-title">{{ content.title }}</div>
                    <a href="#" class="projects__link button--arrow">{{ content.button.text }}</a>
                </div>
                <div class="projects__cards">
                    <div
                        v-for="(item, index) in content.cards"
                        :key="index"
                        :class="`projects__card ${index === 0 ? 'projects__card--big' : ''}`"
                    >
                        <div class="projects__card-pic">
                            <img :src="item.imgPath" alt="card image" />
                        </div>
                        <div class="projects__card-inner">
                            <div class="projects__card-box">
                                <a :href="item.cardTitleLink" class="projects__card-title">{{ item.cardTitle }}</a>
                                <div v-if="item.cardText" class="projects__card-text">
                                    {{ item.cardText }}
                                </div>
                                <a :href="item.buttonPath" class="projects__card-button button--arrow">{{ item.buttonText }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects {
    padding: 128px 0;
}

.projects__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
}

.projects__link {
    padding-right: 40px;
}

.projects__link:hover {
    text-decoration: underline;
}

.projects__link:after {
    background: url("@/assets/images/icons/proj-arrow-dark.svg") 0 0 no-repeat;
    background-size: contain;
}

.projects__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
}

.projects__card {
    overflow: hidden;
    position: relative;
}

.projects__card:hover .projects__card-inner {
    transform: translateX(0%);
}

.projects__card--big {
    grid-column: span 2;
    grid-row: span 2;
}

.projects__card--big .projects__card-inner {
    width: 50%;
    height: 100%;
    padding-bottom: 76px;
}

.projects__card--big .projects__card-box {
    max-width: 293px;
}

.projects__card-inner {
    background: linear-gradient(329.39deg, #1c1e53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    padding: 0 48px;
    padding-bottom: 45px;
    transition: all 0.3s;
    transform: translateX(-100%);
}

.projects__card-title {
    display: block;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #fff;
    margin-bottom: 10px;
    max-width: 250px;
    transition: all 0.3s;
}

.projects__card-title:hover {
    text-decoration: underline;
}

.projects__card-title:hover {
    color: rgba(255, 255, 255, 0.7);
}

.projects__card-text {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 40px;
}

.projects__card-button {
    color: #ffa52c;
    padding-right: 40px;
}

.projects__card-button:hover {
    text-decoration: underline;
}

.projects__card-button:after {
    top: 5px;
    background: url("@/assets/images/icons/proj-arrow-yellow.svg") 0 0 no-repeat;
    background-size: contain;
}

/* RESPONSIVE DESIGN */

@media (max-width: 992.98px) {
    .projects__cards {
        grid-template-columns: repeat(1, 1fr);
    }
    .projects__card--big .projects__card-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .projects__card .projects__card-pic img {
        width: 100%;
        height: 284px;
        object-fit: cover;
    }
    .projects__card--big .projects__card-inner {
        padding-bottom: 30px;
        width: 100%;
    }
    .projects__card--big .projects__card-text {
        margin-bottom: 20px;
    }
}

@media (max-width: 767.98px) {
    .projects__card--big .projects__card-box {
        max-width: 100%;
    }
    .projects__card--big .projects__card-inner {
        width: 100%;
        padding-bottom: 50px;
        padding-top: 40px;
    }
    .projects__top {
        flex-direction: column;
    }
    .projects__card {
        grid-column: span 2;
    }
    .projects__title {
        margin-bottom: 15px;
    }
    .projects__link {
        margin-left: 290px;
    }
}

@media (max-width: 479.98px) {
    .projects {
        padding: 50px 0 75px;
    }
    .projects__card-button {
        font-size: 14px;
    }
    .projects__card-text {
        font-size: 13px;
        margin-bottom: 20px;
        line-height: 25px;
    }
    .projects__card-title {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 20px;
    }
    .projects__card-inner {
        padding: 0 25px 45px;
    }
    .projects__card--big .projects__card-inner {
        padding-bottom: 25px;
        padding-top: 25px;
    }
    .projects__card .projects__card-pic img {
        height: auto;
    }
    .projects__top {
        margin-bottom: 35px;
    }
    .projects__title {
        font-size: 33px;
        line-height: 50px;
    }
    .projects__link {
        margin-left: 160px;
    }
}
</style>
