<script setup lang="ts">

interface Route{
  title:string,
  route:string,
  selected:boolean,
  id:number,
  routeNames:Array<string>,
}

interface Props{
    route:Route,
    subRoutes: Array<Route>
}

const props = defineProps<Props>();

</script>



<template>
    <div class="dropdown-container">
        <button class="main-button">

        </button>
        <div class="sub-buttons">

        </div>
    </div>
</template>



<style scoped>
.main-button{
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
</style>