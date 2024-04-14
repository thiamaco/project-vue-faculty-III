<template>
  <div> 
    <Tabela :lista="lista"/>
  </div>
</template>


<script>
//import $ from 'jquery';
import Tabela from '@/components/Tabela.vue'
//import dataJson from '@/assets/data.json'
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    Tabela,
    //dataJson
  },
  data(){
    return{
      lista : []
    }
  },
  created() {
    axios.get('http://localhost:3000/results')
      .then(response => {
        this.lista = response.data;
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }
  
}
</script>

