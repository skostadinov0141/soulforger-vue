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

            </div>
        </dif>
    </div>
</footer>
</template>


<style scoped>

    .base-footer{
        display: flex;
        min-width: 100%;
        min-height: 30vh;
        align-items: stretch;
    }

    .footer-bg-l1{
        display: flex;
        align-items: stretch;
        min-height: 100%;
        min-width: 100%;
        clip-path: polygon(0 0, 100% 34%, 100% 100%, 0% 100%);
        background-color: rgb(25, 50, 77, 0.2);
    }

    .footer-bg-l2{
        min-height: 100%;
        min-width: 100%;
        clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
        background-color: rgb(60, 120, 185, 0.1);
    }

    .footer-content{
        top: 35%;
        height: 65%;
        padding-left: 8vw;
        padding-right: 8vw;
    }

</style>