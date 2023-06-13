<template>
    <q-page class="fixed-center">

      <div v-if="produto == 'bilhete'" id="vamola">
        <img id="fluxologo1"  src="../assets/Bilhete_Unico-logo.png"/>
        <h3 id="textCenter3">SELECIONE A OPÇÃO DESEJADA </h3>
      </div>
      
      <div v-if="produto == 'top'" id="vamola">
        <img id="fluxologo1"  src="../assets/logo_top_preto.png"/>
        <h3 id="textCenter3">SELECIONE A OPÇÃO DESEJADA </h3>
      </div>

      <div v-if="produto == 'qrcode'" id="vamola">
        <img id="fluxologo1"  src="../assets/qr-code.png"/>
        <h3 id="textCenter3">SELECIONE A OPÇÃO DESEJADA </h3>
      </div>

      <div class="row flex-center" id="tamanho" v-if="produto == 'bilhete'">
    
       <q-btn to="/cotas" id="button1" @click="comun">Comun</q-btn>

       <q-btn to="/cotas" id="button1" @click="estudanteB">Estudante</q-btn>

       <q-btn to="/cotas" id="button1" @click="vtB">Vale Transporte</q-btn>

       <q-btn to="/cotas" id="button1" @click="compraWeb">Compra Web</q-btn>

       <q-btn to="/cotas" id="button1" @click="temporal">Temporal</q-btn>

      </div>

      <div class="row flex-center" id="tamanho" v-if="produto === 'top'" >
    

       <q-btn to="/cotas" id="button1" @click="vt" >V.T</q-btn>

       <q-btn to="/cotas" id="button1" @click="comunTop">Comun</q-btn>

       <q-btn to="/cotas" id="button1" @click="estudanteTop">Estudante</q-btn>

      </div>

      <div class="row flex-center" id="tamanho" v-if="produto === 'qrcode'" >
    

       <q-btn to="/pagamento" id="button1" @click="unitario1" >1 Unitario</q-btn>

       <q-btn to="/pagamento" id="button1" @click="unitario2" >2 Unitarios</q-btn>

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
        produto: "",
        servicos: ""
      }
    },
    created (){
      this.produto = AppStore.produto
      this.servicos = AppStore.servico
    }, 
    methods: {
     //top selecionado 
    vt(){
      this.servicos = "V.T"
      AppStore.setServicos(this.servicos)
    },
    comunTop(){
      this.servicos = "Comun Top"
      AppStore.setServicos(this.servicos)
    },
    estudanteTop(){
      this.servicos = "Estudante Top"
      AppStore.setServicos(this.servicos)
    },

    // bilhete 
    comun(){
      this.servicos = "comun"
      AppStore.setServicos(this.servicos)
    },
    estudanteB(){
      this.servicos = "estudante B"
      AppStore.setServicos(this.servicos)
    },
    vtB(){
      this.servicos = "vale transporte"
      AppStore.setServicos(this.servicos)
    },
    compraWeb(){
      this.servicos = "compraWeb"
      AppStore.setServicos(this.servicos)
    },
    temporal(){
      this.servicos = "temporal"
      AppStore.setServicos(this.servicos)
    },

    //QrCode
    unitario1(){
      this.servicos = "unitario1"
      AppStore.setServicos(this.servicos)
    },
    unitario2(){
      this.servicos = "unitario2"
      AppStore.setServicos(this.servicos)
    },
    },
  })
  </script>
  
 <style>
#textCenter3{
  font-size: 40px;
  font-style: bold; 
  position: absolute;
  margin-left: 27%;
  width: 96%;

}
#fluxologo1{
  width: 5%;
  height: 5%;
  margin-left: 1%;
  float: left;
  position: relative;
 
}
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