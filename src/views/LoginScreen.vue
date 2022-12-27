<script setup lang="ts">
import { type Ref, ref, watch, inject, toRef } from 'vue';
import InputField from '../components/login_page/input_field.vue'
import Button from '../components/login_page/button.vue'
import axios from 'axios';
import type { VueCookies } from 'vue-cookies';
import { useRouter } from 'vue-router';

let username: Ref<string> = ref('');
let password: Ref<string> = ref('');

let loading: Ref<boolean> = ref(false);

let error: Ref<Array<string>> = ref([]);

let apiHost : string = inject('apiHost') as string;
const $cookies = inject<VueCookies>('$cookies');
const router = useRouter();


function sendLoginRequest(){
    if(password.value !== '' && username.value !== ''){

        error.value = [];

        let requestUrl = new URL(apiHost + '/user_auth/token')

        let form = new FormData();
        form.append('grant_type','');
        form.append('username',username.value);
        form.append('password',password.value);
        form.append('scope','');
        form.append('client_id','');
        form.append('client_secret','');

        loading.value = true;

        axios
            .post(requestUrl.toString(), form ,{
                headers:{
                    'accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((response) => {
                $cookies?.set('apiToken',`${response.data.token_type} ${response.data.access_token}`)
                loading.value = false;
                router.push('/account')
            })
            .catch((apiError) => {
                error.value.push('Benutzername und/oder Passwort sind falsch!');
                loading.value = false;
            });
    }
}

</script>



<template>
    <div class="login-container">
        <div class="login-fields">
            <h3>Einloggen</h3>
            <div style="height: 24px;"></div>
            <InputField 
            v-model="username"
            input-type="username"
            label="Benutzername"
            :error="error.length === 0 ? false : true"/>
            <div style="height: 24px;"></div>
            <InputField 
            v-model="password"
            input-type="password"
            label="Passwort"
            :error="error.length === 0 ? false : true"/>
            <div style="height: 24px;" v-if="error.length !== 0"></div>
            <div class="error-container"
            v-if="error.length !== 0">
                <p class="error-content">
                    Fehler gefunden:
                </p>
                <ul>
                    <li v-for="e in error" class="error-content">
                        {{e}}
                    </li>
                </ul>
            </div>
            <div style="height: 24px;"></div>
            <a @click="">Passwort vergessen?</a>
            <div style="height: 24px;"></div>
            <div class="buttons-container">
                <Button :loading="false" @clicked="router.push('/account/apply')">Bewerben</Button>
                <div style="width: 16px;"></div>
                <Button :loading="loading" @clicked="loading ? undefined : sendLoginRequest()">Einloggen</Button>
            </div>
        </div>
    </div>
</template>



<style scoped>

    .error-container{
        background-color: rgba(255,0,0,0.025);
        border: 1px solid rgba(255, 0, 0, 0.3);
        padding: 8px 16px;
        border-radius: 5px;
    }

    .error-content{
        font-family: Roboto;
        font-size: 14px;
        font-weight: 600;
        color: #ce5656;
        list-style-position: inside;
    }

    a{
        text-decoration: none;
        color: #BA94C7;
        font-weight: 600;
        cursor: pointer;
    }

    .buttons-container{
        display: flex;
    }

    h3{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 200;
        font-style: normal;
        color: #CACECA;
    }

    .login-fields{
        padding: 24px;
        border-radius: 5px;
        border: solid 1px rgba(147, 182, 220, 0.1);
        width: 600px;
        background-color: rgba(10, 21, 31, 0.5);
        backdrop-filter: blur(25px);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    }

    .login-container{
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