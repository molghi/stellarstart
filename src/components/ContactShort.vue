<script setup>
const content = {
    title: `Let's build something great together`,
    text: "Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.",
    buttonText: "Contact Us",
    buttonLink: "#",
};
</script>

<template>
    <div class="short-contact">
        <div class="container">
            <div class="short-contact__wrapper">
                <div class="short-contact__title">{{ content.title }}</div>
                <div class="short-contact__text">
                    {{ content.text }}
                </div>
                <a :href="content.buttonLink" class="short-contact__button button button--yellow">{{ content.buttonText }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.short-contact {
    margin-bottom: 100px;
}

.short-contact__wrapper {
    max-width: 844px;
    margin: 0 auto;
    text-align: center;
}
.short-contact__title {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    margin-bottom: 20px;
}
.short-contact__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
    max-width: 624px;
    margin: 0 auto 40px;
}
.short-contact__button {
    width: 230px;
}

/* RESPONSIVE DESIGN */

@media (max-width: 767.98px) {
    .short-contact {
        margin-bottom: 50px;
    }
    .short-contact__title {
        font-size: 42px;
    }
}

@media (max-width: 479.98px) {
    .short-contact__title {
        font-size: 35px;
        line-height: 50px;
    }
    .short-contact__text {
        font-size: 14px;
    }
    .short-contact__button {
        width: 100%;
    }
}
</style>
