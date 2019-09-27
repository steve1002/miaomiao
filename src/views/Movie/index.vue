<template>
  <div>
    <Header title='movie'></Header>
    <div>
      <ul>
        <router-link tag="li" to="/movie/action">action</router-link>
        <router-link tag="li" to="/movie/comedy">comedy</router-link>
      </ul>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default {
  name:'Movie',
  components: {
    Header,
    Footer
  },
  data() {
    return {

    };
  },
};
</script>
<style scoped>
</style>