<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

let id:number

export default defineComponent({
  data(){
    return {
      navOpen:false,
      mobile: true,
      routes:[
        {name:'Start', route:'/', selected:false, id:id++},
        {name:'Impressum', route:'/impressum', selected:false, id:id++},
      ]
    }
  },
  methods:{
    onResize(){
      if(window.innerWidth <= 1024){
        this.mobile = true
      }else{
        this.mobile = false
      }
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
    },
  },
  created(){
    window.addEventListener("resize", this.onResize);
    if(window.innerWidth <= 1024){
        this.mobile = true
      }else{
        this.mobile = false
      }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
})

</script>

<template>
  <header>
    <nav class="nav-buttons-container">
      <div class="mobile-nav"
      :class="{ 'mobile-nav-open' : navOpen && mobile}">
        <ul class="nav-button-mobile-list">
          <img 
          src="./assets/images/mobile_menu_close_button.png" 
          class="mobile-nav-close-buttton"
          v-if="mobile"
          @click="navOpen = false">
          <li v-for="e in routes">
            <router-link :to="e.route"
            :key="e.id"
            class="nav-button-mobile"
            :class="{ 'nav-button-mobile-selected' : e.selected === true }">
              {{e.name}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav-buttons-div">
        <img 
        src="./assets/images/mobile_menu_button.png" 
        class="mobile-nav-buttton"
        v-if="mobile"
        @click="navOpen = true">
        <img src="./assets/images/soulforger_logo_100p.png" alt="logo">
        <ul v-if="!mobile">
          <li v-for="e in routes">
            <router-link :to="e.route"
            :key="e.id"
            class="nav-button"
            :class="{ 'nav-button-selected' : e.selected === true }">
              {{e.name}}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <body>
    <router-view>

    </router-view>
  </body>
</template>

<style scoped>

  .mobile-nav-close-buttton{
    align-self: flex-end;
    height: 8vh;
    width: 8vh;
  }

  .nav-button-mobile{
    width: 100%;
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

  .nav-button-mobile-selected{
    border-right: solid 4px;
    border-color: #8D54A0;
  }

  .nav-button-mobile-list{
    display: flex;
    flex-direction: column;
  }

  .mobile-nav{
    transition: 300ms;
    z-index: 1000;
    position: fixed;
    min-height: 100vh;
    min-width: 50vw;
    background-color: #0F1F2E;
    left: -60vw;
  }

  .mobile-nav-open{
    left: 0;
  }

  .nav-buttons-div{
    position: fixed;
    display: flex;
    min-width: 100vw;
    height: 8vh;
  }

  body{
    min-width: 100vw;
    min-height: 100vh;
  }

  .nav-buttons-container{
    z-index: 999;
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
