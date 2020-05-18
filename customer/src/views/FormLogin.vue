<template>
  <div class="Form">
    <Nav></Nav>
    <h1>Form Login</h1>
    <Form></Form>
  </div>
</template>

<script>
import Form from '@/components/FormLogin.vue'
import Nav from '@/components/Navigation.vue'

export default {
  name: 'Forms',
  components: {
    Form,
    Nav
  }
}
</script>
