<template>
  <div class="dashboard">
    <Header/>
        <h1>Dashboard</h1>
        <div class="container">

<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOMBRE</th>
      <th scope="col">DNI</th>
      <th scope="col">TELEFONO</th>
      <th scope="col">EMAIL</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="paciente in Lista" :key="paciente.PacienteId" v-on:click="editar(paciente.PacienteId)">
      <th scope="row">{{paciente.PacienteId}}</th>
      <td>{{paciente.Nombre}}</td>
      <td>{{paciente.DNI}}</td>
      <td>{{paciente.Telefono}}</td>
      <td>{{paciente.Correo}}</td>
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
    editar(id){
      console.log('Editar/'+id);
      this.$router.push('/editar/'+id);
    }
  },
  mounted: function(){
    let url = 'http://localhost/MisSitios/apirest/pacientes?page='+this.pagina;
    axios.get(url).then(data =>{
      this.Lista = data.data;
    });
  }
}
</script>
<style>
</style>