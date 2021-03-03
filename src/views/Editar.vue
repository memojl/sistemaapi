<template>
    <div class="Editar">
        <Header/>
        <h1>Editar</h1>
        <div class="container">
            <form action="" class="">
            <div class="row">    
                <div class="col-sm-6">
                    <div class="form-group text-left">
                        <label for="" class="control-label">Nombre</label>
                        <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group text-left">
                        <label for="" class="control-label">Correo</label>
                        <input type="email" class="form-control" name="correo" id="correo" v-model="form.correo">
                    </div>
                </div>
                <div class="col-sm-12">    
                    <div class="form-group text-left">
                        <label for="" class="control-label">Dirección</label>
                        <input type="text" class="form-control" name="direccion" id="direccion" v-model="form.direccion">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group text-left">
                        <label for="" class="control-label">DNI</label>
                        <input type="text" class="form-control" name="dni" id="dni" v-model="form.dni">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group text-left">
                        <label for="" class="control-label">Codigo Postal</label>
                        <input type="text" class="form-control" name="codigoPostal" id="codigoPostal" v-model="form.codigoPostal">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group text-left">
                        <label for="" class="control-label">Genero</label>
                        <input type="text" class="form-control" name="genero" id="genero" v-model="form.genero">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group text-left">
                        <label for="" class="control-label">Telefono</label>
                        <input type="tel" class="form-control" name="telefono" id="telefono" v-model="form.telefono">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group text-left">
                        <label for="" class="control-label">Fecha de Nacimiento</label>
                        <input type="date" class="form-control" name="fechaNacimiento" id="fechaNacimiento" v-model="form.fechaNacimiento">
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group text-right">
                        <button type="button" class="btn btn-primary" v-on:click="editar()">Guardar</button>
                        <button type="button" class="btn btn-danger" v-on:click="eliminar()">Eliminar</button>
                        <button type="button" class="btn btn-light" v-on:click="cancelar()">Cancelar</button>
                    </div>
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
          //pacienteId: null,
          form:{
            "pacienteId": "",
            "nombre": "",
            "dni": "",
            "correo": "",
            "direccion": "",
            "codigoPostal": "",
            "genero": "",
            "telefono": "",
            "fechaNacimiento": "",
            "token": ""
          }
      }
  },
  methods: {
      editar(){
        let url = 'http://localhost/MisSitios/apirest/pacientes';
        axios.put(url,this.form).then(data =>{
            const  {statusText} = data;
            console.log(statusText);
            //if(statusText=='OK'){this.$router.push('/dashboard/');}
        });
      },
      cancelar(){
          this.$router.push('/dashboard/');
      },
      eliminar(){
          let url = 'http://localhost/MisSitios/apirest/pacientes';
          var enviar = {
              "pacienteId": this.form.pacienteId,
              "token": this.form.token
          };
          console.log(enviar);
          axios.delete(url,{ "headers": enviar}).then(data=>{
              console.log(data);
          });
      }
  },
  mounted:function(){
      let pacienteId = this.$route.params.id;      
      let url = 'http://localhost/MisSitios/apirest/pacientes?id='+pacienteId;
      this.form.pacienteId = pacienteId;
      const token = localStorage.getItem('token');        
      if(token==null){
        this.$router.push('/');
      }else{
        this.form.token = token;
      }
      axios.get(url).then(data =>{
        
        this.form.nombre = data.data[0].Nombre;
        this.form.dni = data.data[0].DNI;
        this.form.correo = data.data[0].Correo;
        this.form.direccion = data.data[0].Direccion;
        this.form.codigoPostal = data.data[0].CodigoPostal;
        this.form.genero = data.data[0].Genero;
        this.form.telefono = data.data[0].Telefono;
        this.form.fechaNacimiento = data.data[0].FechaNacimiento;
        
        console.log(this.form);
      });
  }
}
</script>


<style>
.Editar{
    padding-bottom: 100px;
}
.btn{
    margin-left: 8px;
    /*margin-right: 8px;*/
}
</style>