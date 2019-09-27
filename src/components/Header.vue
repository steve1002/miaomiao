<template>
  <div id="header">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
    title: String
  }
}
</script>

<style scoped>
*{
    margin:0;
    padding: 0; 
  }
  #header{
    width: 100%;
    height:50px;
    background: #F00;
  }
</style>
