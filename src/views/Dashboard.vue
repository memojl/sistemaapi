<template>
  <div class="Dashboard">
    <Header/>
        <h1>Dashboard</h1>
        
        <div class="container">
<div class="row text-left"><button class="btn btn-primary" v-on:click="nuevo()">Nuevo</button></div>
<br>
<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOMBRE</th>
      <th scope="col">DNI</th>
      <th scope="col">TELEFONO</th>
      <th scope="col">EMAIL</th>
      <th scope="col">ELIMINAR</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="paciente in Lista" :key="paciente.PacienteId">
      <th scope="row">{{paciente.PacienteId}}</th>
      <td>{{paciente.Nombre}}</td>
      <td>{{paciente.DNI}}</td>
      <td>{{paciente.Telefono}}</td>
      <td>{{paciente.Correo}}</td>
      <td>
        <button class="btn btn-warning"  v-on:click="editar(paciente.PacienteId)"><b-icon icon="pencil-square"></b-icon></button>
        <button class="btn btn-danger"  v-on:click="borrar(paciente.PacienteId)"><b-icon icon="trash"></b-icon></button>
      </td>
    </tr>
  </tbody>
</table>
</div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Dashboard',
  components: {
      Header,
      Footer
  },
  data(){
    return {
      Lista: null,
      pagina: 1
    }     
  },
  methods:{
    nuevo(){
      console.log('Nuevo/');
      this.$router.push('/nuevo');
    },
    editar(id){
      console.log('Editar/'+id);
      this.$router.push('/editar/'+id);
    },
    listar(){
      let url = 'http://localhost/MisSitios/apirest/pacientes?page='+this.pagina;
      axios.get(url).then(data =>{
        this.Lista = data.data;
      });
    },
    borrar(id){
          let url = 'http://localhost/MisSitios/apirest/pacientes';
          const token = localStorage.getItem('token');
          var enviar = {
              "token": token,
              "pacienteId": id
          };
          console.log(enviar);
          axios.delete(url,{ headers: enviar }).then(data=>{
            const  {statusText} = data;
            console.log(statusText);
            if(statusText=='OK'){
              this.listar();
            }

          });
      }
  },
  mounted: function(){
    const token = localStorage.getItem('token');        
    if(token==null){
      this.$router.push('/');
    }
    this.listar();
  }
}
</script>
<style>
.Dashboard{
  padding-bottom: 150px;
}
</style>