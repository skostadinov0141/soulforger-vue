<script setup lang="ts">
import InputField from '../components/login_page/input_field.vue'


</script>



<template>
    <div class="login-container">
        <InputField input-type="username"
        label="Benutzername"/>
    </div>
</template>



<style scoped>

    .login-container{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: stretch;
            -ms-flex-align: stretch;
                align-items: stretch;
        justify-items: center;
        padding: 16vh 8vw;
        min-height: 100vh;
        min-width: 100vw;
    }

</style>