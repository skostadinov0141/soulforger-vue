<script lang="ts">

import { defineComponent } from "vue";
import HeroSection from "../components/start_page/hero_section.vue"

export default defineComponent({
    data(){

    },
    components:{
        HeroSection
    }
})

</script>


<template>
<div class="focus-padding">
    <section class="hero-container">
        <HeroSection/>
    </section>
    <section class="goals-container">
        
    </section>
    <section class="account-application-container">
        
    </section>
</div>
</template>


<style scoped>
    .focus-padding{
        display: flex;
        flex-direction: column;
    }

    .hero-container{
        padding-left: 16vw;
        padding-right: 16vw;
        display: flex;
        align-items: center;
        max-width: 100vw;
        min-height: 100vh;
        z-index: 0;
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
        display: flex;
        align-items: center;
        max-width: 100vw;
        min-height: 100vh;
    }

    @media only screen and (max-width: 1024px){
        .hero-container{
            padding-left: 8vw;
            padding-right: 8vw;
            display: flex;
            align-items: center;
            max-width: 100vw;
            min-height: 100vh;
            z-index: 0;
            background-image:
            linear-gradient(180deg, rgba(0,0,0,0.3) 0%, 
            rgba(0,0,0,0.3) 40%, 
            rgba(10, 20, 31,1) 100%),
            url(../assets/images/landing_page_background.jpg);
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
        }
    }

</style>