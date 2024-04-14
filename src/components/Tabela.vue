<template>
    <div class="home">
      <FiltroPesquisa @filtro="filtrar"/>
        <table>
            <thead>
          <tr>
            <th class="name">Nome</th>
            <th>Gender</th>
            <th>Age</th>
            <th>City</th>
            <th>State</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th class="phone">Phone</th>
          </tr>
        </thead>
        <tbody >
            <tr v-for="item in listaFiltrada ":key="item.id" >
                <th v-for="(item, index) in item.results" :key="index" >{{item.name.first +" "+ item.name.last}}</th>
                <th v-for="(item, index) in item.results" :key="index">{{item.gender}}</th>
                <th v-for="(item, index) in item.results" :key="index">{{item.dob.age}}</th>
                <th v-for="(item, index) in item.results" :key="index"> {{item.location.city}}</th>
                <th v-for="(item, index) in item.results" :key="index">{{item.location.state}}</th>
                <th v-for="(item, index) in item.results" :key="index">{{item.email}}</th>
                <th v-for="(item, index) in item.results" :key="index">{{item.id.value}}</th>
                <th v-for="(item, index) in item.results" :key="index">{{item.phone}}</th>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import FiltroPesquisa from './FiltroPesquisa.vue'
export default {
  name:'tabela',
  props: {
    lista: Array,
  }, 
  data(){
    return{
      filtro:'',
    }
  },
  methods:{
    filtrar(value){
      this.filtro = value
    }
  },
  components:{
    FiltroPesquisa
  },
  computed:{
    listaFiltrada() {
      if (!this.filtro) {
        return this.lista;
      } else {
          return this.lista.filter(item => {
            return item.results.some(result => {
                if(this.filtro.tipo =="gender"){
                  return result.gender .toLowerCase().includes(this.filtro.value);
                }else if(this.filtro.tipo =="age"){
                  return result.dob.age== this.filtro.value;
                }else if(this.filtro.tipo =="city"){
                  return result.location.city .toLowerCase().includes(this.filtro.value);
                }else if(this.filtro.tipo =="state"){
                  return result.location.state .toLowerCase().includes(this.filtro.value);
                }else if(this.filtro.tipo =="cpf"){
                  return result.id.value .toLowerCase().includes(this.filtro.value);
                }else if(this.filtro.tipo =="name"){
                  const nome =result.name.first .toLowerCase()+" "+ result.name.last .toLowerCase()
                  return nome.includes(this.filtro.value);
                }
            }); 
          });
      }
    }
  }
}
</script>

<style>

tr:nth-child(even)  {
  background: rgb(148, 154, 158);
  color: #000; 
}
tr:nth-child(even)  {
  background-color: rgb(223, 225, 226); 
  color: #333; 
}
tr:nth-child(even) td {
  background: rgb(148, 154, 158);
  color: #000; 
}
tr:nth-child(odd) td {
  background-color: rgb(223, 225, 226); 
  color: #333; 
}
th:first-child{
  padding: 10px;
}
table {
  margin: auto;
  text-align: center;
}
th{
  background: rgb(148, 154, 158);
}
td{
  min-width: 100px;
}
.name{
  padding: 0px 30px 0px 30px;
}
th{
  min-width: 80px;
}

th:hover + tr {
  background-color: #e90707;
}

table {
  position: relative;
  overflow-y:scroll;
}
</style>