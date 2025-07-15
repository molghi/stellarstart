<script setup>
import { defineProps } from "vue";

const content = {
    title: "Our Blog",
};

defineProps({
    titleCentered: {
        type: String,
        default: "false",
    },
    blogsData: {
        type: [Object, Array, null],
        default: null,
    },
});
</script>

<template>
    <section v-if="blogsData && blogsData.length > 0" class="blog">
        <div class="container">
            <div class="blog__wrapper">
                <div :class="`blog__title ${titleCentered === 'true' ? 'centered' : ''}`">{{ content.title }}</div>
                <div class="blog__cards">
                    <div v-for="(item, index) in blogsData" :key="index" class="blog__card">
                        <a :href="item.cardPath" class="blog__card-pic">
                            <img :src="item.cardImg" alt="card image" />
                        </a>
                        <div class="blog__card-body">
                            <div class="blog__card-date">{{ item.cardDate }}</div>
                            <a href="#" class="blog__card-title">{{ item.cardTitle }}</a>
                            <div class="blog__card-text">
                                {{ item.cardText }}
                            </div>
                            <a :href="item.cardPath" class="blog__card-button button--arrow">{{ item.cardBtnText }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.blog {
    padding: 128px 0;
}

.blog__title {
    margin-bottom: 74px;
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
}

.blog__cards {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
    row-gap: 32px;
    flex-wrap: wrap;
}

.blog__card {
    max-width: 405px;
    flex: 0 1 33.333%;
}

.blog__card-pic {
    display: block;
    margin-bottom: 30px;
    transition: all 0.3s;
}

.blog__card-pic img {
    max-width: 100%;
}

.blog__card-pic:hover {
    filter: brightness(110%);
}

.blog__card-date {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
    margin-bottom: 16px;
}

.blog__card-title {
    display: block;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 16px;
}

.blog__card-title:hover {
    text-decoration: underline;
}

.blog__card-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
    margin-bottom: 32px;
}

.blog__card-button {
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    padding-right: 40px;
    position: relative;
}

.blog__card-button:hover {
    text-decoration: underline;
}

.blog__card-button:after {
    top: 8px;
    background: url("@/assets/images/icons/proj-arrow-dark.svg") 0 0 no-repeat;
    background-size: contain;
}

.blog--carousel {
    display: none;
}

.blog--carousel .blog__cards {
    flex-wrap: nowrap;
    margin-left: 15px;
}

.centered {
    text-align: center;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .blog__card-title {
        font-size: 18px;
    }
    .blog__card-text {
        font-size: 14px;
    }
    .blog__card {
        flex: 0 1 31%;
    }
}

@media (max-width: 992.98px) {
    .blog__title {
        text-align: center;
    }
    .blog__cards {
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 30px;
    }
    .blog--carousel {
        display: block;
    }
}

@media (max-width: 767.98px) {
    .blog__card {
        flex: 1 1 100%;
    }
}

@media (max-width: 479.98px) {
    .blog {
        padding: 75px 0;
    }
    .blog--carousel {
        padding: 60px 0 75px;
    }
    .blog--carousel .blog__title {
        margin-bottom: 40px;
    }
    .blog--carousel .blog__card-pic {
        margin-bottom: 15px;
    }
    .blog--carousel .blog__card-date {
        font-size: 12px;
        margin-bottom: 5px;
    }
    .blog--carousel .blog__card-title {
        font-size: 16px;
        line-height: 27px;
        margin-bottom: 15px;
    }
    .blog--carousel .blog__card-text {
        font-size: 12px;
        line-height: 23px;
        margin-bottom: 15px;
    }
}
</style>
