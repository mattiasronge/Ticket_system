<template>
  <main id="home">
    <section class="content">
      <div></div>
      <h1>Where it´s @</h1>
  </section>
  </main>
</template>

<script>
import pager from '@/components/Pager';

export default {
  name: 'home',
  data(){
    return {
      activeStep: 1
    }
  },
  components: {
    pager
  }
}
</script>
<style lang="scss">
@import '../scss/variables';
#home {
  background: $darkblue;
  display: flex;
  flex-direction: column;
  div {
  background-image: url(../assets/festival.jpg);
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-position: 33% 22%;
}

  .content {
    flex: 10;
    @extend %center;
    flex-direction: column;

    h1 {
      color: $pink;
      font-size: 2.2rem;
      margin: .5rem 0;
    }
  }
}

</style>
