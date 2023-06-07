<template>
    <q-page class="fixed-center">

      <h3 id="text">INSIRA O CARTÃO</h3>

      <div class="fixed-center">
      <img src="../assets/icons8-inserir-cartão-100.png"/>
      </div>

      <q-btn to="/consulta" >avancar</q-btn>

      <div class="fixed-bottom">
      <q-btn id="voltar" to="/">Voltar</q-btn>
      <q-btn id="sair" to="/">Sair</q-btn>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    name: 'InsiraCartao'
  })
  </script>
  
  <style>
  
#voltar{
  width: 10vw;
  height: 1vh;
  background-color: gray;
  color: white;
  margin-bottom: 10px;
  margin-left: 5px;
  float: left;
  
}
#sair{
  width: 10vw;
  height: 1vh;
  background-color: gray;
  color: white;
  margin-bottom: 10px;
  margin-right: 5px;
  float: right;
  
}

#text{
  text-align: center;
  font-size: 40px;
  font-style: bold; 
}
.q-page{
  width: 94%;
}
  </style>