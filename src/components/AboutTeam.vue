<script setup>
import img1 from "@/assets/images/content/member-1.png";
import img2 from "@/assets/images/content/member-2.png";
import img3 from "@/assets/images/content/member-3.png";
import img4 from "@/assets/images/content/member-4.png";
import iconFb from "@/assets/images/icons/fb.svg";
import iconTwi from "@/assets/images/icons/twi.svg";
import iconIn from "@/assets/images/icons/in.svg";

const content = {
    title: "Meet Our Team",
    cards: [
        {
            image: img1,
            name: "Clint Brown",
            position: "CEO",
            socials: [
                { icon: iconFb, link: "#" },
                { icon: iconTwi, link: "#" },
                { icon: iconIn, link: "#" },
            ],
        },
        {
            image: img2,
            name: "Simon Adams",
            position: "CTO",
            socials: [
                { icon: iconFb, link: "#" },
                { icon: iconTwi, link: "#" },
                { icon: iconIn, link: "#" },
            ],
        },
        {
            image: img3,
            name: "Paul Jones",
            position: "Design Lead",
            socials: [
                { icon: iconFb, link: "#" },
                { icon: iconTwi, link: "#" },
                { icon: iconIn, link: "#" },
            ],
        },
        {
            image: img4,
            name: "Sara Hardin",
            position: "Project Manager",
            socials: [
                { icon: iconFb, link: "#" },
                { icon: iconTwi, link: "#" },
                { icon: iconIn, link: "#" },
            ],
        },
    ],
};
</script>

<template>
    <section class="about-team">
        <div class="container">
            <div class="about-team__wrapper">
                <div class="about-team__title section-title">{{ content.title }}</div>
                <div class="about-team__members">
                    <div v-for="(item, index) in content.cards" :key="index" class="about-team__member">
                        <div class="about-team__member-pic">
                            <img :src="item.image" alt="member img" />
                            <div class="about-team__member-inner">
                                <a
                                    v-for="(item, index) in item.socials"
                                    :key="index"
                                    :href="item.link"
                                    class="about-team__member-social"
                                >
                                    <img :src="item.icon" alt="social media icon" />
                                </a>
                            </div>
                        </div>
                        <div class="about-team__member-body">
                            <div class="about-team__member-name">{{ item.name }}</div>
                            <div class="about-team__member-position">{{ item.position }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-team {
    background-color: #f4f6fc;
    padding: 128px 0;
}

.about-team__title {
    text-align: center;
    margin-bottom: 48px;
}

.about-team__members {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
}

.about-team__member {
    background-color: #fff;
    padding: 48px 44px;
    flex: 1 1 344px;
}

.about-team__member-pic {
    margin: 0 auto 30px;
    position: relative;
    width: 168px;
    height: 168px;
    border-radius: 50%;
    overflow: hidden;
}

.about-team__member-pic:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(348.37deg, #5239fa 17.97%, rgba(255, 255, 255, 0) 79.2%);
    transform: translateY(100%);
    transition: all 0.3s;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.about-team__member-pic:hover:after {
    transform: translateY(0%);
}

.about-team__member-pic:hover .about-team__member-inner {
    transform: translate(-50%, 0%);
}

.about-team__member-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    transition: all 0.3s;
    display: flex;
    align-items: flex-end;
    margin-bottom: 28px;
    justify-content: center;
    column-gap: 12px;
    z-index: 2;
}

.about-team__member-social {
    transition: all 0.3s;
}

.about-team__member-social:hover {
    opacity: 0.7;
}

.about-team__member-social:nth-child(2) {
    transform: translateY(2px);
}

.about-team__member-body {
    text-align: center;
}

.about-team__member-name {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 5px;
}

.about-team__member-position {
    font-weight: 400;
    font-size: 16px;
    color: rgba(40, 41, 56, 0.7);
}

/* RESPONSIVE DESIGN */

@media (max-width: 1292px) {
    .about-team__member-name {
        font-size: 22px;
    }
    .about-team__member {
        padding: 48px 25px;
    }
}

@media (max-width: 992.98px) {
    .about-team__members {
        flex-wrap: wrap;
        row-gap: 32px;
    }
    .about-team__member {
        flex: 1 1 45%;
        padding: 48px 44px;
    }
}

@media (max-width: 767.98px) {
    .about-team {
        padding: 50px 0 75px;
    }
    .about-team__members {
        row-gap: 10px;
        column-gap: 10px;
    }
}

@media (max-width: 550px) {
    .about-team__members {
        row-gap: 20px;
    }
}

@media (max-width: 479.98px) {
    .about-team__title {
        font-size: 40px;
    }
}
</style>
