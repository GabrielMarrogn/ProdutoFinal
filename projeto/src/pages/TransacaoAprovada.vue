<template>
    <q-page class="absolute-center">
        <div>
        <h3 id="text">TRANSAÇÃO APROVADA</h3>
        </div>
        <div>
        <h3 id="text">IMPRIMINDO COMPROVANTE</h3>
        </div>

        <div class="fixed-center">
         <img src="../assets/icons8-selecionado-100.png"/>
        </div>

        <q-btn to="/final" class="fixed-bottom">avancar</q-btn>

    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    name: 'TransacaoAprovada'
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