<template>
    <q-page class="absolute-center">

      <div>
        <h3 v-if="produto == 'bilhete' || 'top'" id="text">SELECIONE A OPÇÃO DESEJADA </h3>
      </div>

      <div class="row flex-center" id="tamanho" v-if="produto == 'bilhete'">
    
       <q-btn to="/cotas" id="button1" >Comun</q-btn>

       <q-btn to="/cotas" id="button1" >Estudante</q-btn>

       <q-btn to="/cotas" id="button1">Vale Transporte</q-btn>

       <q-btn to="/cotas" id="button1">Compra Web</q-btn>

       <q-btn to="/cotas" id="button1">Temporal</q-btn>

      </div>

      <div class="row flex-center" id="tamanho" v-if="produto === 'top'" >
    

       <q-btn to="/cotas" id="button1" >V.T</q-btn>

       <q-btn to="/cotas" id="button1">Comun</q-btn>

       <q-btn to="/cotas" id="button1">Estudante</q-btn>

      </div>

      <div class="row flex-center" id="tamanho" v-if="produto === 'qrcode'" >
    

       <q-btn to="/pagamento" id="button1" >1 Unitario</q-btn>

       <q-btn to="/pagamento" id="button1">2 Unitarios</q-btn>

      </div>

      <div class="fixed-bottom">
        <q-btn id="voltar" to="/insira">Voltar</q-btn>
        <q-btn id="sair" to="/">Sair</q-btn>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { AppStore } from 'src/stores/AppStore';
   
  export default defineComponent({
    name: 'SelecionarServicos',
    data(){
      return{
        produto: ""
      }
    },
    created (){
      this.produto = AppStore.produto
    },  
  })
  </script>
  
 <style>
#button1{
  margin-top: 4%;
  width:  200px;
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
#tamanho{
  width: 100%;

}

</style>