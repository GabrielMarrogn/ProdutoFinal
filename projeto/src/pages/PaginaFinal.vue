<template>
    <q-page class="absolute-center">
      <h3 id="text">OPERAÇÃO FINALIZADA</h3>
            <h4 id="text">VAI MAIS LONGE, VAI COM TOP</h4>
      <div id="sizetext" class="absolute-center">
            <h6 id="textp">BAIXE NOSSO APP E FAÇA
                RECARGAS DE QUALQUER
                LUGAR, MAIS RAPIDO, PRATICO E 
                SEM FILAS
           </h6>
      </div>

        <div class="fixed-bottom-right">
          <img id="imagemtop" src="../assets/top-app.jpg"/>
        </div>
        <div class="fixed-bottom-left">
          <img id="imagemcode" src="../assets/top-qrcode.jpeg"/>
        </div>


        <div class="fixed-bottom">
    
        <q-btn id="sair" to="/">Sair</q-btn>
        </div>

    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    name: 'PaginaFinal'
  })
  </script>
  
  <style>
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
  font-size: 30px;
  font-style: bold; 
}
#textp{
  text-align: center;
  font-size: 20px;
  font-style: bold;
  text-overflow: clip; 
}
#imagemtop{
  width: 300px;
  height: 300px;
}
#imagemcode{
  margin-bottom: 50px;
  margin-left: 30px;
}
#sizetext{
  width: 400px;
}
  </style>
