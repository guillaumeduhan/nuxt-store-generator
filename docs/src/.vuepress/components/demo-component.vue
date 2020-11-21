<template>
  <div class="demo">
    {{ msg }}
    <div style="width: 50px; height: 50px; background: red; display: block;" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
