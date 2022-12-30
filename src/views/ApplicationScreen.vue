<script setup lang="ts">
import InputField from '@/components/application_page/input_field.vue';
import InputFieldMultiline from '@/components/application_page/input_field_multiline.vue';
import ValidationList from '@/components/application_page/validation_list.vue';
import AGB from '@/components/application_page/agb_viewer.vue'
import RadioButton from '@/components/application_page/radio_button.vue';
import axios from 'axios';
import { inject, ref, type Ref } from 'vue';
import type { VueCookies } from 'vue-cookies';
import { useRouter } from 'vue-router';

interface ValidationElement{
    content:string,
    valid:boolean
}

let apiHost : string = inject('apiHost') as string;
const $cookies = inject<VueCookies>('$cookies');
const router = useRouter();

let username: Ref<string> = ref('');
let usernameHasError: Ref<boolean> = ref(false);
let usernameValidations: Ref<Array<ValidationElement>> = ref([
    {content:'Der Benutzername ist verfügbar.', valid:true},
    {content:'Der Benutzername ist mind. 8 Zeichen lang.', valid:true},
    {content:'Der Benutzername ist max. 20 Zeichen lang.', valid:true},
    {content:'Der Benutzername beinhaltet nur erlaubte Charaktäre. (Erlaubt sind: a-z, A-Z, 0-9, ".", "-" und "_")', valid:true},
]);

let email: Ref<string> = ref('');
let emailHasError: Ref<boolean> = ref(false);
let emailValidations: Ref<Array<ValidationElement>> = ref([
    {content:'Die E-Mail ist verfügbar.', valid:true},
    {content:'Die E-Mail ist korrekt.', valid:true},
]);

let password: Ref<string> = ref('');
let passwordHasError: Ref<boolean> = ref(false);
let passwordValidations: Ref<Array<ValidationElement>> = ref([
    {content:'Das Passwort beinhaltet mind. einen Kleinbuchstaben.', valid:true},
    {content:'Das Passwort beinhaltet mind. einen Großbuchstaben.', valid:true},
    {content:'Das Passwort beinhaltet mind. eine Zahl.', valid:true},
    {content:'Das Passwort beinhaltet mind. einen Sonderzeichen.', valid:true},
    {content:'Das Passwort ist mind. 10 Zeichen lang.', valid:true},
]);

let passwordConfirmation: Ref<string> = ref('');
let passwordConfirmationHasError: Ref<boolean> = ref(false);
let passwordConfirmationValidations: Ref<Array<ValidationElement>> = ref([
    {content:'Passwort und Passwortbestätigung stimmen überein.', valid:true},
]);

let accountTypeRadioGroup: Ref<Array<boolean>> = ref([
    true,
    false,
]);

function changeRadioGroupState(current:number){
    for (let i = 0; i < accountTypeRadioGroup.value.length; i++) {
        if(i === current){
            accountTypeRadioGroup.value[i] = true;
        }else{
            accountTypeRadioGroup.value[i] = false;
        }
    }
    console.log(accountTypeRadioGroup.value);
}

function validateUsername(){
    if(username.value === ''){
        for (let i = 0; i < usernameValidations.value.length; i++) {
            usernameValidations.value[i].valid = true;
        }
        usernameHasError.value = false;
        return;
    }
    axios
        .get(`${apiHost}/user_auth/check_username_availability/${encodeURIComponent(username.value)}`)
        .then((response) => {
            for (let i = 0; i < usernameValidations.value.length; i++) {
                usernameValidations.value[i].valid = true;
            }
            response.data.details.forEach((element: number) => {
                usernameValidations.value[element].valid = false;
            });
            if(response.data.details.length !== 0){usernameHasError.value = true;}
            else{usernameHasError.value = false;}
        });
}

function validateEmail(){
    if(email.value === ''){
        for (let i = 0; i < emailValidations.value.length; i++) {
            emailValidations.value[i].valid = true;
        }
        emailHasError.value = false;
        return;
    }
    axios
        .get(`${apiHost}/user_auth/check_email_availability/${encodeURIComponent(email.value)}`)
        .then((response) => {
            for (let i = 0; i < emailValidations.value.length; i++) {
                emailValidations.value[i].valid = true;
            }
            response.data.details.forEach((element: number) => {
                emailValidations.value[element].valid = false;
            });
            if(response.data.details.length !== 0){emailHasError.value = true;}
            else{emailHasError.value = false;}
        });
}

