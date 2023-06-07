<template class>
  <q-page class="absolute-center">
    <div>
    <h3 id="text">SELECIONE A OPÇÃO DESEJADA</h3>
    </div>

  <div class="row absolute-center">
    
    <q-btn  to="/insira" class="col" id="button"  >
          <img src="../assets/logo_top_preto.png"/>
    </q-btn>
   

    <q-btn to="/servicos" class="col" id="button">
          <img src="../assets/qr-code.png"/>
    </q-btn>

    <q-btn to="/insira"  class="col" id="button">
      <img src="../assets/Bilhete_Unico-logo.png"/>
    </q-btn>

  </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
#button{
  width:  600px;
  height: 200px;
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


