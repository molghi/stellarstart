<script setup>
const content = {
    title: "Our Pricing Plans",
    subtitle:
        "When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.",
    cards: [
        {
            price: "$299",
            label: "Per Design",
            title: "Landing Page",
            text: "When you’re ready to go beyond prototyping in Figma",
            list: [
                { text: "All limited links", active: true },
                { text: "Own analytics platform", active: true },
                { text: "Chat support", active: true },
                { text: "Optimize hashtags", active: false },
                { text: "Unlimited users", active: false },
            ],
            button: { text: "Get started", link: "#" },
        },
        {
            price: "$399",
            label: "Multi Design",
            title: "Website Page",
            text: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help",
            list: [
                { text: "All limited links", active: true },
                { text: "Own analytics platform", active: true },
                { text: "Chat support", active: true },
                { text: "Optimize hashtags", active: true },
                { text: "Unlimited users", active: true },
            ],
            button: { text: "Get started", link: "#" },
        },
        {
            price: "$499+",
            label: "Per Design",
            title: "Complex Project",
            text: "When you’re ready to go beyond prototyping in Figma",
            list: [
                { text: "All limited links", active: true },
                { text: "Own analytics platform", active: true },
                { text: "Chat support", active: true },
                { text: "Optimize hashtags", active: true },
                { text: "Unlimited users", active: true },
                { text: "Assist and Help", active: true },
            ],
            button: { text: "Contact us", link: "#" },
        },
    ],
};
</script>

<template>
    <section class="pricing">
        <div class="container">
            <div class="pricing__wrapper">
                <div class="pricing__top">
                    <div class="pricing__title section-title">{{ content.title }}</div>
                    <div class="pricing__text">
                        {{ content.subtitle }}
                    </div>
                </div>
                <div class="pricing__cards">
                    <div v-for="(item, index) in content.cards" :key="index" class="pricing__card">
                        <div class="pricing__card-row">
                            <div class="pricing__card-price">{{ item.price }}</div>
                            <div class="pricing__card-label">{{ item.label }}</div>
                        </div>
                        <div class="pricing__card-title">{{ item.title }}</div>
                        <div class="pricing__card-text">{{ item.text }}</div>
                        <ul class="pricing__card-list">
                            <li
                                v-for="(item, index) in item.list"
                                :key="index"
                                :class="`pricing__card-item ${!item.active ? 'pricing__card-item--inactive' : ''}`"
                            >
                                {{ item.text }}
                            </li>
                        </ul>
                        <a :href="item.button.link" class="pricing__card-button button button--yellow">{{ item.button.text }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.pricing {
    padding: 100px 0;
}

.pricing__top {
    max-width: 562px;
    margin: 0 auto 64px;
    text-align: center;
}

.pricing__title {
    margin-bottom: 16px;
}

.pricing__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

.pricing__cards {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
}

.pricing__card {
    flex: 1 1 406px;
    background-color: #f4f6fc;
    transition: all 0.3s;
    border-radius: 12px;
    padding: 64px 48px;
    display: flex;
    flex-direction: column;
}

.pricing__card:hover {
    background-color: #1c1e53;
}

.pricing__card:hover .pricing__card-price,
.pricing__card:hover .pricing__card-title,
.pricing__card:hover .pricing__card-text,
.pricing__card:hover .pricing__card-item {
    color: #fff;
}

.pricing__card:hover .pricing__card-label {
    color: #ffa52c;
}

.pricing__card:hover .pricing__card-button {
    background-color: #ffa52c;
    color: #000;
}

.pricing__card:hover .pricing__card-item--inactive {
    color: rgba(255, 255, 255, 0.6);
}

.pricing__card-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.pricing__card-price {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    margin-right: 8px;
    transition: all 0.3s;
}

.pricing__card-label {
    font-weight: 400;
    font-size: 16px;
    color: #006994;
    transition: all 0.3s;
}

.pricing__card-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 8px;
    transition: all 0.3s;
}

.pricing__card-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    max-width: 281px;
    color: rgba(40, 41, 56, 0.7);
    margin-bottom: 44px;
    transition: all 0.3s;
}

.pricing__card-list {
    margin-bottom: 65px;
    flex: 1 1 100%;
}

.pricing__card-item {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    transition: all 0.3s;
    padding-left: 38px;
    position: relative;
}

.pricing__card-item + .pricing__card-item {
    margin-top: 25px;
}

.pricing__card-item:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: url("/images/icons/pricing-thing.svg") 0 0 no-repeat;
    background-size: contain;
    width: 26px;
    height: 18px;
}

.pricing__card-item--inactive {
    color: rgba(40, 41, 56, 0.7);
}

.pricing__card-item--inactive:after {
    filter: saturate(0) contrast(50%);
}

.pricing__card-button {
    display: inline-block;
    width: 100%;
    text-align: center;
    background-color: #282938;
    color: #fff;
    transition: all 0.3s;
}

.pricing__card-button:hover {
    opacity: 0.7;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .pricing__card {
        padding: 40px 34px 50px;
    }
}

@media (max-width: 992.98px) {
    .pricing {
        padding: 50px 0 0;
    }
    .pricing__card {
        flex: 1 1 45%;
        max-width: 45%;
    }
    .pricing__card:last-child {
        margin-top: 32px;
    }
    .pricing__cards {
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media (max-width: 767.98px) {
    .pricing__cards {
        padding-left: 50px;
        padding-right: 50px;
    }
    .pricing__card {
        flex: 1 1 100%;
        max-width: 100%;
    }
    .pricing__card:nth-child(1) {
        margin-bottom: 32px;
    }
    .pricing__card-text {
        max-width: 100%;
    }
}

@media (max-width: 500px) {
    .pricing__cards {
        padding-left: 0;
        padding-right: 0;
    }
}

@media (max-width: 479.98px) {
    .pricing {
        padding: 20px 0 50px;
    }
    .pricing__top {
        margin-bottom: 40px;
    }
    .pricing__title {
        font-size: 34px;
    }
}
</style>
