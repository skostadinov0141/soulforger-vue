<script setup lang="ts">
import InputField from '@/components/application_page/input_field.vue';
</script>



<template>
<div class="application-container">
    <div class="application-active-container">
        <div class="application-active-half">
            <InputField
            input-type="username"
            :validation-status="0"
            label="Benutzername"
            />
        </div>
        <div style="width: 16px;"/>
        <div class="application-active-half">

        </div>
    </div>
</div>
</template>



<style scoped>

    .application-active-half{
        flex: 1;
    }

    .application-active-container{
        padding: 16px;
        align-items: stretch;
        display: flex;
        margin-top: 8vh;
        min-height: 80vh;
        min-width: 80vw;
        background-color: rgba(var(--bg-shade-0), 0.3);
        backdrop-filter: blur(50px);
        border-radius: 5px;
        border: 1px solid rgba(var(--outline-shade-0), 0.1);
        box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    }

    .application-container{
        background-image: 
        linear-gradient(90deg, rgba(0,0,0,0.5) 100%, rgba(0,0,0,0.5) 0%),
        url('../assets/images/landing_page_background.jpg');
        background-size: cover;
        background-position: 50% ;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        min-width: 100vw;
    }

</style>