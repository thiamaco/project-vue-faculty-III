<template>
  <div id="app">
    <h1>Lista de Compras</h1>
    <AddItem @adicionar="adicionarItem" />
    <ListaDeCompras :lista="lista" @remover="removerItem" @marcarComprado="marcarComprado" />
    
  </div>
</template>

<script>
import AddItem from './components/AddItem.vue';
import ListaDeCompras from './components/ListaDeCompras.vue';


export default {
  components: {
    AddItem,
    ListaDeCompras,
  },
  data() {
    return {
      lista: [],
    };
  },  
  methods: {
    adicionarItem(item) {
      this.lista.push({ nome: item, comprado: false });
    },
    removerItem(index) {
      this.lista.splice(index, 1);
    },
    marcarComprado(index) {
      this.lista[index].comprado = !this.lista[index].comprado;
    }
  }
};
</script>


<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>