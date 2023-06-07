import { defineStore } from 'pinia';

export const useStore = defineStore('AppStore', {
  state: () => ({
    produto: "",
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
    }
    },
  },
);

const AppStore = useStore();
export { AppStore };