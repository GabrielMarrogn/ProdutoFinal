<template>
    <q-page class="absolute-center">

      <div>
        <h3 id="text">SELECIONE A OPÇÃO DESEJADA </h3>
      </div>

      <div class="row absolute-center" >
    
       <q-btn to="/cotas" class="col" id="button1" >COMUN</q-btn>

       <q-btn to="/page2" class="col" id="button1" >Estudante</q-btn>

       <q-btn to="/page2"  class="col" id="button1">Vale Transporte</q-btn>

       <q-btn to="/page2"  class="col" id="button1">Compra Web</q-btn>

       <q-btn to="/page2"  class="col" id="button1">Temporal</q-btn>

      </div>

      <div class="fixed-bottom">
        <q-btn id="voltar" to="/insira">Voltar</q-btn>
        <q-btn id="sair" to="/">Sair</q-btn>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
   
  export default defineComponent({
    name: 'SelecionarServicos',
   
  })
  </script>
  
 <style>
#button1{
  width:  1000px;
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #0ABBB5;
  color: white;
}
#text{
  text-align: center;
  font-size: 40px;
  font-style: bold; 
}
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

.q-page{
  width: 96%;
}


</style>