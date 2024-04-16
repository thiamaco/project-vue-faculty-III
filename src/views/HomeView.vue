<template>
  <div> 
    <Tabela :lista="lista" @novo-user="adicionarNovoUsuario"/>
  </div>
</template>


<script>
import $ from 'jquery';
import Tabela from '@/components/Tabela.vue'

import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    Tabela
  },
  data(){
    return{
      lista :[],
    }
  },
  created() {
    this.atualizalista();
  },
  methods:{
    atualizalista(){
      axios.get('http://localhost:3000/results')
      .then(response => {
        this.lista = response.data;
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
    },
    adicionarNovoUsuario(){
      console.log('home')
      this.atualizalista();
    }
  }
}
</script>

