import { defineStore } from 'pinia';

export const useStore = defineStore('AppStore', {
  state: () => ({
    produto: "",
    servico: "",
  }),
  actions: {
    setProduto(produto){
        this.produto = produto;
        console.log("salvou")
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
  },
);

const AppStore = useStore();
export { AppStore };