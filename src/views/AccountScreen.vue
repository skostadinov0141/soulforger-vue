<script setup lang="ts">
import { inject, onMounted } from 'vue';
import axios from 'axios';
import type { VueCookies } from 'vue-cookies';
import { useRouter } from 'vue-router';

const $cookies = inject<VueCookies>('$cookies');
const $apiHost = inject<string>('apiHost');

const router = useRouter();

onMounted(() => {
    if($cookies?.get('apiToken') === null){
        router.push('/account/login');
    }else{
        axios
            .get(
                $apiHost + '/user_auth/get_user_via_token',
                {
                    headers:{
                        accept:'application/json',
                        Authorization: $cookies?.get('apiToken')
                    }
                }
            )
            .then(response => {
                console.log(response.data);
                router.push('/account');
            })
            .catch(error => {
                console.log(error);
                router.push('/account/login');
            })
    }
})

</script>



<template>



</template>



<style scoped>

</style>