<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';


    export default defineComponent({
        async mounted(){
            this.$cookies.set('apiToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzdhMjRjZTAwNjZhZjdhYTU0ODMxNDEiLCJleHAiOjE2NzA0Mzg0NDAsInByaXZfbGV2ZWwiOjZ9.liMQ6zcZEA6yf31qcWLREF070X8yDtCWBOr3yLz6yxc')
            if(this.$cookies.get('apiToken') === null){
                this.$router.push('/account/login');
            }else{
                axios
                    .get(
                        (this as any).$apiHost + '/user_auth/get_user_via_token',
                        {
                            headers:{
                                accept:'application/json',
                                Authorization:'Bearer ' + this.$cookies.get('apiToken')
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