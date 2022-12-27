<script setup lang="ts">
import axios from 'axios';
import { inject, onMounted, ref, watch, type Ref } from 'vue';

    interface Props {
        modelValue?: string,
        placeholder?: string,
        inputType: string,
        label?: string,
        autocomplete?: string,
        spellcheck?: boolean,
        error?: boolean
    }

    const props = withDefaults(defineProps<Props>(), {
        error: false,
        placeholder: 'Hier schreiben...',
        label: 'Label',
        autocomplete: 'off',
        spellcheck: false,
    });

    const emit = defineEmits<{
        (e:'update:modelValue', input:string):void,
    }>();

    onMounted(() => {
        
    });

</script>


<template>
    <div class="input-container">
        <label :for="props.inputType" class="input-label">{{ props.label }}</label>
        <input 
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :id="props.inputType"
        :name="props.inputType" 
        :autocomplete="props.autocomplete"
        :type="props.inputType" 
        class="login-input"
        :class="error ? 'error' : ''"
        :spellcheck="props.spellcheck" 
        :placeholder="props.placeholder"
        @blur="">
    </div>
</template>


<style scoped>

    .input-label{
        margin-right: auto;
        padding: 2px 16px;
        font-family: Roboto;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        color: #CACECA;
        background-color: rgb(var(--bg-shade-2));
        border-radius: 5px 5px 0px 0px;
        border-top: solid 1px rgba(var(--outline-shade-0), 0.1);
        border-left: solid 1px rgba(var(--outline-shade-0), 0.1);
        border-right: solid 1px rgba(var(--outline-shade-0), 0.1);
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
        background-color: rgb(var(--bg-shade-1));
        border-radius: 0px 5px 5px 5px;
        -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        -webkit-transition: 250ms;
        -o-transition: 250ms;
        transition: 250ms;
        border: solid 1px rgba(var(--outline-shade-0), 0.1);
        
        -webkit-box-sizing: border-box;
        
                box-sizing: border-box;
    }

    input:-webkit-autofill{
        border: 0;
        outline: none;
        padding: 10px 16px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        color: #CACECA;
        background-color: rgb(var(--bg-shade-1));
        border-radius: 0px 5px 5px 5px;
        -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        -webkit-transition: 250ms;
        -o-transition: 250ms;
        transition: 250ms;
        border: solid 1px rgba(var(--outline-shade-0), 0.1);
        
        -webkit-box-sizing: border-box;
        
                box-sizing: border-box;
    }

    input:autofill{
        border: 0;
        outline: none;
        padding: 10px 16px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        color: #CACECA;
        background-color: rgb(var(--bg-shade-1));
        border-radius: 0px 5px 5px 5px;
        -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        -webkit-transition: 250ms;
        -o-transition: 250ms;
        transition: 250ms;
        border: solid 1px rgba(var(--outline-shade-0), 0.1);
        
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
        border: solid 1px rgba(var(--outline-shade-0), 0.3);
        background-color: #0F1E2E;
    }

</style>