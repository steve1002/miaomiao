<template>
  <div id="footer">
   <ul>
       <router-link tag="li" to="/movie">电影</router-link>
       <router-link tag="li" to="/cinema">正在上映</router-link>
       <router-link tag="li" to="/mine">我的</router-link>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
 *{
    margin:0;
    padding: 0; 
  }
  #footer{
      width: 100%;
      height: 50px;
      background-color: azure;
      position: absolute;
      bottom:0;
  }
  #footer ul{
      display: flex;
  }
  #footer ul li{
      flex:1;
      list-style: none;
  }
  #footer ul router-link-active{
     background-color: #0f0;
  }
</style>
