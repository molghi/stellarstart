<script setup>
const content = {
    title: "Building stellar websites for early startups",
    subtitle:
        "We specialize in crafting high-performance websites tailored to the needs of ambitious startups. Our solutions are fast, scalable, and designed to make an immediate impact.",
    title2: "Send Inquiry",
    subtitle2:
        " Let’s bring your vision to life. Share your project details, and we’ll get back to you with a tailored proposal.",
    fields: [
        { placeholder: "Your Name", type: "text" },
        { placeholder: "Email", type: "email" },
        { placeholder: "Paste your Figma design URL", type: "text" },
    ],
    button: "Send",
    button2: { title: "Get in touch with us", path: "#" },
};
</script>

<template>
    <section class="inquiry">
        <div class="container">
            <div class="inquiry__wrapper">
                <div class="inquiry__body">
                    <div class="inquiry__title">{{ content.title }}</div>
                    <div class="inquiry__text">
                        {{ content.subtitle }}
                    </div>
                </div>
                <div class="inquiry__feedback">
                    <div class="inquiry__feedback-title">{{ content.title2 }}</div>
                    <div class="inquiry__feedback-text">
                        {{ content.subtitle2 }}
                    </div>
                    <form action="#" class="inquiry__form">
                        <div v-for="(item, index) in content.fields" :key="index" class="inquiry__input-box">
                            <input :type="item.type" class="inquiry__input" :placeholder="item.placeholder" required />
                        </div>
                        <button class="inquiry__button button button--yellow" type="submit">{{ content.button }}</button>
                        <a :href="content.button2.path" class="inquiry__contact button--arrow">{{ content.button2.title }}</a>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.inquiry {
    margin-bottom: 100px;
    color: #fff;
}

.inquiry__wrapper {
    display: flex;
}

.inquiry__body {
    flex: 1 1 50%;
    min-height: 691px;
    background: url("@/assets/images/content/inquiry.jpg") 0 0 / cover no-repeat;
    padding: 95px;
}

.inquiry__title {
    font-weight: 600;
    font-size: 54px;
    line-height: 74px;
    margin-bottom: 24px;
}

.inquiry__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
}

.inquiry__feedback {
    flex: 1 1 50%;
    padding: 95px;
    background-color: #006994;
    text-align: center;
}

.inquiry__feedback-title {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 16px;
    text-align: left;
}

.inquiry__feedback-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 40px;
    text-align: left;
}

.inquiry__input-box {
    margin-bottom: 40px;
}

.inquiry__input {
    background-color: rgba(0, 0, 0, 0);
    color: rgba(244, 246, 252, 0.5);
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
}

.inquiry__input:focus {
    border-color: #ffa52c;
}

.inquiry__button {
    display: block;
    width: 100%;
    color: #000;
    margin-bottom: 28px;
}

.inquiry .button--arrow {
    padding-right: 0;
}

.inquiry__contact {
    display: inline-block;
    padding-right: 40px;
}

.inquiry .button--arrow {
    padding-right: 40px;
}

.inquiry__contact:hover {
    text-decoration: underline;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .inquiry__body {
        padding: 75px 50px;
    }
    .inquiry__title {
        font-size: 45px;
    }
    .inquiry__feedback {
        padding: 75px 50px;
    }
}

@media (max-width: 992.98px) {
    .inquiry__wrapper {
        flex-direction: column;
        margin: 0 -10px;
    }
    .inquiry__body {
        min-height: auto;
    }
}

@media (max-width: 767.98px) {
    .inquiry__body {
        padding: 50px 10px;
    }
    .inquiry__feedback {
        padding: 50px 10px;
    }
}

@media (max-width: 479.98px) {
    .inquiry__body {
        display: none;
    }
    .inquiry__title {
        font-size: 29px;
        line-height: 48px;
    }
    .inquiry__text {
        font-size: 14px;
    }
    .inquiry__feedback-text {
        font-size: 14px;
    }
}
</style>
