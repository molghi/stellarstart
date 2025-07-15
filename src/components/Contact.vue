<script setup>
const content = {
    title: "Contact Us",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    buttonText: "Send Message",
    fields: [
        { type: "input", label: "Name", placeholder: "Enter your name" },
        { type: "input", label: "Email", placeholder: "Enter your email" },
        { type: "input", label: "Context", placeholder: "Provide context" },
        {
            type: "select",
            label: "Subject",
            placeholder: "Select Subject",
            items: [
                { value: "0", title: "Select Subject" },
                { value: "1", title: "Subject 1" },
                { value: "2", title: "Subject 2" },
                { value: "3", title: "Subject 3" },
            ],
        },
        { type: "textarea", label: "Message", placeholder: "Write your question here" },
    ],
};
</script>

<template>
    <section class="contact">
        <div class="container">
            <div class="contact__wrapper">
                <div class="contact__title section-title">{{ content.title }}</div>
                <div class="contact__sub-title">
                    {{ content.subtitle }}
                </div>
                <form class="contact__form">
                    <label v-for="(item, index) in content.fields" :key="index" class="contact__input-box">
                        <span class="contact__input-name">{{ item.label }}</span>

                        <!-- render input -->
                        <input v-if="item.type === 'input'" type="text" class="contact__input" :placeholder="item.placeholder" />

                        <!-- render select -->
                        <select v-if="item.type === 'select'" name="subject" class="contact__select">
                            <option
                                v-for="(element, index) in item.items"
                                :key="index"
                                :value="element.value"
                                :disabled="element.value === '0'"
                                :selected="element.value === '0'"
                            >
                                {{ element.title }}
                            </option>
                        </select>

                        <!-- render textarea -->
                        <textarea
                            v-if="item.type === 'textarea'"
                            class="contact__textarea"
                            :placeholder="item.placeholder"
                        ></textarea>
                    </label>

                    <button type="submit" class="contact__button">{{ content.buttonText }}</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact {
    margin: 100px 0;
}

.contact__title {
    text-align: center;
    margin-bottom: 16px;
}

.contact__sub-title {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    max-width: 562px;
    color: rgba(40, 41, 56, 0.7);
    margin: 0 auto 64px;
}

.contact__form {
    background-color: #f4f6fc;
    border-radius: 12px;
    padding: 55px 77px 69px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 32px;
}

.contact__input-box {
    flex: 1 1 45%;
    margin-bottom: 24px;
}

.contact__input-box:nth-child(5) {
    flex: 1 1 100%;
}

.contact__input-name {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 6px;
    cursor: pointer;
}

.contact__input,
.contact__textarea,
.contact__select {
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    padding: 18px 32px;
    font-weight: 400;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0);
}

.contact__input:focus,
.contact__textarea:focus,
.contact__select:focus {
    border-color: coral;
}

.contact__textarea {
    height: 138px;
}

.contact__select {
    display: block;
    width: 100%;
    appearance: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
}

.contact__button {
    flex: 0 0 264px;
    font-weight: 500;
    font-size: 18px;
    margin-top: 32px;
    background-color: #282938;
    border-radius: 41px;
    color: #fff;
    padding: 16px 64px;
    transition: all 0.3s;
}

.contact__button:hover {
    opacity: 0.7;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .contact {
        margin: 70px 0;
    }
}
@media (max-width: 767.98px) {
    .contact {
        margin: 60px 0 70px;
    }
    .contact__form {
        padding: 55px 40px 69px;
    }
    .contact__input,
    .contact__textarea,
    .contact__select {
        font-size: 14px;
        padding: 18px;
    }
    .contact__button {
        flex-grow: 1;
    }
    .contact__input-box {
        flex: 1 1 100%;
    }
}
@media (max-width: 479.98px) {
    .contact {
        margin: 30px 0 70px;
    }
    .contact__sub-title {
        margin-bottom: 40px;
    }
    .contact__form {
        padding: 30px 20px 50px;
    }
}
</style>
