<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink, useRoute } from "vue-router";
import "@/assets/css/hamburgerMenu.css"; // hamburger menu styles

const rootEl = ref(null); // component’s DOM root

const siteName = "StellarStart";

const menu = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Features", path: "/features" },
    { title: "Pricing", path: "/pricing" },
    { title: "FAQ", path: "/faq" },
    { title: "Blog", path: "/blog" },
];

const button = { title: "Contact us", path: "/contact" };

const isMenuActive = ref(false);
const isHamburgerActive = ref(false);

const toggleHamburger = () => {
    isMenuActive.value = !isMenuActive.value;
    isHamburgerActive.value = !isHamburgerActive.value;
    document.body.classList.toggle("lock"); // no scroll
};

// highlight active link
const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
};

// check if the clicked element is not inside the component
const handleClickOutside = () => {
    if (rootEl.value && !rootEl.value.contains(event.target)) {
        // hide hamburger menu
        isMenuActive.value = false;
        isHamburgerActive.value = false;
        document.body.classList.remove("lock");
    }
};

onMounted(() => document.addEventListener("click", handleClickOutside)); // start listening on mount

onBeforeUnmount(() => document.removeEventListener("click", handleClickOutside)); // clean up
</script>

<template>
    <header ref="rootEl" class="header">
        <div class="container">
            <div class="header__wrapper">
                <RouterLink to="/" class="header__logo logo"> {{ siteName }} </RouterLink>
                <div class="header__box">
                    <nav :class="`header__menu ${isMenuActive ? 'active' : ''}`">
                        <ul class="header__list">
                            <!-- Loop over 'menu' to generate items -->
                            <li v-for="(item, index) in menu" :key="index" class="header__list-item">
                                <RouterLink
                                    :to="item.path"
                                    :class="`header__link ${isActiveLink(item.path) ? 'header__link--active' : ''}`"
                                    >{{ item.title }}</RouterLink
                                >
                            </li>
                        </ul>
                        <RouterLink :to="button.path" class="header__button">{{ button.title }}</RouterLink>
                    </nav>
                    <!-- Hamburger menu -->
                    <div @click="toggleHamburger" :class="`header__hamburger-menu ${isHamburgerActive ? 'active' : ''}`">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    background-color: #006994;
    color: #fff;
    padding: 16px 0;
}

.header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__menu {
    display: flex;
    align-items: center;
}

.header__list {
    display: flex;
}

.header__list-item + .header__list-item {
    margin-left: 32px;
}

.header__link {
    color: #bbbbcb;
    transition: all 0.3s;
}

.header__link:hover {
    text-decoration: underline;
}

.header__link:hover {
    color: #fff;
}

.header__link--active {
    color: #fff;
}

.header__link--active:hover {
    text-decoration: none;
}

.header__hamburger-menu {
    display: none;
}

.header__button {
    display: inline-block;
    margin-left: 48px;
    border: 2px solid rgba(244, 246, 252, 0.5);
    border-radius: 41px;
    padding: 16px 48px;
    transition: all 0.3s;
}

.header__button:hover {
    background-color: white;
    color: #006994;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .header__list-item + .header__list-item {
        margin-left: 20px;
    }
}

@media (max-width: 992.98px) {
    .header__hamburger-menu {
        display: block;
    }
    ul.header__list {
        display: block;
        text-align: center;
    }
    .header {
        position: relative;
        padding: 24px 0;
    }
    .header:after {
        content: "";
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        background-color: #006994;
        width: 100%;
        height: 100%;
    }
    .header__logo {
        position: relative;
        z-index: 5;
    }
    .header__menu {
        display: block;
    }
    .header__list-item + .header__list-item {
        margin-left: 0;
    }
    .header__link {
        font-size: 24px;
    }
    .header__button {
        margin-left: 0;
    }
}
</style>
