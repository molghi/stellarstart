<script setup>
import icon1 from "@/assets/images/icons/benefit-1.svg";
import logo1 from "@/assets/images/content/partner-logo-1.svg";
import logo2 from "@/assets/images/content/partner-logo-2.svg";
import logo3 from "@/assets/images/content/partner-logo-3.svg";
import logo4 from "@/assets/images/content/partner-logo-4.svg";
import logo5 from "@/assets/images/content/partner-logo-5.svg";
const content = {
    title: "The benefits of working with us",
    cards: [
        {
            cardIcon: icon1,
            cardTitle: "Customize with ease",
            cardText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
        },
        {
            cardIcon: icon1,
            cardTitle: "Friendly Support",
            cardText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
        },
        {
            cardIcon: icon1,
            cardTitle: "Perfectly Responsive",
            cardText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
        },
    ],
    bottomTitle: "100.000+",
    bottomSubtitle: "Active Users",
    bottomLogos: [logo1, logo2, logo3, logo4, logo5],
};
</script>

<template>
    <section class="about-benefits">
        <div class="container">
            <div class="about-benefits__wrapper">
                <div class="about-benefits__title section-title">{{ content.title }}</div>
                <div class="about-benefits__items">
                    <div v-for="(item, index) in content.cards" :key="index" class="about-benefits__item">
                        <div class="about-benefits__item-icon">
                            <img :src="item.cardIcon" alt="card icon" />
                        </div>
                        <div class="about-benefits__item-title">{{ item.cardTitle }}</div>
                        <div class="about-benefits__item-text">
                            {{ item.cardText }}
                        </div>
                    </div>
                </div>
                <div class="about-benefits__bottom">
                    <div class="about-benefits__stat">
                        <div class="about-benefits__stat-big">{{ content.bottomTitle }}</div>
                        <div class="about-benefits__stat-small">{{ content.bottomSubtitle }}</div>
                    </div>
                    <div v-for="(item, index) in content.bottomLogos" :key="index" class="about-benefits__partner">
                        <img :src="item" alt="partner icon" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-benefits {
    margin-bottom: 128px;
}

.about-benefits__title {
    max-width: 630px;
    margin: 0 auto 48px;
    text-align: center;
}

.about-benefits__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 32px;
    margin-bottom: 48px;
}
.about-benefits__item {
    background-color: #f4f6fc;
    padding: 50px 33px 48px 48px;
}
.about-benefits__item:nth-child(2) {
    align-self: stretch;
}
.about-benefits__item-icon {
    margin-bottom: 26px;
}
.about-benefits__item-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 12px;
}

.about-benefits__item-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}
.about-benefits__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 40px;
}

.about-benefits__stat-big {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    margin-bottom: 5px;
}

.about-benefits__stat-small {
    font-weight: 400;
    font-size: 16px;
    color: rgba(40, 41, 56, 0.7);
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .about-benefits__partner img {
        max-width: 100%;
    }
    .about-benefits__items {
        align-items: start;
    }
    .about-benefits__item-title {
        flex: 1 1 100%;
    }
    .about-benefits__item {
        display: flex;
        flex-direction: column;
    }
}

@media (max-width: 992.98px) {
    .about-benefits__items {
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 32px;
    }
    .about-benefits__partner {
        margin-bottom: 30px;
    }
    .about-benefits__stat {
        margin-bottom: 30px;
    }
    .about-benefits__bottom {
        flex-wrap: wrap;
        justify-content: start;
    }
    .about-benefits__item {
        flex: 1 1 45%;
    }
    .about-benefits__stat {
        flex: 1 1 100%;
        justify-content: center;
        text-align: center;
    }
    .about-benefits__bottom {
        column-gap: 30px;
        justify-content: center;
    }
    .about-benefits__partner {
        flex: 0 1 calc(100% / 5.8);
        text-align: center;
    }
}

@media (max-width: 767.98px) {
    .about-benefits {
        margin-bottom: 75px;
    }
    .about-benefits__item {
        flex: 1 1 100%;
    }
    .about-benefits__bottom {
        column-gap: 30px;
    }
    .about-benefits__partner {
        flex: 0 1 calc(100% / 3.8);
    }
}

@media (max-width: 479.98px) {
    .about-benefits {
        margin-bottom: 50px;
    }
    .about-benefits__title {
        font-size: 37px;
    }
    .about-benefits__items {
        row-gap: 20px;
        margin-bottom: 30px;
    }
    .about-benefits__item {
        padding: 30px 20px 30px 20px;
    }
    .about-benefits__bottom {
        column-gap: 17px;
    }
    .about-benefits__stat {
        flex: 1 1 45%;
    }
    .about-benefits__stat-small {
        font-size: 14px;
    }
    .about-benefits__partner {
        flex: 1 1 45%;
    }
    .about-benefits__stat-big {
        font-size: 32px;
    }
}
</style>
