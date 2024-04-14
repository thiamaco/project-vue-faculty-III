<template>
  <div class="home"> 
    <Tabela :lista="lista"/>
  </div>
</template>


<script>
import $ from 'jquery';
import Tabela from '@/components/Tabela.vue'
import dataJson from '@/assets/data.json'

export default {
  name: 'HomeView',
  components: {
    Tabela,
    dataJson
  },
  data(){
    return{
      lista : dataJson
    }
  }
}
</script>
