<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import type { Ref } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';

interface Route{
  title:string,
  route:string,
  selected:boolean,
  id:number,
  routeNames:Array<string>
}

let routes: Ref<Array<Route>> = ref([
  {
    title:'Start',
    route:'/',
    selected:true,
    id:0,
    routeNames:['Start']
  },
  {
    title:'Start',
    route:'/',
    selected:true,
    id:0,
    routeNames:['Start']
  },
]);

</script>

<template>

<div class="container">
  <div class="logo">
    <img src="../assets/images/soulforger_logo_100p.png" alt="logo" class="logo-image">
  </div>
  <div style="flex:1;"></div>
  <div class="navigation">
    <ul>

    </ul>
  </div>
  <div style="flex:1;"></div>
  <div class="account-controls">

  </div>
</div>

</template>

<style scoped>

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
