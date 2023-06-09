<template>
    <q-page class="fixed-center">

      <div v-if="produto == 'top'">
        <img id="fluxologo"  src="../assets/logo_top_preto.png"/>
      <h3 id="textCenter">CARTÃO TOP SELECIONADO</h3>
      </div>
    
      <div v-if="produto == 'bilhete'">
        <img id="fluxologo"  src="../assets/Bilhete_Unico-logo.png"/>
      <h3 id="textCenter">BILHETE UNICO SELECIONADO</h3>
      </div>

      <div v-if="produto == 'qrcode'">
        <img id="fluxologo"  src="../assets/qr-code.png"/>
      <h3 id="textCenter">QR-CODE SELECIONADO</h3>
      </div>

      <div class="fixed-center" v-if="produto == 'qrcode'">
      <img src="../assets/qr-code.png"/>
      </div>

      <div class="fixed-center" v-else>
      <img src="../assets/icons8-inserir-cartão-100.png"/>
      </div>

      <div v-if="produto == 'top'" class="fixed-bottom flex-center">
      <h3 id="text"> INSIRA O SEU CARTÃO TOP</h3>
      </div>
    
      <div v-if="produto == 'bilhete'" class="fixed-bottom flex-center">
      <h3 id="text">INSIRA O SEU BILHETE UNICO</h3>
      </div>

      <div v-if="produto == 'qrcode'" class="fixed-bottom flex-center">
      <h3 id="textq">OBS: APENAS ACEITAMOS CARTÃO DE DEBITO NO QRCODE</h3>
      </div>

      <div v-if="produto == 'qrcode'">
        <q-btn to="/servicos" >avancar</q-btn>
      </div>

      <div v-else>
      <q-btn to="/consulta" >avancar</q-btn>
      </div>

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

#fluxologo{
  width: 5%;
  height: 5%;
  margin-left: 1%;
  float: left;
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
#textCenter{
  text-align: center;
  font-size: 40px;
  font-style: bold;
  margin-right: 7%; 
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