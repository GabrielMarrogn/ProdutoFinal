<template>
    <q-page class="absolute-center">

      <div v-if="produto == 'bilhete'">
        <img id="fluxologo"  src="../assets/Bilhete_Unico-logo.png"/>
        <h3 id="textCenter"> DINHEIRO SELECIONADO </h3>
      </div>
      
      <div v-if="produto == 'top'">
        <img id="fluxologo"  src="../assets/logo_top_preto.png"/>
        <h3 id="textCenter"> DINHEIRO SELECIONADO  </h3>
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
  import { AppStore } from 'src/stores/AppStore';
  
  
  export default defineComponent({
    name: 'DinheiroSelecionado',
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
  margin-left: 2%;
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
#textCenter{

  font-size: 40px;
  font-style: bold;
  display: block;
  margin-right: auto;
  margin-left: auto;

}
  #text{
  text-align: center;
  font-size: 40px;
  font-style: bold; 
  }
  </style>