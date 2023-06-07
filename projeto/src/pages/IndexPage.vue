<template class>
  <q-page class="absolute-center">
    <div>
    <h3 id="text">SELECIONE A OPÇÃO DESEJADA</h3>
    </div>

  <div class="row flex-center">
    <div>
    <q-btn  to="/insira"  id="button" @click="top" >
          <img src="../assets/logo_top_preto.png"/>
    </q-btn>

    <q-btn id="nobutton" class="flex" to="/insira" @click="top">
      recarga cartão top</q-btn>

    </div>

    <div>
    <q-btn to="/insira" id="button" @click="qrcode">
          <img src="../assets/qr-code.png"/>
    </q-btn>

    <q-btn id="nobutton" class="flex" to="/insira" @click="qrcode">
      qrcode Unitario</q-btn>

    </div>

    <div>
    <q-btn to="/insira" id="button" @click="bilhete">
      <img src="../assets/Bilhete_Unico-logo.png"/>
    </q-btn>
    
    <q-btn id="nobutton" class="flex" to="/insira" @click="bilhete">
      Recarga bilhete unico</q-btn>

    </div>
  </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { AppStore } from '../stores/AppStore'


export default defineComponent({
  name: 'IndexPage',
  data(){
    return{
    produto: "",
  }
  },  created() {},
  methods: {
    bilhete(){
      this.produto = "bilhete"
      AppStore.setProduto(this.produto)
    },
    top(){
      this.produto = "top"
      AppStore.setProduto(this.produto)
    },
    qrcode(){
      this.produto = "qrcode"
      AppStore.setProduto(this.produto)
    }
    },
})
</script>

<style>
#nobutton{
  width:  20vw;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  text-align: center;
  background-color: #0ABBB5;
  color: white;
}
#button{
  width:  20vw;
  height: 35vh;
  margin-left: 10px;
  margin-right: 10px;
}

#text{
  text-align: center;
  font-size: 40px;
  font-style: bold; 
}

img{
  width:  70%;
  height: 70%;
}
.q-page{
  width: 96%;
}
</style>


