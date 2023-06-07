<template>
    <q-page class="fixed-center">

      <div v-if="produto == 'top'">
      <h3 id="text">CARTÃO TOP SELECIONADO</h3>
      </div>
    
      <div v-if="produto == 'bilhete'">
      <h3 id="text">BILHETE UNICO SELECIONADO</h3>
      </div>

      <div v-if="produto == 'qrcode'">
      <h3 id="text">QR-CODE SELECIONADO</h3>
      </div>

      <div class="fixed-center" v-if="produto == 'qrcode'">
      <img src="../assets/qr-code.png"/>
      </div>

      <div class="fixed-center" v-else>
      <img src="../assets/icons8-inserir-cartão-100.png"/>
      </div>

      <div v-if="produto == 'top'" class="fixed-bottom">
      <h3 id="text"> INSIRA O SEU CARTÃO TOP</h3>
      </div>
    
      <div v-if="produto == 'bilhete'" class="fixed-bottom">
      <h3 id="text">INSIRA O SEU BILHETE UNICO</h3>
      </div>

      <div v-if="produto == 'qrcode'" class="fixed-bottom">
      <h3 id="textq">OBS: APENAS ACEITAMOS CARTÃO DE DEBITO NO QRCODE</h3>
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
  import { AppStore } from 'src/stores/AppStore';
  
  
  export default defineComponent({
    name: 'InsiraCartao',
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
#textq{
  text-align: center;
  font-size: 30px;
  font-style: bold; 
}
.q-page{
  width: 94%;
}
  </style>