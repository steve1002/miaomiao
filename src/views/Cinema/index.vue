<template>
  <div>
    <Header title="cinema"></Header>
    <Footer></Footer>
    <Clist></Clist>
  </div> 
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Clist from '@/components/Clist'

export default {
  components: {
    Header,
    Footer,
    Clist
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
</style>