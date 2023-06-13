<template class>
    <q-page class="fixed-center">

      <div>
        <img v-if="produto == 'bilhete'" id="fluxologo1" src="../assets/Bilhete_Unico-logo.png"/>      
        <img v-if="produto == 'top'" id="fluxologo1" src="../assets/logo_top_preto.png"/>
        <h3 id="textCenter4">SELECIONE O VALOR</h3>
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
            <q-btn to="/teclado" id="button2" >Outro Valor</q-btn>
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
  import { AppStore } from 'src/stores/AppStore';
   
  export default defineComponent({
    name: 'SelecionarCotas',
    data(){
      return{
        produto: "",
        cotas: ""
      }
    },
    created (){
      this.produto = AppStore.produto

    },
    methods: {
    cinco(){
      this.cotas = "cinco"
      AppStore.setCotas(this.cotas)
    },
    dez(){
      this.cotas = "dez"
      AppStore.setCotas(this.cotas)
    },
    vinte(){
      this.cotas = "vinte"
      AppStore.setCotas(this.cotas)
    },
    cinquenta(){
      this.cotas = "cinquenta"
      AppStore.setCotas(this.cotas)
    },
    cem(){
      this.cotas = "cem"
      AppStore.setCotas(this.cotas)
    },
    outro(){
      this.cotas = "outra valor"
      AppStore.setCotas(this.cotas)
    },
    }
  })
  </script>
  
 <style>
#textCenter4{
  font-size: 40px;
  font-style: bold; 
  position: absolute;
  margin-left: 35%;
  width: 96%;

}
#fluxologo1{
  width: 5%;
  height: 5%;
  margin-left: 1%;
  float: left;
  position: relative;
 
} 
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