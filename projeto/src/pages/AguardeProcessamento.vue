<template>
    <q-page class="absolute-center">
        <div>
        <h3 id="text">AGUARDE O PROCESSAMENTO</h3>
        </div>

        <div class="fixed-center">
         <img src="../assets/icons8-quadro-giratório-5-90.png"/>
        </div>

        <q-btn to="/aprovado">avancar</q-btn>

    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    name: 'AguardeProcessamento'
  })
  </script>
  
  <style>
   .img{
    height: 40%;
    width: 50%;
   }
   .q-page{
  width: 96%;
  }
  #text{
  text-align: center;
  font-size: 40px;
  font-style: bold; 
  }
  </style>