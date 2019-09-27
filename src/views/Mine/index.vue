<template>
  <div>
    <Header title='mine'></Header>
    <Footer></Footer>
    <Login></Login>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Login  from '@/components/Login'

export default {
  name:'Mine',
  components: {
    Header,
    Footer,
    Login
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
</style>