<script setup lang="ts">



</script>



<template>
    <div class="login-container">
        <input type="text" class="login-input" spellcheck="false" placeholder="Hier schreiben...">
    </div>
</template>



<style scoped>

    .login-input{
        margin: 8px;
        border: 0;
        outline: none;
        padding: 10px 16px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        color: #CACECA;
        background-color: #0F1E2E;
        border-radius: 5px;
        -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        -webkit-transition: 250ms;
        -o-transition: 250ms;
        transition: 250ms;
        border: solid 1px rgba(147, 182, 220, 0.1);
        
        -webkit-box-sizing: border-box;
        
                box-sizing: border-box;
    }

    .login-input:focus{
        -webkit-box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
        border: solid 1px rgba(147, 182, 220, 0.3);
    }

    .login-container{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        justify-items: center;
        padding: 16vh 8vw;
        min-height: 100vh;
        min-width: 100vw;
    }

</style>