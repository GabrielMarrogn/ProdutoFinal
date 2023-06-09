<template>
    <q-page class="fixed-center">
      
      <div>
        <img v-if="produto == 'qrcode'" id="fluxologo1"  src="../assets/qr-code.png"/>
        <img v-if="produto == 'top'" id="fluxologo1"  src="../assets/logo_top_preto.png"/>
        <img v-if="produto == 'bilhete'" id="fluxologo1"  src="../assets/Bilhete_Unico-logo.png"/>
        <h3 id="textCenter7">DEBITO SELECIONADO </h3><br>
      </div><br>

        <div>
            <h4 id="text5" class="flex-center">INSIRA O CARTÃO DE DEBITO</h4>
        </div>

        <div class="fixed-center">
         <img src="../assets/icons8-cartão-100.png"/>
        </div>
        
        <q-btn to="/processamento" class="">avancar</q-btn>

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
   #textCenter7{
  font-size: 40px;
  font-style: bold; 
  position: absolute;
  margin-left: 35%;
  width: 96%;

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
  #text5{
  font-size: 40px;
  font-style: bold; 
  margin-left: 30%;
  }
  </style>