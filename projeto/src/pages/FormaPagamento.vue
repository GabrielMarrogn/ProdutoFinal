<template>
    <q-page class="absolute-center">

      <div v-if="produto == 'bilhete'">
        <img id="fluxologo"  src="../assets/Bilhete_Unico-logo.png"/>
        <h3 id="textCenter">ESCOLHA A FORMA E PAGAMENTO </h3>
      </div>
      
      <div v-if="produto == 'top'">
        <img id="fluxologo"  src="../assets/logo_top_preto.png"/>
        <h3 id="textCenter">ESCOLHA A FORMA E PAGAMENTO </h3>
      </div>

      <div v-if="produto == 'qrcode'">
        <img id="fluxologo"  src="../assets/qr-code.png"/> 
        <h3 id="textCenter">ESCOLHA A FORMA E PAGAMENTO </h3>
      </div>

      <div class="row flex-center"  v-if="produto == 'qrcode'">
        <div>
            <q-btn to="/debito" id="button3" >
                <img id="img" class="flex-center" src="../assets/icons8-cartão-100.png"/>
            </q-btn>

            <q-btn to="/detito" id="button4" class="flex" >cartão debito</q-btn>
        </div>
      </div>

      <div class="row flex-center"  v-else>
        <div>
        <q-btn to="/dinheiro" id="button3">
          <img id="img"  class="flex-center" src="../assets/icons8-dinheiro-90.png"/>
        </q-btn>

        <q-btn to="/dinheiro" id="button4" class="flex" >dinheiro</q-btn>

        </div>   

        <div>
        <q-btn to="/debito" id="button3">
          <img id="img" class="flex-center" src="../assets/icons8-cartão-100.png"/>
        </q-btn>

        <q-btn to="/detito" id="button4" class="flex" >cartão debito</q-btn>
      
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
  import { AppStore } from 'src/stores/AppStore';
   
  export default defineComponent({
    name: 'FormaPagamento',
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
img{
  width:  95%;
  height: 95%;
  display: block;
  
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

#button3{
  width: 15vw;
  height: 30vh;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
  font-size: 20px;
  display: block;
}

#button4{
  width: 15vw;
  height: auto;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  color: white;
  background-color: #0ABBB5;
  text-align: center;
  display: block;
}

</style>