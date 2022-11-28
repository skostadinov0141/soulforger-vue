<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

let id:number

export default defineComponent({
  data(){
    return {
      navOpen:true,
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
  <header class="navigation-container">
    <div class="nav-bar">
      <img src="./assets/images/mobile_menu_button.png" alt="open mobile nav" class="logo-image mobile-nav-menu-image" v-if="mobile">
      <img src="./assets/images/soulforger_logo_100p.png" alt="soulforger logo" class="logo-image">
      <ul class="nav-buttons-list-dektop" v-if="!mobile">
        <li 
        v-for="e in routes"
        :key="e.id"
        class="nav-button-element-desktop">
          <router-link :to="e.route" class="nav-button-link-dekstop">
            {{e.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="nav-menu-mobile" v-if="mobile">
      <ul class="nav-buttons-list-mobile">
        <li 
        v-for="e in routes"
        :key="e.id"
        class="nav-button-element-mobile">
          <router-link :to="e.route" class="nav-button-link-mobile">
            {{e.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.navigation-container{
  z-index: 1000;
  position: fixed;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
}

.nav-bar{
  display: flex;
  backdrop-filter: blur(50px);
  height: 8vh;
}

.logo-image{
  width: 8vh;
  height: 8vh;
  padding: 8px;
}

.mobile-nav-menu-image{
  padding: 13px 8px 8px 8px;
}

.nav-buttons-list-dektop{
  display: flex;
  list-style: none;
  margin-left: auto;
}

.nav-button-element-desktop{
  display: flex;
  align-items: stretch;
}

.nav-button-link-dekstop{
  padding: 0 2vw 0 2vw;
  font-family: Roboto;
  text-decoration: none;
  text-transform: uppercase;
  color: #CACECA;
  font-weight: 500;
  font-size: 14px;
  background-image: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(255, 255, 255, 0.05) 50%);
  background-size: 100% 200%;
  transition: 300ms ease;
  line-height: 8vh;
}

.nav-button-link-dekstop:hover{
  background-position: 0 -100%;
}

</style>
