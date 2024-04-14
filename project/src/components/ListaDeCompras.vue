<template>
  <div>
    <ul>
      <li v-for="(item, index) in lista" :key="index" :class="{ 'comprado': item.comprado }">
        {{ index + 1 }} - {{ item.nome }}
        <button @click="removerItem(index)">Remover</button>
        <button @click="marcarComprado(index)">Comprado</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['lista'],
  methods: {
    removerItem(index) {
      this.$emit('remover', index);
    },
    marcarComprado(index) {
      this.$emit('marcarComprado', index);
    }
  }
};
</script>

<style scoped>
.comprado {
  text-decoration: line-through;
}
</style>