function validatePassword(){
    if(password.value === ''){
        for (let i = 0; i < passwordValidations.value.length; i++) {
            passwordValidations.value[i].valid = true;
        }
        passwordHasError.value = false;
        return;
    }
    axios
        .get(`${apiHost}/user_auth/confirm_password_validity/${encodeURIComponent(password.value)}`)
        .then((response) => {
            for (let i = 0; i < passwordValidations.value.length; i++) {
                passwordValidations.value[i].valid = true;
            }
            response.data.details.forEach((element: number) => {
                passwordValidations.value[element].valid = false;
            });
            if(response.data.details.length !== 0){passwordHasError.value = true;}
            else{passwordHasError.value = false;}
        });
}

function validatePasswordConfirmation(){
    if(passwordConfirmation.value === ''){
        for (let i = 0; i < passwordConfirmationValidations.value.length; i++) {
            passwordConfirmationValidations.value[i].valid = true;
        }
        passwordConfirmationHasError.value = false;
        return;
    }
    if(passwordConfirmation.value !== password.value){
        passwordConfirmationValidations.value[0].valid = false;
        passwordConfirmationHasError.value = true;
        return;
    }
    passwordConfirmationValidations.value[0].valid = true;
    passwordConfirmationHasError.value = false;
}

</script>



<template>
<div class="application-container">
    <div class="application-active-container">
        <div class="application-active-half">
            <InputField
            input-type="username"
            :validation-status="usernameHasError ? 1 : 0"
            label="Benutzername"
            v-model="username"
            @validate="validateUsername()"
            />
            <ValidationList :elements="usernameValidations"/>
            <div style="flex:1; min-height: 16px;"/>
            <InputField
            input-type="email"
            :validation-status="emailHasError ? 1 : 0"
            label="E-Mail"
            v-model="email"
            @validate="validateEmail()"
            />
            <ValidationList :elements="emailValidations"/>
            <div style="flex:1; min-height: 16px;"/>
            <InputField
            input-type="password"
            :validation-status="passwordHasError ? 1 : 0"
            label="Passwort"
            v-model="password"
            @validate="validatePassword()"
            />
            <ValidationList :elements="passwordValidations"/>
            <div style="flex:1; min-height: 16px;"/>
            <InputField
            input-type="password"
            id="password_confirm"
            :validation-status="passwordConfirmationHasError ? 1 : 0"
            label="Passwort bestätigen"
            v-model="passwordConfirmation"
            @validate="validatePasswordConfirmation()"
            />
            <ValidationList :elements="passwordConfirmationValidations"/>
        </div>
        <div style="width: 16px;"/>
        <div class="application-active-half">
            <InputFieldMultiline
            input-type="text"
            label="Warum bewirbst du dich?"/>
            <div style="flex: 1; min-height: 16px;"/>
            <div class="horizontal-group">
                <h5>Ich bewerbe mich als:</h5>
                <RadioButton
                bound="left"
                label="Tester"
                :group-i-d="0"
                :selected="accountTypeRadioGroup[0]"
                @selected="(val:number) => changeRadioGroupState(val)"></RadioButton>
                <RadioButton
                bound="right"
                label="Admin"
                :group-i-d="1"
                :selected="accountTypeRadioGroup[1]"
                @selected="(val:number) => changeRadioGroupState(val)"></RadioButton>
            </div>
            <div style="flex: 1; min-height: 16px;"/>
            <AGB/>
            <div style="flex: 1; min-height: 16px;"/>
            <div class="horizontal-group">
                <input type="checkbox" id="eula-accept">
                <label for="eula-accept">Ich habe die AGBs gelesen und bin damit einverstanden.</label>
                <div style="flex: 1; min-width: 16px;"/>
                <button>
                    Bewerben
                </button>
            </div>
        </div>
    </div>
</div>
</template>



<style scoped>

    button{
        padding: 8px 32px;
        border-radius: 5px;
        border: 0;
        font-family: Roboto;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        color: rgb(var(--text-shade-0));
        background-color: rgb(var(--accents-shade-0));
        transition: 300ms;
    }

    button:hover{
        background-color: rgb(var(--accents-shade-2));
        cursor: pointer;
    }

    label{
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
        color: rgb(var(--text-shade-0));
        margin-left: 8px;
    }

    input[type="checkbox"]{
        margin-top: -4px;
        vertical-align: middle;
        margin-left: 16px;
    }

    h5{
        font-family: Roboto;
        font-weight: 500;
        font-size: 14px;
        color: rgb(var(--text-shade-0));
        margin-right: 16px;
        margin-left: 16px;
    }

    .horizontal-group{
        display: flex;
        align-items: center;
    }

    .application-active-half{
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .application-active-container{
        padding: 16px;
        align-items: stretch;
        display: flex;
        margin-top: 8vh;
        width: 80vw;
        background-color: rgba(var(--bg-shade-0), 0.3);
        backdrop-filter: blur(50px);
        border-radius: 5px;
        border: 1px solid rgba(var(--outline-shade-0), 0.1);
        box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    }

    .application-container{
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