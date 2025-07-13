<script setup>
import img1 from "@/assets/images/content/blog-1.jpg";
import img2 from "@/assets/images/content/blog-2.jpg";
import img3 from "@/assets/images/content/blog-3.jpg";

const content = {
    title: "Our Blog",
    cards: [
        {
            cardImg: img1,
            cardDate: "Jan 19, 2022",
            cardTitle: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
            cardText: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
            cardBtnText: "Read More",
            cardPath: "#",
        },
        {
            cardImg: img2,
            cardDate: "Apr 18, 2022",
            cardTitle: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
            cardText: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
            cardBtnText: "Read More",
            cardPath: "#",
        },
        {
            cardImg: img3,
            cardDate: "Jul 14, 2025",
            cardTitle: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
            cardText: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
            cardBtnText: "Read More",
            cardPath: "#",
        },
    ],
};
</script>

<template>
    <section class="blog">
        <div class="container">
            <div class="blog__wrapper">
                <div class="blog__title">{{ content.title }}</div>
                <div class="blog__cards">
                    <div v-for="(item, index) in content.cards" :key="index" class="blog__card">
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
}

.blog__card {
    max-width: 405px;
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

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .blog__card-title {
        font-size: 18px;
    }
    .blog__card-text {
        font-size: 14px;
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
