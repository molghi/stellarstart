<script setup>
import iconFb from "@/assets/images/icons/fb.svg";
import iconTwi from "@/assets/images/icons/twi.svg";
import iconIg from "@/assets/images/icons/ig.svg";
import iconIn from "@/assets/images/icons/in.svg";
import { RouterLink } from "vue-router";

const content = {
    title: "StellarStart",
    subtitle: "We are always open to discuss your project and improve your online presence.",
    title2: "Let's Talk!",
    subtitle2:
        "We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.",
    socials: [
        { img: iconFb, path: "#" },
        { img: iconTwi, path: "#" },
        { img: iconIg, path: "#" },
        { img: iconIn, path: "#" },
    ],
    copyright: "Copyright 2022",
    block: [
        { name: "Email us", contact: "contact@website.com", type: "email" },
        { name: "Call us", contact: "0927 6277 28525", type: "phone" },
    ],
    bottomLinks: [
        { title: "Home", path: "/" },
        { title: "About us", path: "/about" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Features", path: "/features" },
        { title: "Pricing", path: "/pricing" },
        { title: "FAQ", path: "/faq" },
        { title: "Blog", path: "/blog" },
    ],
};
</script>

<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="container">
                <div class="footer__top-inner">
                    <div class="footer__about">
                        <a href="#" class="footer__logo logo">{{ content.title }}</a>
                        <div class="footer__text">
                            {{ content.subtitle }}
                        </div>
                    </div>
                    <div class="footer__social">
                        <div class="footer__social-title">{{ content.title2 }}</div>
                        <div class="footer__social-text">
                            {{ content.subtitle2 }}
                        </div>
                        <ul class="footer__social-list">
                            <li v-for="(item, index) in content.socials" :key="index" class="footer__social-item">
                                <a :href="item.path" class="footer__social-link">
                                    <img :src="item.img" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__contact">
                        <div class="footer__contact-inner">
                            <div v-for="(item, index) in content.block" :key="index" class="footer__column">
                                <div class="footer__column-title">{{ item.name }}</div>
                                <a
                                    :href="`${item.type === 'phone' ? `tel:${item.contact.replaceAll(' ', '')}` : `mailto:${item.contact}`}`"
                                    class="footer__column-text"
                                    >{{ item.contact }}</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="footer__bottom-inner">
                    <div class="footer__copy">{{ content.copyright }}</div>
                    <div class="footer__menu">
                        <ul class="footer__list">
                            <li v-for="(item, index) in content.bottomLinks" :key="index" class="footer__list-item">
                                <RouterLink :to="item.path" class="footer__link">{{ item.title }}</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    flex: 0 0 auto;
}

.footer__top {
    background-color: #006994;
    color: #fff;
    padding-top: 104px;
}

.footer__top-inner {
    display: flex;
    flex-wrap: wrap;
}

.footer__about {
    flex: 1 1 50%;
}

.footer__logo {
    margin-bottom: 24px;
}

.footer__text {
    max-width: 400px;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: rgba(255, 255, 255, 0.8);
}

.footer__social {
    flex: 1 1 50%;
}

.footer__social-title {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    margin-bottom: 14px;
}

.footer__social-text {
    max-width: 400px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(244, 246, 252, 0.8);
    margin-bottom: 28px;
}

.footer__social-list {
    display: flex;
    align-items: center;
}

.footer__social-item + .footer__social-item {
    margin-left: 27px;
}

.footer__social-link {
    transition: all 0.3s;
}

.footer__social-link:hover {
    opacity: 0.6;
}

.footer__contact {
    flex: 1 1 100%;
}

.footer__contact-inner {
    display: inline-flex;
    background-color: #ffa52c;
    color: #000;
    padding: 20px 137px 20px 37px;
}

.footer__column:first-child {
    margin-right: 29px;
}

.footer__column-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
}

.footer__column-text {
    font-weight: 400;
    font-size: 16px;
}

.footer__column-text:hover {
    text-decoration: underline;
}

.footer__bottom {
    padding: 32px 0;
}

.footer__bottom-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__list {
    display: flex;
    align-items: center;
}

.footer__list-item + .footer__list-item {
    margin-left: 32px;
}

.footer__link:hover {
    text-decoration: underline;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .footer__contact-inner {
        padding: 20px 37px 20px 37px;
    }
}

@media (max-width: 992.98px) {
    .footer__list-item + .footer__list-item {
        margin-left: 25px;
    }
    .footer__social {
        flex: 1 1 45%;
        margin-bottom: 40px;
    }
    .footer__about {
        flex: 1 1 45%;
    }
    .footer__top-inner {
        column-gap: 50px;
    }
}

@media (max-width: 767.98px) {
    .footer__bottom-inner {
        justify-content: center;
    }
    .footer__menu {
        display: none;
    }
    .footer__top {
        padding-top: 50px;
    }
    .footer__contact-inner {
        display: flex;
        margin: 0 -10px;
    }
    .footer__top-inner {
        flex-direction: column;
    }
    .footer__about {
        margin-bottom: 30px;
    }
    .footer__text {
        max-width: none;
    }
    .footer__social-text {
        max-width: none;
    }
    .footer__social-title {
        font-size: 26px;
    }
}

@media (max-width: 479.98px) {
    .footer__column:first-child {
        margin-bottom: 15px;
    }
    .footer__social-item + .footer__social-item {
        margin-left: 0;
    }
    .footer__social-link img {
        width: 25px;
    }
    .footer__contact-inner {
        display: block;
    }
    .footer__top {
        padding-top: 20px;
    }
    .footer__about {
        display: none;
    }
    .footer__social {
        margin-bottom: 20px;
    }
    .footer__social-title {
        display: none;
    }
    .footer__social-text {
        display: none;
    }
    .footer__social-list {
        justify-content: space-between;
    }
}
</style>
