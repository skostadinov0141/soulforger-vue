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
        {name:'Profil', route:'/account', selected:false, id:id++},
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
    <div class="nav-bar"
    :class="{'nav-bar-mobile-menu-open' : navOpen && mobile}">
      <img src="./assets/images/mobile_menu_button.png" 
      alt="open mobile nav" 
      class="logo-image mobile-nav-menu-image" 
      v-if="mobile && !navOpen"
      @click="navOpen = !navOpen">
      <img src="./assets/images/mobile_menu_close_button.png" 
      alt="open mobile nav" 
      class="logo-image mobile-nav-menu-image" 
      v-else-if="mobile && navOpen"
      @click="navOpen = !navOpen">
      <img src="./assets/images/soulforger_logo_100p.png" alt="soulforger logo" class="logo-image">
      <ul class="nav-buttons-list-desktop" v-show="!mobile">
        <li 
        v-for="e in routes"
        class="nav-button-element-desktop">
          <router-link :to="e.route" class="nav-button-link-dekstop" :class="{'nav-button-link-dekstop-selected' : e.selected}">
            {{e.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <Transition name="nav-menu-mobile">
      <div 
      class="nav-menu-mobile"
      v-show="navOpen && mobile"
      :class="{'open':navOpen}">
        <Transition name="nav-buttons-list-mobile">
          <ul class="nav-buttons-list-mobile"
          :class="{'nav-buttons-list-mobile-open' : navOpen}"
          v-show="navOpen && mobile">
            <li 
            v-for="e in routes"
            class="nav-button-element-mobile">
              <router-link :to="e.route" class="nav-button-link-mobile"
              :class="{'nav-button-link-mobile-selected' : e.selected}">
                {{e.name}}
              </router-link>
            </li>
          </ul>
        </Transition>
      </div>
    </Transition>
  </header>
  <main>
    <router-view>
      
    </router-view>
  </main>
  <footer>
    
  </footer>
</template>

<style scoped>
/* MOBILE STYLES */

.nav-bar-mobile-menu-open{
  background-color: #0A141F;
}

.nav-menu-mobile{
  width: 100vw;
  height: 92vh;
  background-color: rgba(0,0,0,0.2);
  -webkit-backdrop-filter: blur(50px);
          backdrop-filter: blur(50px);
}

.nav-menu-mobile-leave-active,
.nav-menu-mobile-enter-active{
  -webkit-transition: all 150ms ease;
  -o-transition: all 150ms ease;
  transition: all 150ms ease;
}

.nav-menu-mobile-leave-from,
.nav-menu-mobile-enter-to{
  width: 100vw;
  height: 92vh;
  background-color: rgba(0,0,0,0.2);
  -webkit-backdrop-filter: blur(50px);
          backdrop-filter: blur(50px);
}

.nav-menu-mobile-leave-to,
.nav-menu-mobile-enter-from{
  width: 100vw;
  height: 92vh;
  background-color: rgba(0,0,0,0);
  -webkit-backdrop-filter: blur(0px);
          backdrop-filter: blur(0px);
}

.nav-buttons-list-mobile{
  width: 45%;
  height: 100%;
  background-color: #0F1E2E;
  left: 0;
}

.nav-buttons-list-mobile-enter-to,
.nav-buttons-list-mobile-leave-from{
  width: 45%;
  height: 100%;
  background-color: #0F1E2E;
  left: 0;
}

.nav-buttons-list-mobile-enter-from,
.nav-buttons-list-mobile-leave-to{
  width: 45%;
  height: 100%;
  background-color: #0F1E2E;
  left: -100vw;
}

.nav-buttons-list-mobile-enter-active{
  -webkit-transition: all 150ms ease;
  -o-transition: all 150ms ease;
  transition: all 150ms ease;
  -webkit-transition-delay: 150ms;
       -o-transition-delay: 150ms;
          transition-delay: 150ms;
}
.nav-buttons-list-mobile-leave-active{
  -webkit-transition: all 150ms ease;
  -o-transition: all 150ms ease;
  transition: all 150ms ease;
  -webkit-transition-delay: 0ms;
       -o-transition-delay: 0ms;
          transition-delay: 0ms;
}

.nav-button-element-mobile{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.nav-button-link-mobile{
  padding: 0 2vw 0 2vw;
  font-family: Roboto;
  text-decoration: none;
  text-transform: uppercase;
  color: #CACECA;
  font-weight: 500;
  font-size: 14px;
  -webkit-transition: 300ms ease;
  -o-transition: 300ms ease;
  transition: 300ms ease;
  line-height: 8vh;
}

.nav-button-link-mobile-selected{
  border-right: solid 4px #8D54A0;
  -webkit-transition: 300ms ease;
  -o-transition: 300ms ease;
  transition: 300ms ease;
}

/* DESKTOP STYLES */
.navigation-container{
  z-index: 1000;
  position: fixed;
  min-width: 100vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.nav-bar{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: rgba(15, 30, 46, 1);
  -webkit-box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.268);
          box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.268);
  height: 8vh;
  -webkit-transition: 150ms ease;
  -o-transition: 150ms ease;
  transition: 150ms ease;
}

.logo-image{
  width: 8vh;
  height: 8vh;
  padding: 8px;
}

.mobile-nav-menu-image{
  padding: 13px 8px 8px 8px;
}

.nav-buttons-list-desktop{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  margin-left: auto;
}

.nav-button-element-desktop{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
      -ms-flex-align: stretch;
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
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(0,0,0,0)), color-stop(50%, rgba(255, 255, 255, 0.05)));
  background-image: -o-linear-gradient(top, rgba(0,0,0,0) 50%, rgba(255, 255, 255, 0.05) 50%);
  background-image: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(255, 255, 255, 0.05) 50%);
  background-size: 100% 200%;
  -webkit-transition: 300ms ease;
  -o-transition: 300ms ease;
  transition: 300ms ease;
  line-height: 8vh;
}

.nav-button-link-dekstop:hover{
  background-position: 0 -100%;
}

.nav-button-link-dekstop-selected{
  border-top: solid 4px #8D54A0;
}

</style>
