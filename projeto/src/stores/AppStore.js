import { defineStore } from 'pinia';

export const useStore = defineStore('AppStore', {
  state: () => ({
    produto: "",
    servico: "",
    cotas: "",
  }),
  actions: {
    setProduto(produto){
        this.produto = produto
        console.log(produto)
    },
    getProduto(produto){
      console.log("mandou")
      console.log(produto)
      return this.produto;
    },
    setServico(servico){
      this.servico = servico;
      console.log(servico)
    }
    },
    setCotas(cotas){
      this.cotas = cotas;
      console.log(cotas)

    }
  },
);

const AppStore = useStore();
export { AppStore };