<script setup lang="ts">
import { inject, onMounted } from 'vue';
import axios from 'axios';
import type { VueCookies } from 'vue-cookies';
import { useRouter } from 'vue-router';

const $cookies = inject<VueCookies>('$cookies');

const router = useRouter();

onMounted(() => {
    if($cookies?.get('apiToken') === null){
        router.push('/account/login');
    }else{
        axios
            .get(
                (this as any).$apiHost + '/user_auth/get_user_via_token',
                {
                    headers:{
                        accept:'application/json',
                        Authorization: $cookies?.get('apiToken')
                    }
                }
            )
            .then(response => {
                router.push('/account');
            })
            .catch(error => {
                router.push('/account/login');
            })
    }
})

</script>



<template>



</template>



<style scoped>

</style>