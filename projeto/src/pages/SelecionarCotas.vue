<template class>
    <q-page class="absolute-center">

      <div>
        <h3 id="text">SELECIONE A OPÇÃO DESEJADA </h3>
      </div>

      <div class="row fixed-center">
        <div class="col-1" >
            <q-btn to="/pagamento" id="button2" >R$5,00</q-btn>
            <q-btn to="/pagamento" id="button2" >R$10,00</q-btn>
            <q-btn to="/pagamento" id="button2" >R$20,00</q-btn>
        </div>

       <div class="col-2" id="espaco"></div>

        <div class="col-1">
            <q-btn to="/pagamento" id="button2" >R$50,00</q-btn>
            <q-btn to="/pagamento" id="button2" >R$100,00</q-btn>
            <q-btn to="/page2" id="button2" >Outro Valor</q-btn>
        </div>
      </div>

      <div class="fixed-bottom">
        <q-btn id="voltar" to="/servicos">Voltar</q-btn>
        <q-btn id="sair" to="/">Sair</q-btn>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
   
  export default defineComponent({
    name: 'SelecionarCotas',
   
  })
  </script>
  
 <style>
#button2{
  width:  20vw;
  height: 15vh;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #0ABBB5;
  color: white;
  text-align: center;
  font-size: 20px;
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
#text{
  text-align: center;
  font-size: 40px;
  font-style: bold; 
}
#espaco{
    width:  300px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: block; 
}
.q-page{
  width: 96%;
}
</style>