<template>
    <q-page class="absolute-center">
        <div>
        <h3 id="text">DINHEIRO SELECIONADO</h3>
        </div>
        <div>
            <h4 id="text">INSIRA AS CEDULAS</h4>
        </div>

        <div class="fixed-center">
         <img src="../assets/icons8-warning-96.png"/>
        </div>
        <div>
            <h4 class="fixed-bottom" id="text">OBS: NOSSAS MAQUINAS NÃO DEVOLVEM TROCO</h4>
        </div>

        <q-btn to="/processamento">avancar</q-btn>

        <div class="fixed-bottom">
        <q-btn id="voltar" to="/pagamento">Voltar</q-btn>
        <q-btn id="sair" to="/">Sair</q-btn>
        </div>

    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    name: 'DinheiroSelecionado'
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