<template>
  <q-layout view="hHh lpr fFf">

    <q-header id="topbottom">
      
     <div class="row justify-center">
       <div class="row fixed-left col" id="sides"></div>
       <div class="row  fixed-right col" id="sides"></div>
     </div>
    
    </q-header>
      
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer id="topbottom"> 
       
         <img id="sac" src="../assets/icons8-suporte-64.png"/>
         <img  id="toplogo" class="absolute-center" src="../assets/logo_top_preto.png"/>
    
      
     </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    

    return {
      
    }
  }
}
</script>

<style>
#sides{
  background-color: #0ABBB5;
  height: 100%;
  width: 2%;
}
#topbottom{
  background-color: #0ABBB5;
  height: 8%;
  max-height: 8%;

}
#toplogo{
  height: 50px;
  width: 70px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#sac{
  height: 30px;
  width: 50px;
  float: left;
}

</style>



