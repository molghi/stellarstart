<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

const content = {
    title: "Frequently Asked Questions",
    button: {
        text: "Contact us for more info",
        link: "#",
    },
    items: [
        {
            question: "What services do you offer?",
            answer: "We specialize in end-to-end web development—from initial strategy and design to deployment and post-launch support. Each solution is tailored to your business goals.",
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity, but most standard websites are completed within 4–6 weeks, including feedback and revision rounds.",
        },
        {
            question: "Can I request changes after the project is finished?",
            answer: "Yes, we offer two free rounds of post-launch revisions. Additional changes can be discussed and scoped as needed.",
        },
        {
            question: "What if I don’t have a clear idea for my site?",
            answer: "No problem. Our team will guide you through discovery and planning to help clarify your goals and define the right direction for your project.",
        },
    ],
};

const toggleFaqItem = (index) => (activeIndex.value = activeIndex.value === index ? null : index);
</script>

<template>
    <section class="faq">
        <div class="container">
            <div class="faq__wrapper">
                <div class="faq__body">
                    <div class="faq__title">{{ content.title }}</div>
                    <a :href="content.button.link" class="faq__button">{{ content.button.text }}</a>
                </div>
                <div class="faq__items">
                    <div @click="toggleFaqItem(index)" v-for="(item, index) in content.items" :key="index" class="faq__item">
                        <div class="faq__item-row">
                            <div class="faq__item-number">0{{ index + 1 }}</div>
                            <div class="faq__item-name">{{ item.question }}</div>
                            <button :class="`faq__item-button ${activeIndex === index ? 'active' : ''}`">
                                <img src="@/assets/images/icons/plus.svg" alt="plus icon" />
                            </button>
                        </div>
                        <div :class="`faq__item-content ${activeIndex === index ? 'active' : ''}`" v-if="activeIndex === index">
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.faq {
    padding: 128px 0;
}

.faq__wrapper {
    display: flex;
    justify-content: space-between;
}

.faq__body {
    max-width: 328px;
    margin-right: 109px;
}

.faq__title {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
    margin-bottom: 16px;
}

.faq__button {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #006994;
}

.faq__button:hover {
    text-decoration: underline;
}

.faq__items {
    width: 843px;
}

.faq__item {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 2px solid #ececf1;
}

.faq__item:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
}

.faq__item-row {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.faq__item-number {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #006994;
    margin-right: 59px;
}

.faq__item-name {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
}

.faq__item-button {
    background-color: rgba(0, 0, 0, 0);
    margin-left: auto;
    transition: all 0.3s;
}

.faq__item-button.active {
    transform: rotate(-45deg);
}

.faq__item-content {
    margin: 16px 0 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: rgba(40, 41, 56, 0.87);
    height: 0;
    transition: all 0.3s;
}

.faq__item-content.active {
    height: auto;
}

/* RESPONSIVE DESIGN */

@media (max-width: 992.98px) {
    .faq__items {
        width: 100%;
    }
    .faq__wrapper {
        flex-direction: column;
    }
    .faq__body {
        margin-bottom: 50px;
        max-width: none;
        text-align: center;
        margin-right: 0;
    }
}

@media (max-width: 767.98px) {
    .faq__item-row {
        align-items: start;
    }
    .faq__item-number {
        margin-right: 25px;
    }
    .faq__item-name {
        margin-right: 25px;
    }
    .faq__item-button {
        position: relative;
        top: 10px;
    }
}

@media (max-width: 479.98px) {
    .faq__item-name {
        font-size: 18px;
        line-height: 27px;
    }
    .faq__item-content {
        font-size: 14px;
        line-height: 25px;
    }
    .faq {
        padding: 50px 0 75px;
    }
    .faq__title {
        font-size: 35px;
    }
}
</style>
