<template>
<div class="app">
<NavigationBar />
  <router-view/>
</div>
    
</template>


<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  components:{ NavigationBar }


}

</script>


<style>

 body{
        background-color: #fee6e3
    }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}

a{
  text-decoration: none;
}

@media screen {
  
}



</style>
