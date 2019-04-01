<template>
  <main class="events">
    <section class="event-title">Events</section>
    <section class="event-search">
      <span class="fa fa-search" style="top: 1.8rem; left: 0.7rem; float: left; color: rgba(255, 255, 255, 0.2);"></span>
      <input type="text" name="search" v-model="search" placeholder="filter">

    </section>
    <section class="margin">
      <event v-for="event in filteredEvents" :key="event.id" :event="event"/>
    </section>

  </main>
</template>

<script>
import event from '@/components/Event';
import pager from '@/components/Pager';

export default {
  name: 'events',
  data() {
    return {
      search: '',
    }
  },
  components: {
    pager,
    event
 
  }, 
  computed: {
    events() {
      return this.$store.state.events
    },
    filteredEvents: function() {
      return this.events.filter((event) => {
        return event.name.match(this.search.toUpperCase());
      })
    }
  },
  beforeMount() {
    this.$store.dispatch('getEvents');
    this.$store.state.tickets = []
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
#events {
  background: $darkblue;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  box-sizing: border-box;
    header {
        @extend %center;
        flex-direction: column;
        input {
          width: 100%;
          border: none;
          background: rgba($color: #fff, $alpha: .1);
          padding: .5rem;
          height: 2.5rem;
          margin: 1rem 0 2rem 0;
          border-radius: 4px;
          font-size: 1.2rem;
          color: rgba($color: #fff, $alpha: .8);
          font-family: 'Fira Sans', sans-serif;
          box-sizing: border-box;
          &:focus {
            outline: none;
          }
        }
        h1 {
            color: $pink;
            font-size: 2.2rem;
            margin: .5rem 0;
        }
    }
  .content {
    flex: 7;
    overflow: scroll;
  }
}
</style>