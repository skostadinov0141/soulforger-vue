<script setup lang="ts">

interface ValidationElement{
    content:string,
    valid:boolean
}

interface Props{
    elements: Array<ValidationElement>,
}

const props = defineProps<Props>();

</script>



<template>
<div class="list-container">
    <ul v-for="e in elements">
        <li :class="e.valid ? '' : 'error'">
            {{e.content}}
        </li>
    </ul>
</div>
</template>



<style scoped>

.list-container{
    padding: 8px 16px;
    background-color: rgb(var(--bg-shade-0));
    border-radius: 0px 0px 5px 5px;
    border-left: 1px solid rgba(var(--outline-shade-0),0.1);
    border-right: 1px solid rgba(var(--outline-shade-0),0.1);
    border-bottom: 1px solid rgba(var(--outline-shade-0),0.1);
}

ul{
    list-style-position: outside;
    padding-left: 8px;
}

li{
    font-family: Roboto;
    font-size: 14px;
    font-weight: 300;
    color: rgb(var(--text-shade-1));
}

.error{
    color: rgb(var(--error-text-shade-0));
}

</style>