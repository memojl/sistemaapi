<template>
    <div class="Nuevo">
        <Header/>
        <h1>Nuevo Paciente</h1>
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
                        <button type="button" class="btn btn-primary" v-on:click="add()">Guardar</button>
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
  name: 'Nuevo',
  components: {
      Header,
      Footer
  },
  data:function(){
      return{
          //pacienteId: null,
          form:{
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
      add(){
        let url = 'http://localhost/MisSitios/apirest/pacientes';
        this.form.token = localStorage.getItem('token');        
        axios.post(url,this.form).then(data =>{
            const  {statusText} = data;
            console.log(statusText);
            if(statusText=='OK'){
                this.makeToast('Hecho','Paciente creado','success');
                this.$router.push('/dashboard');
            }
        }).catch(e=>{
            console.log(e);
            this.makeToast('Error','Error al guardar','danger');
        });
      },
      cancelar(){
          this.$router.push('/dashboard');
      },
      makeToast(titulo,texto,tipo) {
        this.toastCount++
        this.$bvToast.toast(texto, {
          title: titulo,
          variant: tipo,
          autoHideDelay: 5000,
          appendToast: true
        })       
      }
  },
  mounted:function(){
      const token = localStorage.getItem('token');        
      if(token==null){
        this.$router.push('/');
      }else{
        this.form.token = token;
      }
   }
}
</script>
<style>
.Nuevo{
    padding-bottom: 100px;
}
.btn{
    margin-left: 8px;
    /*margin-right: 8px;*/
}
</style>