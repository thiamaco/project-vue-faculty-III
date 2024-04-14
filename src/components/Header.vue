<template>
<header>
  <ul>    
   <li><router-link to="/">Home</router-link></li>
   <li><router-link to="/about">About</router-link></li>
   <li><router-link to="/aniversarios">aniversarios</router-link></li>
   <li><router-link to="/contatos">contatos</router-link></li>
   <li><router-link to="/map">map</router-link></li>
  </ul>
  </header>
    <router-view/>
 
  </template>

<style>
header li {
  display: block;
  padding: 5px 15px 5px 15px;
  border-radius: 6px;
  margin:5px 5px;
  max-height: 30px;
  background: #ebcccc;
}

a{
  text-decoration: none;
}


header ul {
  display: flex;
  flex-direction: row-reverse;
  margin: 0;
  height: 70px;
  align-items: flex-end;
  margin-right: 30px;
}
header{
  background: #EF5B5B;
  margin: 0;
  height: 100px;
}
li:hover{
  background-color: #27292b;
}
li:hover> a{
  
  color:white;
}
a{
  color:#333;
}

</style>