<template>
  <q-layout view="hHh lpr fFf">

    <q-header id="topbottom" >
      
      <div>
        <img id="data" src="..\assets\Data-hora.jpeg"/>

        <div id="textheader1">
        <p id="specialtext">DATA:</p>
        <p id="specialtext">HORA:</p>
        </div>

        <div id="textheader">
          <p id="specialtext">SÃO PAULO</p>
        <p id="specialtext">1234567-89</p>
        </div>

        

      </div>  
    </q-header>
      
    <q-page-container>
      
      <div class="row justify-center">
       <div class="row fixed-left col" id="sides"></div>
       <div class="row  fixed-right col" id="sides"></div>
     </div>
     
      <router-view />
    </q-page-container>

    <q-footer id="topbottom"> 

      <div id="footersac">
        <p id="specialtext"><img id="sac" src="../assets/icons8-suporte-64.png"></p>
        <p id="specialtext">(99)9999-999</p>
        </div>

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
  },
}
</script>

<style>
#footersac{
  float: left;
  color: black;
  font-weight : bold;
  margin-left: 2%;
}
#specialtext{
  margin-bottom: auto;
}
#textheader1{
  float: left;
  color: black;
  font-weight : bold;
}
#textheader{
  float: right;
  color: black;
  font-weight : bold;
}
#textfooter{
  float: left;
  color: black;
}
#sides{
  background-color: #0ABBB5;
  margin-top:3%;
  height: 86%;
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
  margin-left: 2%
  
}
#data{
  height: 40px;
  width: 50px;
  float: left;
  margin-top: 4px;
  margin-left: 2%
;
}


</style>



