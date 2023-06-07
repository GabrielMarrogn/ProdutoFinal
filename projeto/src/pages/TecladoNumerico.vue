<template class>
    <q-page class="absolute-center">

      <div>
        <h3 id="text">DIGITE UM VALOR </h3>
      </div>

      <div class="flex-center">
        <div class="row flex-center">
            <q-btn id="buttont" >1</q-btn>
            <q-btn id="buttont" >2</q-btn>
            <q-btn id="buttont" >3</q-btn>
        </div>

        <div class="row flex-center">
            <q-btn id="buttont" >4</q-btn>
            <q-btn id="buttont" >5</q-btn>
            <q-btn id="buttont" >6</q-btn>
        </div>

        <div class="row  flex-center">
            <q-btn id="buttont" >7</q-btn>
            <q-btn id="buttont" >8</q-btn>
            <q-btn id="buttont" >9</q-btn>
        </div>
    
        <div class="row  flex-center">
            <q-btn id="buttont" >0</q-btn>
        </div>

        <div class="row  flex-center">
            <q-btn id="buttonc" to="pagamento" >confirmar</q-btn>
            <q-btn id="buttona" >apagar</q-btn>
            <q-btn id="buttonca" >cancelar</q-btn>
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
   
  export default defineComponent({
    name: 'TecladoNumerico',
   
  })
  </script>
  
 <style>
 #buttonc{
  width:  7vw;
  height: 1vh;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: rgb(1, 95, 1);
  color: white;
  text-align: center;
  font-size: 16px;
}
#buttona{
  width:  7vw;
  height: 1vh;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: rgb(182, 182, 3);
  color: white;
  text-align: center;
  font-size: 16px;
}
#buttonca{
  width:  7vw;
  height: 1vh;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: rgb(156, 0, 0);
  color: white;
  text-align: center;
  font-size: 16px;
}
#buttont{
  width:  6vw;
  height: 1vh;
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