<template>
    <div>
        <a href="javascript:void(0)" @click="adduser">Adicionar </a>
        <div class="message-add"v-if="add">
            <span>Um novo Usuario foi adicionado!</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AddUser',
    data(){
        return{
            data:null,
            add:false
        }
    },
    methods:{
      async adduser(){
            try {
                const response = await axios.get('https://randomuser.me/api/?results=1&nat=BR');
                this.data = response.data;
                if(response.status==200){
                    this.add=true;
                    setTimeout(() => {
                        this.add=false;
                    }, 2000);
                }
                fetch('http://localhost:3000/results', {
                    method: 'POST',
                    body: JSON.stringify(this.data),
                    headers: { 'Content-Type': 'application/json' }
                
                })
                .catch(error => {
                    console.error('Erro ao buscar os dados:', error);
            });
            } catch (error) {
                console.log({ error: 'Ocorreu um erro na requisição.' });
        }
        this.$emit('novo-user')
        console.log('add')
     }
    }
}
</script>
<style>
.message-add{
    position: fixed;
    top: 13%;
    left: 80%;
    transform: translate(-50%, -50%);
    background-color: #ebcccc;
    padding: 14px;
    border: 1px solid #EF5B5B;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    z-index: 999;
    border-radius: 10px;
    font-weight: bold;
}
.message-add span{
  color: #f46b45;
}


</style>