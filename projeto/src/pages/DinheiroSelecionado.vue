<template>
    <q-page class="fixed-center">
      
      <div id="vamola">
        <img id="fluxologo1" v-if="produto == 'bilhete'" src="../assets/Bilhete_Unico-logo.png"/>
        <img id="fluxologo1" v-if="produto == 'top'" src="../assets/logo_top_preto.png"/>
        <h3 id="textCenter6">DINHEIRO SELECIONADO</h3><br>
      </div><br>

        <div >
        <h3 id="text4">INSIRA AS CEDULAS</h3>
         <div class="fixed-center">
         <img src="../assets/icons8-warning-96.png"/>
         </div>
        
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
 #textCenter6{
  font-size: 40px;
  font-style: bold; 
  position: absolute;
  margin-left: 33%;
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

  #text4{
  text-align: center;
  font-size: 40px;
  font-style: bold; 
  }
  </style>