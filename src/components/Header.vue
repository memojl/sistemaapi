<template>
<div>
 
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/dashboard">AdminPaciente</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!--b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form-->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em><!--img class="img-circle" src="../assets/logo.png" id="icon" alt="User Icon" /--><b-avatar badge badge-variant="success" size="2em"></b-avatar> User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="showAlert">Salir</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

  <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      La sesion se cerrara en {{ dismissCountDown }} segundos...
  </b-alert>


</div>
</template>

<script>
  export default {
    data() {
      return {
        dismissSecs: 5,
        dismissCountDown: 0
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
        console.log(dismissCountDown);
        if(dismissCountDown==0){
            localStorage.clear();
            this.$router.push('/');
        }
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>
<style>

</style>