<template>
  <div class="home">
    <MenuWeb/>
    <h1>Home</h1>
    <img src="@/assets/logo.png" id="icon" alt="User Icon" />
  </div>
</template>

<script>
import MenuWeb from '@/components/MenuWeb.vue'

export default {
  name: 'Home',
  components: {
    MenuWeb
  }
}
</script>
