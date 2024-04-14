<template>
    <div class="search">
      <h3>Filtrar tabela</h3>
      <label for="select">Tipo </label>
        <select name ="select"v-model="tipo">
            <option value="gender">Gender</option>
             <option value="age">Age</option>
             <option value="city">City</option>
             <option value="state">State</option>
             <option value="cpf">CPF</option>
             <option value="name">Nome</option>
          </select>
          <input  v-model="value" placeholder="search" @input="filtro">
          <button @click="filtro">Filtrar</button>
    </div>
</template>
<script>
export default {
  name:'tabela',
  data(){
    return{
        tipo:null,
        value:null
    }
  },
  methods:{
    filtro(){
        if(this.value!=null && this.tipo!=null){
        
        this.$emit('filtro',{"tipo":this.tipo, "value":this.value})
      
        }else{
            console.log('tipo nao selecionado')
        }
    }
  }
}
</script>


<style>
.search{
  padding: 20px;
}
.pesquisar:focus-visible{
  border: 10px;
}

input,button {
  border-radius: 10px;
  border: 0;
  padding: 7px 20px;
  margin: 0px 0px 0px 10px;
  background-color: #333;
  color: white;
}

input:hover{
  background-color:rgb(148, 154, 158);
  color: black;
  font-weight: bold;
}
input::placeholder{
  color:white
}
</style>