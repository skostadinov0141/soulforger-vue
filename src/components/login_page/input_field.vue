<script setup lang="ts">
import axios from 'axios';
import { inject, onMounted, ref, watch, type Ref } from 'vue';

    interface Props {
        placeholder?: string,
        inputType: string,
        label?: string,
        autocomplete?: string,
        spellcheck?: boolean,
        apiVerification?: boolean,
    }

    interface Error {
        content: string,
        wasFound: boolean,
    }

    const props = withDefaults(defineProps<Props>(), {
        placeholder: 'Hier schreiben...',
        label: 'Label',
        autocomplete: 'off',
        spellcheck: false,
        apiVerification: false
    })

    const emit = defineEmits<{
        (e:'update-input', input:string):void,
    }>()

    let input: Ref<string> = ref('');
    let wasFocused: Ref<boolean> = ref(false);
    let hasError: Ref<boolean> = ref(false);
    let errors: Ref<Array<Error>> = ref([
        {content:'Test', wasFound:false}
    ])
    let apiHost = inject('apiHost');

    function validateField(){
        if(props.inputType === 'username' && input.value !== ''){
            axios
                .get(`${apiHost}/user_auth/check_username_availability/${encodeURIComponent(input.value)}`,
                {
                    headers:{
                        accept: 'application/json'
                    }
                })
                .then((response) => {
                    console.log(response)
                    hasError.value = !response.data.result;
                    errors.value.forEach((element : Error) => {
                        element.wasFound = false;
                    });
                    response.data.details.forEach((element : number) => {
                        errors.value[element].wasFound = true;
                    });
                })
                .catch((error) => {

                })
        }
        else if(props.inputType === 'password' && input.value !== ''){
            axios
                .get(`${apiHost}/user_auth/check_username_availability/${encodeURIComponent(input.value)}`,
                {
                    headers:{
                        accept: 'application/json'
                    }
                })
                .then((response) => {
                    console.log(response)
                    hasError.value = !response.data.result;
                    errors.value.forEach((element : Error) => {
                        element.wasFound = false;
                    });
                    response.data.details.forEach((element : number) => {
                        errors.value[element].wasFound = true;
                    });
                })
                .catch((error) => {

                })
        }
    }

    function setBorder(){
        if(wasFocused.value && hasError.value && input.value !== ''){return 'error';}
        if(wasFocused.value && !hasError.value && input.value !== ''){return 'valid';}
        if(wasFocused.value && input.value === ''){
            errors.value.forEach((element : Error) => {
                element.wasFound = false;
            });
        }
        return '';
    }

    onMounted(() => {
        if(props.inputType === 'username'){
            errors.value = [
                {content:'Benutzername schon vergeben.', wasFound:false},
                {content:'Der Benutzername ist zu kurz. (min. 8)', wasFound:false},
                {content:'Der Benutzername ist zu lang. (max. 20)', wasFound:false},
                {content:'Der Benutzername darf nur a-z, A-Z, 0-9, ".", "_" und "-" beinhalten.', wasFound:false},
            ]
        }
        else if(props.inputType === 'email'){
            errors.value = [
                {content:'E-Mail ist schon vergeben.', wasFound:false},
                {content:'Die E-Mail Addresse ist falsch.', wasFound:false},
            ]
        }
        else{
            errors.value = [
                {content:'Das Passwort muss mind. einen Kleinbuchstaben beinhalten.', wasFound:false},
                {content:'Das Passwort muss mind. einen Großbuchstaben beinhalten.', wasFound:false},
                {content:'Das Passwort muss mind. eine Zahl beinhalten.', wasFound:false},
                {content:'Das Passwort muss mind. ein Sonderzeichen beinhalten.', wasFound:false},
                {content:'Das Passwort muss mind. 10 Zeichen lang sein.', wasFound:false},
            ]
        }
    })

    watch(input, (newInput: string) => {
        emit('update-input', newInput);
    })

</script>


<template>
    <div class="input-container">
        <label :for="props.inputType" class="input-label">{{ props.label }}</label>
        <input 
        :id="props.inputType"
        :name="props.inputType" 
        :autocomplete="props.autocomplete"
        :type="props.inputType" 
        class="login-input"
        :class="apiVerification ? setBorder() : undefined"
        :spellcheck="props.spellcheck" 
        :placeholder="props.placeholder"
        v-model="input"
        @blur="apiVerification ? validateField() : undefined"
        @focus="wasFocused = true">
        <ul class="error-list" v-if="apiVerification">
            <li
            v-for="e in errors"
            :class="e.wasFound ? 'error-list-element-error' : ''">{{e.content}}</li>
        </ul>
    </div>
</template>


<style scoped>

    .error-list-element-error{
        color: #9D5858;
    }

    .error-list{
        padding-top: 8px;
        padding-left: 8px;
        display: flex;
        flex-direction: column;
        color: #CACECA;
        list-style-position: inside;
        font-size: 12px;
    }

    .input-label{
        margin-right: auto;
        padding: 2px 16px;
        font-family: Roboto;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        color: #CACECA;
        background-color: #14293D;
        border-radius: 5px 5px 0px 0px;
        border-top: solid 1px rgba(147, 182, 220, 0.1);
        border-left: solid 1px rgba(147, 182, 220, 0.1);
        border-right: solid 1px rgba(147, 182, 220, 0.1);
    }

    .input-container{
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
        width: 100%;
    }

    .login-input{
        border: 0;
        outline: none;
        padding: 10px 16px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        color: #CACECA;
        background-color: #0F1E2E;
        border-radius: 0px 5px 5px 5px;
        -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        -webkit-transition: 250ms;
        -o-transition: 250ms;
        transition: 250ms;
        border: solid 1px rgba(147, 182, 220, 0.1);
        
        -webkit-box-sizing: border-box;
        
                box-sizing: border-box;
    }

    .error{
        border: solid 1px rgba(255, 0, 0, 0.3);
    }

    .valid{
        border: solid 1px rgba(0, 255, 0, 0.3);
    }

    .login-input:focus{
        -webkit-box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
        border: solid 1px rgba(147, 182, 220, 0.3);
        background-color: #0F1E2E;
    }

</style>