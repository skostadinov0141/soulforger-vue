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
        <HeroSection/>
    </section>
    <section class="account-application-container">
        <HeroSection/>
    </section>
</div>
</template>


<style scoped>
    .focus-padding{
        display: flex;
        flex-direction: column;
        padding-left: 16vw;
        padding-right: 16vw;
    }

    .hero-container{
        display: flex;
        align-items: center;
        max-width: 100vw;
        min-height: 100vh;
        z-index: 0;
    }

</style>