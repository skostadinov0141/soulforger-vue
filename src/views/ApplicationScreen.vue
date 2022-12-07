<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';


    export default defineComponent({
        async mounted(){
            if(this.$cookies.get('apiToken') === null){
                this.$router.push('/account/login');
            }else{
                axios
                    .get(
                        (this as any).$apiHost + '/user_auth/get_user_via_token',
                        {
                            headers:{
                                accept:'application/json',
                                Authorization: this.$cookies.get('apiToken')
                            }
                        }
                    )
                    .then(response => {
                        this.$router.push('/account');
                    })
                    .catch(error => {
                        this.$router.push('/account/login');
                    })
            }
        }
    })

</script>



<template>



</template>



<style scoped>

</style>