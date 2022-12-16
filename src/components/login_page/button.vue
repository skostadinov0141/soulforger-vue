<script setup lang="ts">
import { watch, type Ref } from 'vue';

const props = defineProps<{
    loading : boolean,
}>();

const emit = defineEmits<{
    (e:'clicked'):void
}>();

</script>


<template>
    <button
    :class="loading ? 'button-loading' : 'button-default'"
    @click="emit('clicked')">
        <div class="loader"
        v-if="loading">
        </div>
        <slot v-if="!loading"></slot>
    </button>
</template>


<style>

    .loader {
        border: 2px solid #f3f3f3; /* Light grey */
        border-top: 2px solid #3498db; /* Blue */
        border-radius: 50%;
        height: 19px;
        width: 19px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .button-default{
        flex: 1;
        text-transform: uppercase;
        width: 100%;
        padding: 8px 0;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 600;
        color: #CACECA;
        border-radius: 5px;
        background-color: #764686;
        border: none;
        transition: 200ms;
    }
    
    .button-loading{
        display: flex;
        justify-content: center;
        flex: 1;
        text-transform: uppercase;
        width: 100%;
        padding: 8px 0;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 600;
        color: #CACECA;
        border-radius: 5px;
        background-color: #764686;
        border: none;
        transition: 200ms;
    }

    button:hover{
        background-color: #8D54A0;
    }

</style>