<template>
    <q-page class="absolute-center">

      <div>
        <h3 id="text">ESCOLHA A FORMA DE PAGAMENTO </h3>
      </div>

      <div class="row fixed-center" id="tamanho">
        <div class="col-1" >
            <q-btn to="/dinheiro" class="col" id="button3" >
                <img id="img" src="../assets/icons8-dinheiro-90.png"/>
            </q-btn>
            
        </div>

       <div class="col-6" id="espaco"></div>

        <div class="col-1">
            <q-btn to="/debito" class="col" id="button3" >
                <img id="img" src="../assets/icons8-cartão-100.png"/>
            </q-btn>
        </div>
      </div>

      <div class="fixed-bottom">
        <q-btn id="voltar" to="/cotas">Voltar</q-btn>
        <q-btn id="sair" to="/">Sair</q-btn>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
   
  export default defineComponent({
    name: 'FormaPagamento',
   
  })
  </script>
  
<style>

img{
  width:  90%;
  height: 90%;
  
}
#text2{
  width:10vw ;
  background-color: aqua;
  color: white;
  padding-left: 10vw;
  padding-right: 10vw;
  text-align: center;
 
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
#espaco{
  width:  40wh;
  height: 20hw;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: block; 
}
#button3{
  width:  20vw;
  height: 35vh;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
  font-size: 20px;
  display: block;
}
#tamanho{
    width: auto;
}
</style>