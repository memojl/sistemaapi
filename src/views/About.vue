<template>
  <div class="about">
    <MenuWeb/>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import MenuWeb from '@/components/MenuWeb.vue'

export default {
  name: 'About',
  components: {
    MenuWeb
  }
}
</script>