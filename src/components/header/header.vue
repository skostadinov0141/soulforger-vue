<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import type { Ref } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';

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
    hovered:false,
    dropdown:[
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
        title:'Über uns',
        route:'/impressum',
        selected:true,
        id:1,
        routeNames:['Impressum']
      },
    ]
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
    <ul>
      <li 
      class="nav-button" 
      v-for="e in routes"
      :class="e.selected ? 'nav-button-selected' : ''"
      @click="e.dropdown === undefined ? router.push(e.route) : undefined"
      @mouseenter="e.hovered !== undefined ? e.hovered = true : undefined"
      @mouseleave="e.hovered !== undefined ? e.hovered = false : undefined">
      <p v-if="e.dropdown === undefined">
        {{ e.title }}
      </p>
      <p v-else-if="e.dropdown !== undefined && !e.hovered">
        {{ e.title }}
      </p>
      <ul class="sub-nav-buttons"
      v-else="">
        <li 
        class="sub-nav-button"
        v-for="se in e.dropdown"
        :class="e.selected ? 'nav-button-selected' : ''"
        @click="e.dropdown === undefined ? router.push(e.route) : undefined">
          {{ e.title }}
        </li>
      </ul>
      </li>
    </ul>
  </div>
  <div style="flex:1;"></div>
  <div class="account-controls">

  </div>
</div>

</template>

<style scoped>

.sub-nav-buttons{
  display: flex;
  flex-direction: column;
}

.sub-nav-button{
  height: 50px;
}

ul{
  display: flex;
  height: 100%;
  align-items: center;
}

.nav-button{
  border-top: 3px solid transparent;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0px 32px;
  text-transform: uppercase;
  color: rgb(var(--text-shade-0));
  height: 100%;
  transition: 300ms;
}

li p{
  font-size: 14px;
  font-weight: 600;
}

.nav-button:hover{
  background-color: rgba(var(--bg-shade-1), 1);
  cursor: pointer;
}

.nav-button-selected{
  border-top: 3px solid rgb(var(--accents-shade-0));
  font-weight: 600;
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
