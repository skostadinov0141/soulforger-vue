<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

let id:number

export default defineComponent({
  data(){
    return {
      routes:[
        {name:'Start', route:'/', selected:false, id:id++},
        {name:'Impressum', route:'/impressum', selected:false, id:id++},
      ]
    }
  },
  watch:{
    $route(){
      for (let index = 0; index < this.routes.length; index++) {
        const element = this.routes[index];
        if(element.name === this.$route.name){
          this.routes[index].selected = true
        }else{
          this.routes[index].selected = false
        }
      }
      console.log(this.routes)
    }
  }
})

</script>

<template>
  <header>
    <nav class="nav-buttons-container">
      <img src="./assets/images/soulforger_logo_100p.png" alt="logo">
      <ul>
        <li v-for="e in routes">
          <router-link :to="e.route"
          :key="e.id"
          class="nav-button"
          :class="{ 'nav-button-selected' : e.selected === true }">
            {{e.name}}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <body>
    <router-view>

    </router-view>
  </body>
</template>

<style scoped>

  body{
    min-width: 100vw;
    min-height: 100vh;
  }

  .nav-buttons-container{
    z-index: 999;
    position: fixed;
    display: flex;
    min-width: 100vw;
    height: 8vh;
  }
  .nav-buttons-container img{
    padding: 10px;
  }
  
  .nav-buttons-container ul{
    margin-left: auto;
    list-style: none;
    display: flex;
    align-items: stretch;
  }

  li{
    display: flex;
    align-items: stretch;
    /* border-top: solid 4px;
    border-color: #0000; */
  }

  .nav-button{
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    color: #CACECA;
    font-family: Roboto;
    padding: 0 2vw;
    background-image: linear-gradient(
      180deg, 
      rgba(0,0,0,0) 50%, 
      rgba(255,255,255,0.05) 50%
    );
    background-size: 100% 200%;
    transition: 300ms;
    line-height: 8vh;
  }

  .nav-button-selected{
    border-top: solid 4px;
    border-color: #8D54A0;
  }

  .nav-button:hover{
    background-position: 0 -100%;
    color: #DFE2DF;
  }

</style>
