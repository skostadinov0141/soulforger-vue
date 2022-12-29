<script setup lang="ts">

interface Props{
    bound:string,
    label:string,
    selected:boolean,
    groupID:number
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e:'selected', id:number):void
}>();

function getBoundClass(){
    switch (props.bound) {
        case 'left':
            return 'left-bound'
            break;
        
        case 'middle':
            return 'middle-bound'
            break;

        case 'right':
            return 'right-bound'
            break;

        default:
            return 'left-bound'
            break;
    }
}

function getFinalClass(){
    if(props.selected){
        return `${getBoundClass()} button-selected`;
    }
    return `${getBoundClass()}`;
}

</script>



<template>
<div class="radio-button-container">
    <button
    :class="getFinalClass()"
    @click="emit('selected', props.groupID)">
        {{props.label}}
    </button>
</div>
</template>



<style scoped>

    button{
        padding: 4px 24px;
        background-color: transparent;
        color: rgb(var(--text-shade-0));
        font-family: Roboto;
        font-size: 14px;
        font-weight: 600;
        border: 2px solid rgb(var(--accents-shade-0));
        transition: 300ms;
        text-transform: uppercase;
    }

    button:hover{
        background-color: rgba(var(--accents-shade-2), 1);
        cursor: pointer;
    }

    .left-bound{
        border-radius: 5px 0px 0px 5px;
        border-top: 2px solid rgb(var(--accents-shade-0));
        border-bottom: 2px solid rgb(var(--accents-shade-0));
        border-left: 2px solid rgb(var(--accents-shade-0));
        border-right: 0px solid rgb(var(--accents-shade-0));
    }

    .right-bound{
        border-radius: 0px 5px 5px 0px;
        border-top: 2px solid rgb(var(--accents-shade-0));
        border-bottom: 2px solid rgb(var(--accents-shade-0));
        border-left: 2px solid rgb(var(--accents-shade-0));
        border-right: 2px solid rgb(var(--accents-shade-0));
    }
    
    .middle-bound{
        border-radius: 0px 0px 0px 0px;
        border-top: 2px solid rgb(var(--accents-shade-0));
        border-bottom: 2px solid rgb(var(--accents-shade-0));
        border-left: 2px solid rgb(var(--accents-shade-0));
        border-right: 0px solid rgb(var(--accents-shade-0));
    }

    .button-selected{
        background-color: rgb(var(--accents-shade-0));
    }

</style>