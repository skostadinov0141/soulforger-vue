<script setup lang="ts">
import { ref, type Ref } from 'vue';


interface Route{
  title:string,
  route:string,
  selected:boolean,
  id:number,
  routeNames:Array<string>,
}

interface Props{
    route:Route,
    subRoutes?: Array<Route>
}

const props = defineProps<Props>();

let hover : Ref<boolean> = ref(false);

</script>



<template>
    <div class="dropdown-container"
    @mouseenter="hover = true"
    @mouseleave="hover = false">
        <button class="main-button">
            {{props.route.title}}
        </button>
        <div class="sub-buttons">
            <button
            class="sub-button"
            v-if="props.subRoutes !== undefined && hover === true"
            v-for="subRoute in props.subRoutes">
                {{subRoute.title}}
            </button>
        </div>
    </div>
</template>



<style scoped>

.dropdown-container{
    display: flex;
    flex-direction: column;
}

.sub-button{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    padding-right: 16px;
    border: none;
    background-color: rgb(var(--bg-shade-1));
    font-family: Roboto;
    text-transform: uppercase;
    font-weight: 500;
    color: rgb(var(--text-shade-0));
    text-align: center;
}

.sub-buttons{
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 6vh;
}

.main-button{
    background-color: transparent;
    border-top: 3px solid transparent;
    border-left: none;
    border-bottom: none;
    border-right: none;
    padding-bottom: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0px 32px;
    text-transform: uppercase;
    color: rgb(var(--text-shade-0));
    min-height: 6vh;
    transition: 300ms;
}
</style>