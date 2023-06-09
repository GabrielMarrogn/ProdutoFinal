<template>
    <q-page class="absolute-center">
      
      <div v-if="produto == 'bilhete'">
        <img id="fluxologo"  src="../assets/Bilhete_Unico-logo.png"/>
        <h3 id="textCenter1">DEBITO SELECIONADO </h3>
      </div>
      
      <div v-if="produto == 'top'">
        <img id="fluxologo"  src="../assets/logo_top_preto.png"/>
        <h3 id="textCenter1">DEBITO SELECIONADO  </h3>
      </div>

      <div v-if="produto == 'qrcode'" id="text">
        <img id="fluxologo"  src="../assets/qr-code.png"/> 
        <h3 id="textCenter1">DEBITO SELECIONADO  </h3>
      </div>

        <div>
            <h4 id="text">INSIRA O CARTÃO DE DEBITO</h4>
        </div>

        <div class="fixed-center">
         <img src="../assets/icons8-cartão-100.png"/>
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
  import { AppStore } from 'src/stores/AppStore';
  
  
  export default defineComponent({
    name: 'CartaoSelecionado',
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
   #textCenter1{
  text-align: center;
  font-size: 40px;
  font-style: bold;
  margin-right: 10%; 
}
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