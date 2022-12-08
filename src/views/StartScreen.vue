<script setup lang="ts">

import { defineComponent } from "vue";
import HeroSection from "../components/start_page/hero_section.vue"
import GoalsSection from "../components/start_page/goals_section.vue"
import Footer from "../components/footer.vue"
</script>


<template>
<div class="focus-padding">
    <section class="hero-container" id="#hero">
        <HeroSection/>
    </section>
    <section class="goals-container" id="#goals">
        <GoalsSection/>
    </section>
    <Footer/>
</div>
</template>


<style scoped>
    .focus-padding{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }

    .hero-container{
        padding-left: 16vw;
        padding-right: 16vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        max-width: 100vw;
        min-height: 100vh;
        z-index: 0;
        background-image:
        -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.3)), 
        color-stop(40%, rgba(0,0,0,0.3)), 
        to(rgba(10, 20, 31,1))),
        url(../assets/images/landing_page_background.jpg);
        background-image:
        -o-linear-gradient(top, rgba(0,0,0,0.3) 0%, 
        rgba(0,0,0,0.3) 40%, 
        rgba(10, 20, 31,1) 100%),
        url(../assets/images/landing_page_background.jpg);
        background-image:
        linear-gradient(180deg, rgba(0,0,0,0.3) 0%, 
        rgba(0,0,0,0.3) 40%, 
        rgba(10, 20, 31,1) 100%),
        url(../assets/images/landing_page_background.jpg);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
    }

    .goals-container{
        padding-left: 16vw;
        padding-right: 16vw;
        padding-top: 16vh;
        padding-bottom: 16vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: stretch;
            -ms-flex-align: stretch;
                align-items: stretch;
        max-width: 100vw;
        min-height: 100vh;
        justify-items: stretch;
    }

    @media only screen and (max-width: 1024px){
        .hero-container{
            padding-left: 8vw;
            padding-right: 8vw;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            max-width: 100vw;
            min-height: 100vh;
            z-index: 0;
            background-image:
            -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.3)), 
            color-stop(40%, rgba(0,0,0,0.3)), 
            to(rgba(10, 20, 31,1))),
            url(../assets/images/landing_page_background.jpg);
            background-image:
            -o-linear-gradient(top, rgba(0,0,0,0.3) 0%, 
            rgba(0,0,0,0.3) 40%, 
            rgba(10, 20, 31,1) 100%),
            url(../assets/images/landing_page_background.jpg);
            background-image:
            linear-gradient(180deg, rgba(0,0,0,0.3) 0%, 
            rgba(0,0,0,0.3) 40%, 
            rgba(10, 20, 31,1) 100%),
            url(../assets/images/landing_page_background.jpg);
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
        }

        .goals-container{
            padding-left: 8vw;
            padding-right: 8vw;
            padding-top: 16vh;
            padding-bottom: 16vh;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: stretch;
                -ms-flex-align: stretch;
                    align-items: stretch;
            max-width: 100vw;
            min-height: 100vh;
            justify-items: stretch;
        }

    }

</style>