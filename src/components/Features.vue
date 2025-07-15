<script setup>
import img1 from "/images/icons/group.svg";
import img2 from "/images/icons/feat-2.svg";
import img3 from "/images/icons/feat-3.svg";
import img4 from "/images/icons/feat-4.svg";
import img5 from "/images/icons/feat-5.svg";
import img6 from "/images/icons/feat-6.svg";

const content = {
    title: "Features",
    subtitle: " Design that solves real problems—one product at a time",
    cards: [
        {
            cardTitle: "Uses Client First",
            cardText:
                "We prioritize clarity and structure, ensuring that your product reflects a client-centric mindset from start to finish.",
            cardImg: img1,
        },
        {
            cardTitle: "Two Free Revision Rounds",
            cardText:
                "Your feedback matters. We offer two complimentary revision rounds to fine-tune the design to your expectations.",
            cardImg: img2,
        },
        {
            cardTitle: "Template Customization",
            cardText:
                "Every element is tailored to fit your brand identity, offering full flexibility without compromising on quality.",
            cardImg: img3,
        },
        {
            cardTitle: "24/7 Support",
            cardText:
                "Our team is available around the clock to address your questions, provide guidance, and ensure seamless collaboration.",
            cardImg: img4,
        },
        {
            cardTitle: "Quick Delivery",
            cardText:
                "Efficiency meets excellence. We deliver fast without cutting corners, so you stay ahead of your deadlines.",
            cardImg: img5,
        },
        {
            cardTitle: "Hands-on Approach",
            cardText: "From planning to execution, we stay closely involved to ensure your vision is realized with precision.",
            cardImg: img6,
        },
    ],
};
</script>

<template>
    <section class="features">
        <div class="container">
            <div class="features__wrapper">
                <div class="features__top">
                    <div class="features__little-title">{{ content.title }}</div>
                    <div class="features__title section-title">{{ content.subtitle }}</div>
                </div>
                <div class="features__cards">
                    <div v-for="(item, index) in content.cards" :key="index" class="features__card">
                        <div class="features__card-icon">
                            <img :src="item.cardImg" alt="card icon" />
                        </div>
                        <div class="features__card-title">{{ item.cardTitle }}</div>
                        <div class="features__card-text">
                            {{ item.cardText }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.features {
    background-color: #f4f6fc;
    padding: 128px 0;
}

.features__top {
    text-align: center;
    max-width: 630px;
    margin: 0 auto 47px;
}
.features__little-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 20px;
}

.features__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 24px;
}

.features__card {
    background-color: #fff;
    padding: 58px 33px 48px 48px;
}

.features__card-icon {
    margin-bottom: 22px;
}
.features__card-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 12px;
}
.features__card-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .features__card-text {
        font-size: 14px;
    }
    .features__card {
        padding: 58px 33px 33px 33px;
    }
}

@media (max-width: 992.98px) {
    .features__cards {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
}

@media (max-width: 767.98px) {
    .features__title {
        font-size: 36px;
        line-height: 50px;
    }
    .features {
        padding: 50px 0 75px;
    }
}

@media (max-width: 700px) {
    .features__cards {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 15px;
    }
}

@media (max-width: 479.98px) {
    .features__card {
        padding: 33px;
    }
    .features__title {
        font-size: 28px;
    }
}
</style>
