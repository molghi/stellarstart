<script setup>
import img from "@/assets/images/content/studies-top.jpg";
import img2 from "@/assets/images/content/studies.jpg";
const content = {
    smallTitle: "Web Design And Development",
    title: "Finsweet Design case studies",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    image: img,
    innerImage: img2,
    topCards: [
        { label: "Client", value: "facebook.com" },
        { label: "Service", value: "Product Design" },
        { label: "Deliverable", value: "UI Screens, UX Flow & Prototype" },
    ],
    keywords: [
        { title: "Design", link: "#" },
        { title: "UI/UX", link: "#" },
        { title: "Wireframing", link: "#" },
        { title: "Branding", link: "#" },
        { title: "Development", link: "#" },
        { title: "Webflow", link: "#" },
    ],
    aboutSection: {
        title: "About The Project",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
    },
    howSection: {
        title: "How We Do It",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea!",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse!",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa!",
        ],
    },
};
</script>

<template>
    <section class="studies-top">
        <div class="container">
            <div class="studies-top__wrapper">
                <div class="studies-top__sup-title">{{ content.smallTitle }}</div>
                <div class="studies-top__title">{{ content.title }}</div>
                <div class="studies-top__text">
                    {{ content.text }}
                </div>
                <div class="studies-top__pic">
                    <img :src="content.image" alt="project image" />
                </div>
                <div class="studies-top__box">
                    <div v-for="(item, index) in content.topCards" :key="index" class="studies-top__item">
                        <div class="studies-top__item-name">{{ item.label }}</div>
                        <div class="studies-top__item-value">{{ item.value }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="studies-about">
        <div class="container">
            <div class="studies-about__wrapper">
                <div class="studies-title">{{ content.aboutSection.title }}</div>
                <div class="studies-text">
                    {{ content.aboutSection.text }}
                </div>
                <ul class="studies-list">
                    <li v-for="(item, index) in content.aboutSection.list" :key="index">{{ item }}</li>
                </ul>

                <div class="studies-pic">
                    <img :src="content.innerImage" alt="project image 2" />
                </div>
            </div>
        </div>
    </section>

    <section class="studies-how">
        <div class="container">
            <div class="studies-how__wrapper">
                <div class="studies-title">{{ content.howSection.title }}</div>
                <div class="studies-text">
                    {{ content.howSection.text }}
                </div>
                <ul class="studies-list">
                    <li v-for="(item, index) in content.howSection.list" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
    </section>

    <div class="studies-keywords">
        <div class="container">
            <div class="studies-keywords__wrapper">
                <div class="studies-keywords__title">Keywords</div>
                <a v-for="(item, index) in content.keywords" :key="index" :href="item.link" class="studies-keywords__keyword">{{
                    item.title
                }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.studies-top {
    margin: 100px 0;
}

.studies-top__wrapper {
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(40, 41, 56, 0.3);
}

.studies-top__sup-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 12px;
    color: rgba(40, 41, 56, 0.7);
}

.studies-top__title {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    margin-bottom: 26px;
    max-width: 646px;
}

.studies-top__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    max-width: 817px;
    color: rgba(40, 41, 56, 0.7);
    margin-bottom: 48px;
}

.studies-top__pic {
    margin-bottom: 48px;
}

.studies-top__pic img {
    max-width: 100%;
}

.studies-top__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.studies-top__item-name {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 4px;
    color: rgba(40, 41, 56, 0.7);
}

.studies-top__item-value {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
}

/* RESPONSIVE DESIGN */

@media (max-width: 992.98px) {
    .studies-top {
        margin: 50px 0 100px;
    }
    .studies-top__wrapper {
        padding-bottom: 5px;
    }
    .studies-top__box {
        column-gap: 50px;
        flex-wrap: wrap;
        justify-content: start;
    }
    .studies-top__item {
        margin-bottom: 30px;
    }
}

@media (max-width: 479.98px) {
    .studies-top {
        margin: 30px 0 50px;
    }
    .studies-top__sup-title {
        font-size: 16px;
    }
    .studies-top__title {
        font-size: 35px;
        line-height: 50px;
        margin-bottom: 20px;
    }
    .studies-top__text {
        font-size: 14px;
    }
    .studies-top__item {
        margin-bottom: 20px;
    }
    .studies-top__item-name {
        font-size: 14px;
        line-height: 18px;
    }
    .studies-top__item-value {
        font-size: 18px;
    }
}
</style>

<style scoped>
.studies-about__wrapper {
    max-width: 838px;
    margin: 0 auto;
}

.studies-title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    margin-bottom: 12px;
}

.studies-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
    margin-bottom: 24px;
}

.studies-list,
.studies-list li {
    line-height: 28px;
}

.studies-list {
    font-weight: 400;
    font-size: 16px;
    color: rgba(40, 41, 56, 0.7);
    margin-bottom: 64px;
}

.studies-list li {
    position: relative;
    padding-left: 25px;
}

.studies-list li:after {
    content: "";
    position: absolute;
    top: 11px;
    left: 0;
    background-color: #000;
    width: 5px;
    height: 5px;
    border-radius: 50%;
}

.studies-list li + li {
    margin-top: 16px;
}

.studies-pic {
    margin-bottom: 64px;
}

.studies-pic img {
    max-width: 100%;
}

/* RESPONSIVE DESIGN */

@media (max-width: 479.98px) {
    .studies-title {
        font-size: 32px;
    }
    .studies-text {
        font-size: 14px;
        line-height: 22px;
    }
    .studies-list li:after {
        top: 9px;
    }
    .studies-list {
        font-size: 14px;
        margin-bottom: 40px;
    }
    .studies-list,
    .studies-list li {
        line-height: 1.4;
    }
}
</style>

<style scoped>
.studies-how__wrapper {
    max-width: 838px;
    margin: 0 auto;
}

.studies-keywords {
    margin-bottom: 100px;
}

.studies-keywords__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 838px;
    margin: 0 auto;
    padding: 24px 0;
    border-top: 1px solid rgba(40, 41, 56, 0.2);
    border-bottom: 1px solid rgba(40, 41, 56, 0.2);
}

.studies-keywords__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #006994;
}

.studies-keywords__box {
    display: flex;
    align-items: center;
}

.studies-keywords__keyword {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: rgba(40, 41, 56, 0.7);
}

.studies-keywords__keyword:hover {
    text-decoration: underline;
}

/* RESPONSIVE DESIGN */

@media (max-width: 850px) {
    .studies-keywords__wrapper {
        flex-wrap: wrap;
        justify-content: start;
        column-gap: 50px;
        row-gap: 50px;
    }
}

@media (max-width: 767.98px) {
    .studies-keywords {
        margin-bottom: 50px;
    }
}

@media (max-width: 479.98px) {
    .studies-keywords__wrapper {
        row-gap: 25px;
    }
}
</style>
