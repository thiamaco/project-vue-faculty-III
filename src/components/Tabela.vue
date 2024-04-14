<template>
    <div>
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
            <tr v-for="item in lista.results ":key="item" >
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


export default {
name:'tabela',
props: {
    lista: Array,
  },
data(){
    return{
        
    }
}
}
</script>