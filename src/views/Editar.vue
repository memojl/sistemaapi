<template>
    <div class="Editar">
        <Header/>
        <h1>Editar</h1>
        <div class="container">
            <form action="" class="form-horizontal">
                <div class="form-group left">
                    <label for="" calss="control-label col-sm-2">Nombre</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="Nombre" id="Nombre" v-model="form.Nombre">
                    </div>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Editar',
  components: {
      Header,
      Footer
  },
  data:function(){
      return{
          pacienteId: null,
          form:{
              "PacienteId":"",
              "DNI":"",
              "Nombre":"",
              "Direccion":"",
              "CodigoPostal":"",
              "Telefono":"",
              "Genero":"",
              "FechaNacimiento":"",
              "Correo":""
          }
      }
  },
  mounted:function(){
      let pacienteId = this.$route.params.id;
      let url = 'http://localhost/MisSitios/apirest/pacientes?id='+pacienteId;
      axios.get(url).then(data =>{
        //console.log(data);
        //this.pacienteId = data.data;
        this.form.Nombre = data.data[0].Nombre;
        this.form.DNI = data.data[0].DNI;
        this.form.Correo = data.data[0].Correo;
        this.form.CodigoPostal = data.data[0].CodigoPostal;
        this.form.Genero = data.data[0].Genero;
        this.form.Telefono = data.data[0].Telefono;
        this.form.FechaNacimiento = data.data[0].FechaNacimiento;
        this.form.token = localStorage.getItem('token');
        console.log(this.form);
      });
  }
}
</script>
<style>
.left, label{
    text-align: left;
}
</style>