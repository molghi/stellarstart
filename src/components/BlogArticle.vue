<script setup>
import img from "@/assets/images/content/blog-big.jpg";
import img2 from "@/assets/images/content/blog.jpg";

const content = {
    title: "A UX Case Study on Creating a Studious Environment for Students",
    whoPosted: ["Andrew Jonson", "Posted on 27th January 2021"],
    bigImage: img,
    smallerImage: img2,
    blocks: [
        {
            type: "title-text",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. <span class="blog-page__text-emphasized">Excepteur sint occaecat</span> cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        },
        {
            title: "Duis aute irure dolor in reprehenderit in.",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Ut <span class="blog-page__text-emphasized">enim ad minim veniam</span>, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        },
        {
            type: "title-text-list",
            title: "Excepteur sint occaecat cupidatat nono",
            items: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Ut <span class="blog-page__text-emphasized">enim ad minim veniam</span>, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                ],
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <span class="blog-page__text-emphasized">sunt in culpa qui officia deserunt</span> mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            ],
        },
        { type: "image", path: "" },
        {
            type: "title-text",
            title: "Ut enim ad minim veniam, quis nostrud.",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.`,
        },
    ],
};
</script>

<template>
    <section class="blog-page">
        <div class="container">
            <div class="blog-page__wrapper">
                <div class="blog-page__title section-title">{{ content.title }}</div>
                <div class="blog-page__info">
                    <span class="blog-page__author">
                        <span v-for="(item, index) in content.whoPosted" :key="index">{{ item }}</span>
                    </span>
                </div>
                <div class="blog-page__big-pic">
                    <img :src="content.bigImage" alt="" />
                </div>

                <div v-for="(item, index) in content.blocks" :key="index" class="blog-page__block">
                    <!-- render title and text -->
                    <div v-if="item.type === 'title-text'" class="blog-page__text-title">{{ item.title }}</div>
                    <div v-if="item.type === 'title-text'" class="blog-page__text">
                        <p v-html="item.text"></p>
                    </div>

                    <!-- render image -->
                    <div v-else-if="item.type === 'image'" class="blog-page__pic">
                        <img :src="content.smallerImage" alt="blog image" />
                    </div>

                    <!-- render title, text and list -->
                    <div v-else-if="item.type === 'title-text-list'">
                        <div class="blog-page__text-title">{{ item.title }}</div>
                        <div class="blog-page__text">
                            <div v-for="(item, index) in item.items" :key="index">
                                <p v-if="typeof item === 'string'" v-html="item"></p>
                                <ul v-if="typeof item === 'object'" class="blog-page__list">
                                    <li v-for="(element, index) in item" :key="index">{{ element }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.blog-page {
    margin: 128px 0;
}

.blog-page__title {
    text-align: center;
    max-width: 949px;
    margin: 0 auto 16px;
}

.blog-page__info {
    text-align: center;
    margin-bottom: 48px;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
}

.blog-page__big-pic {
    margin-bottom: 48px;
}

.blog-page__big-pic img {
    max-width: 100%;
}

.blog-page__text-title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    max-width: 842px;
    margin: 0 auto 32px;
}

.blog-page__text,
.blog-page__text p,
.blog-page__text li {
    line-height: 28px;
}

.blog-page__text {
    max-width: 842px;
    margin: 0 auto 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

.blog-page__text p + p {
    margin-top: 24px;
}

.blog-page__list {
    margin: 24px 0;
}

.blog-page__list li {
    position: relative;
    padding-left: 15px;
}

.blog-page__list li:after {
    content: "";
    position: absolute;
    top: 11px;
    left: 0;
    background-color: #000;
    width: 5px;
    height: 5px;
    border-radius: 50%;
}

.blog-page__list li + li {
    margin-top: 12px;
}

.blog-page__pic {
    max-width: 842px;
    margin: 0 auto 56px;
}

.blog-page__pic img {
    max-width: 100%;
}

.blog-page__author {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .blog-page {
        margin: 90px 0;
    }
}

@media (max-width: 992.98px) {
    .blog-page {
        margin: 70px 0;
    }
    .blog-page__title {
        font-size: 42px;
    }
}

@media (max-width: 767.98px) {
    .blog-page {
        margin: 50px 0;
    }
}

@media (max-width: 479.98px) {
    .blog-page {
        margin: 30px 0;
    }
    .blog-page__title {
        font-size: 29px;
        line-height: 44px;
    }
    .blog-page__info {
        font-size: 14px;
        margin-bottom: 30px;
    }

    .blog-page__date {
        display: block;
    }
    .blog-page__text-title {
        font-size: 22px;
        line-height: 35px;
        margin-bottom: 25px;
    }
    .blog-page__text {
        font-size: 14px;
        line-height: 22px;
    }
    .blog-page__text,
    .blog-page__text p,
    .blog-page__text li {
        line-height: 1.4;
    }
}
/* style="color: #006994" */
</style>

<style>
.blog-page__text-emphasized {
    /* color: #006994; */
    color: #0f9fda;
}
</style>
