<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import type { Ref } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import NavButton from './nav_button.vue';

interface Route{
  title:string,
  route:string,
  selected:boolean,
  id:number,
  routeNames:Array<string>,
  dropdown?:Array<Route>,
  hovered?:boolean
}

const router = useRouter();
const route = useRoute();

let routes: Ref<Array<Route>> = ref([
  {
    title:'Start',
    route:'/',
    selected:true,
    id:0,
    routeNames:['Start']
  },
  {
    title:'Über uns',
    route:'/impressum',
    selected:true,
    id:1,
    routeNames:['Impressum'],
  },
]);

watch(route, (newRoute) => {
  updateRouteTable();
})

function updateRouteTable(){
  for (let i = 0; i < routes.value.length; i++) {
    const element = routes.value[i];
    if(element.routeNames.includes(route.name as string)){
      routes.value[i].selected = true;
    }else{
      routes.value[i].selected = false;
    }
  }
}

onMounted(() => {
  updateRouteTable();
});

</script>

<template>

<div class="container">
  <div class="logo">
    <img src="../../assets/images/soulforger_logo_100p.png" alt="logo" class="logo-image">
  </div>
  <div style="flex:1;"></div>
  <div class="navigation">
    <NavButton
    :route="routes[0]"/>
    <NavButton
    :route="routes[1]"
    :sub-routes="[
      {
        title:'Über uns',
        route:'/impressum',
        selected:true,
        id:1,
        routeNames:['Impressum']
      },
      {
        title:'Über uns',
        route:'/impressum',
        selected:true,
        id:1,
        routeNames:['Impressum']
      },
      {
        title:'TEST TEST TEST TEST TEST ',
        route:'/impressum',
        selected:true,
        id:1,
        routeNames:['Impressum']
      },
    ]"/>
  </div>
  <div style="flex:1;"></div>
  <div class="account-controls">

  </div>
</div>

</template>

<style scoped>

.navigation{
  display: flex;

}

.container{
  display: flex;
  height: 6vh;
  width: 100vw;
  background-color: rgba(var(--bg-shade-0), 0.95);
  position: fixed;
  z-index: 999;
  backdrop-filter: blur(20px);
  /* box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.8); */
}

.logo{
  padding: 6px;
  height: 6vh;
  width: 6vh;
}

.logo-image{
  opacity: 0.8;
  width: 100%;
  height: 100%;
}

</style>
