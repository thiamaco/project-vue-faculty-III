<template>
  <div>
    <input type="text" v-model="novoItem" placeholder="Adicionar item">
    <button @click="adicionarItem">Adicionar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novoItem: ''
    };
  },
  methods: {
    adicionarItem() {
      if (this.novoItem.trim() !== '') {
        this.$emit('adicionar', this.novoItem);
        this.novoItem = '';
      }
    }
  }
};
</script>
