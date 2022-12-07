<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({

    })

</script>


<template>
<footer class="base-footer">
    <div class="footer-bg-l1">
        <dif class="footer-bg-l2">
            <div class="footer-content">
                <div class="social-network-link-container">
                    <img src="../assets/images/2021_Twitter_logo_-_white.png" alt="twitter">
                    <div style="width: 8px;"></div>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/soulforger_DE">@soulforger_DE</a>
                </div>
                <div style="height: 16px;"></div>
                <div class="social-network-link-container1">
                    <img src="../assets/images/Instagram_Glyph_White.png" alt="twitter">
                    <div style="width: 14px;"></div>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/project.soulforger/">@project.soulforger</a>
                </div>
            </div>
        </dif>
    </div>
</footer>
</template>


<style scoped>

    a{
        font-family: Roboto;
        font-weight: 500;
        font-size: 16px;
        text-decoration: none;
        color: #CACECA;
    }

    img{
        height: 100%;
        padding: 5px;
    }

    .social-network-link-container{
        margin-top: auto;
        height: 40px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }

    .social-network-link-container1{
        margin-bottom: auto;
        height: 40px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }

    .base-footer{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        min-width: 100%;
        min-height: 30vh;
        -webkit-box-align: stretch;
            -ms-flex-align: stretch;
                align-items: stretch;
    }

    .footer-bg-l1{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: stretch;
            -ms-flex-align: stretch;
                align-items: stretch;
        min-height: 100%;
        min-width: 100%;
        -webkit-clip-path: polygon(0 0, 100% 34%, 100% 100%, 0% 100%);
                clip-path: polygon(0 0, 100% 34%, 100% 100%, 0% 100%);
        background-color: rgb(25, 50, 77, 0.2);
    }

    .footer-bg-l2{
        min-height: 100%;
        min-width: 100%;
        -webkit-clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
                clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
        background-color: rgb(60, 120, 185, 0.1);
    }

    .footer-content{
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
        top: 35%;
        height: 65%;
        padding-left: 8vw;
        padding-right: 8vw;
    }

</style>