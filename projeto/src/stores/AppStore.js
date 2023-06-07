import { defineStore } from 'pinia';

export const useStore = defineStore('AppStore', {
  state: () => ({
    produto: [],
  }),
  actions: {
    setProduto(prod){
        this.produto = prod;
    },
    getProduto(){
        return this.produto;
    }
    },
  },
);

const AppStore = useStore();
export { AppStore };