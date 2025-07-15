<script setup>
const content = {
    title: "The process we follow",
    cards: [
        { title: "Planning", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr" },
        { title: "Conception", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr" },
        { title: "Design", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr" },
        { title: "Development", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr" },
    ],
};
</script>

<template>
    <section class="about-process">
        <div class="container">
            <div class="about-process__wrapper">
                <div class="about-process__title section-title">{{ content.title }}</div>
                <div class="about-process__items">
                    <div v-for="(item, index) in content.cards" :key="index" class="about-process__item">
                        <div class="about-process__item-top"></div>
                        <div class="about-process__item-title">{{ item.title }}</div>
                        <div class="about-process__item-text">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-process {
    margin-bottom: 128px;
}

.about-process__title {
    text-align: center;
    margin-bottom: 48px;
}

.about-process__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 32px;
}

.about-process__item-top {
    width: 272px;
    height: 24px;
    overflow: hidden;
    margin-bottom: 32px;
    position: relative;
}

.about-process__item-top:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #006994;
    width: 24px;
    height: 24px;
    border-radius: 50px;
}

.about-process__item-top:before {
    content: "";
    position: absolute;
    top: 9px;
    left: 48px;
    background: url("/images/icons/line.svg") 0 0 / cover no-repeat;
    width: 100%;
    height: 4px;
}

.about-process__item-top img {
    height: 4px;
    max-width: 100%;
    width: 100%;
}

.about-process__item-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 8px;
}

.about-process__item-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(40, 41, 56, 0.7);
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .about-process__item-top {
        width: auto;
    }
    .about-process__item-top {
        width: 100%;
    }
}

@media (max-width: 992.98px) {
    .about-process__items {
        flex-wrap: wrap;
    }
    .about-process__item {
        flex: 1 1 45%;
        margin-bottom: 30px;
    }
    .about-process__item-top {
        margin-bottom: 20px;
    }
}

@media (max-width: 767.98px) {
    .about-process {
        margin-bottom: 75px;
    }
    .about-process__title {
        font-size: 41px;
    }
}

@media (max-width: 479.98px) {
    .about-process {
        margin-bottom: 50px;
    }
    .about-process__item {
        flex: 1 1 100%;
    }
}
</style>
