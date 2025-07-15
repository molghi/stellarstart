import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import FeaturesView from "@/views/FeaturesView.vue";
import PricingView from "@/views/PricingView.vue";
import FaqView from "@/views/FaqView.vue";
import BlogView from "@/views/BlogView.vue";
import BlogArticleView from "@/views/BlogArticleView.vue";
import ContactView from "@/views/ContactView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import ProjectView from "@/views/ProjectView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "home", component: HomeView },
        { path: "/about", name: "about", component: AboutView },
        { path: "/features", name: "features", component: FeaturesView },
        { path: "/pricing", name: "pricing", component: PricingView },
        { path: "/faq", name: "faq", component: FaqView },
        { path: "/blog", name: "blog", component: BlogView },
        { path: "/blog/:slug", name: "blog-article", component: BlogArticleView },
        { path: "/contact", name: "contact", component: ContactView },
        { path: "/portfolio", name: "portfolio", component: PortfolioView },
        { path: "/portfolio/:slug", name: "project", component: ProjectView },
    ],
    // Scroll to top upon mounting
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

export default router;
