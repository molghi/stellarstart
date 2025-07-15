<script setup>
import { RouterLink } from "vue-router";
import img1 from "@/assets/images/content/work-1.jpg";
import img2 from "@/assets/images/content/work-2.jpg";
import img3 from "@/assets/images/content/work-3.jpg";
import img4 from "@/assets/images/content/work-4.jpg";

import { ref } from "vue";
const activeTab = ref("all");

const content = {
    tabs: [
        { title: "All", category: "all" },
        { title: "UI Design", category: "ui" },
        { title: "Webflow Design", category: "webflow" },
        { title: "Figma Design", category: "figma" },
    ],
    items: [
        {
            image: img1,
            title: "Template 1",
            text: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.`,
            buttonText: "View Project",
            link: "Template 1".toLowerCase().trim().replaceAll(" ", "-"),
            category: "ui",
        },
        {
            image: img2,
            title: "Template 2",
            text: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.`,
            buttonText: "View Project",
            link: "Template 2".toLowerCase().trim().replaceAll(" ", "-"),
            category: "webflow",
        },
        {
            image: img3,
            title: "Template 3",
            text: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.`,
            buttonText: "View Project",
            link: "Template 3".toLowerCase().trim().replaceAll(" ", "-"),
            category: "ui",
        },
        {
            image: img4,
            title: "Template 4",
            text: `Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.`,
            buttonText: "View Project",
            link: "Template 4".toLowerCase().trim().replaceAll(" ", "-"),
            category: "figma",
        },
    ],
};
</script>

<template>
    <section class="work-tabs">
        <div class="container">
            <div class="work-tabs__wrapper">
                <!-- tab category filter widget -->
                <!-- tab triggers -->
                <div class="work-tabs__triggers">
                    <button
                        v-for="(btn, index) in content.tabs"
                        :key="index"
                        type="button"
                        :class="`work-tabs__trigger ${btn.category === activeTab ? 'work-tabs__trigger--active' : ''}`"
                        @click="activeTab = btn.category"
                    >
                        {{ btn.title }}
                    </button>
                </div>

                <!-- tab cards -->
                <div class="work-tabs__cards">
                    <template v-for="(item, index) in content.items" :key="index">
                        <div v-if="activeTab === 'all' || activeTab === item.category" class="work-tabs__card">
                            <RouterLink :to="`portfolio/${item.link}`" class="work-tabs__card-pic">
                                <img :src="item.image" alt="project image" />
                            </RouterLink>
                            <div class="work-tabs__card-body">
                                <RouterLink :to="`portfolio/${item.link}`" class="work-tabs__card-title">{{
                                    item.title
                                }}</RouterLink>
                                <div class="work-tabs__card-text">
                                    {{ item.text }}
                                </div>
                                <RouterLink :to="`portfolio/${item.link}`" class="work-tabs__card-button">{{
                                    item.buttonText
                                }}</RouterLink>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.work-tabs {
    margin: 96px 0 128px;
}

.work-tabs__wrapper {
    text-align: center;
}

.work-tabs__triggers {
    display: inline-flex;
    margin: 0 0 48px;
}

.work-tabs__trigger {
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0);
    font-size: 18px;
    color: rgba(40, 41, 56, 0.7);
    cursor: pointer;
    transition: all 0.3s;
}

.work-tabs__trigger + .work-tabs__trigger {
    margin-left: 32px;
}

.work-tabs__trigger:hover {
    text-decoration: underline;
}

.work-tabs__trigger--active {
    /* color: #006994;*/
    color: #0062ff;
}

.work-tabs__trigger--active:hover {
    text-decoration: none;
}

.work-tabs__cards {
    text-align: left;
    display: flex;
    column-gap: 34px;
    row-gap: 64px;
    flex-wrap: wrap;
}

.work-tabs__card {
    flex: 1 1 47%;
    max-width: 623px;
}

.work-tabs__card-pic {
    display: block;
    max-width: 623px;
    margin-bottom: 24px;
    transition: all 0.3s;
}

.work-tabs__card-pic img {
    width: 100%;
    object-fit: contain;
}

.work-tabs__card-pic:hover {
    filter: brightness(110%);
}

.work-tabs__card-title {
    display: inline-block;
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    margin-bottom: 12px;
}

.work-tabs__card-title:hover {
    text-decoration: underline;
}

.work-tabs__card-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
    margin-bottom: 24px;
}

.work-tabs__card-button {
    font-weight: 500;
    font-size: 16px;
    padding-right: 40px;
    position: relative;
}

.work-tabs__card-button:hover {
    text-decoration: underline;
}

.work-tabs__card-button:after {
    content: "";
    position: absolute;
    top: 5px;
    right: 0;
    background: url("@/assets/images/icons/proj-arrow-dark.svg") 0 0 no-repeat;
    background-size: contain;
    width: 24px;
    height: 12px;
}

/* RESPONSIVE DESIGN */

@media (max-width: 992.98px) {
    .work-tabs {
        margin-top: 60px;
    }
    .work-tabs__cards {
        padding: 0 100px;
    }
    .work-tabs__card {
        flex: 1 1 100%;
        max-width: none;
    }
    .work-tabs__card-pic {
        max-width: none;
    }
}

@media (max-width: 767.98px) {
    .work-tabs {
        margin-bottom: 80px;
    }
    .work-tabs__cards {
        padding: 0 50px;
    }
}

@media (max-width: 530px) {
    .work-tabs__triggers {
        flex-wrap: wrap;
        justify-content: center;
    }
    .work-tabs__trigger {
        flex: 1 1 50%;
        margin-bottom: 20px;
    }
    .work-tabs__trigger + .work-tabs__trigger {
        margin-left: 0;
    }
}

@media (max-width: 479.98px) {
    .work-tabs {
        margin: 40px 0 60px;
    }
    .work-tabs__triggers {
        margin-bottom: 30px;
    }
    .work-tabs__trigger {
        font-size: 16px;
    }
    .work-tabs__cards {
        padding: 0;
    }
    .work-tabs__card-title {
        font-size: 32px;
    }
    .work-tabs__card-text {
        font-size: 14px;
    }
}
</style>
