<template>
  <main id="admin">
    <section class="container">
      <section class="events">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Where</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <!-- Here we import our Events we have added on our DB -->
        <tbody> 
          <tr v-for="event in events" :key="event._id" :event="event">
            <td>{{event.name}}</td>
            <td>{{event.where.location}}, {{event.where.adress}} </td>
            <td>{{event.when.date}}</td>
            <td>{{event.when.from}} - {{event.when.to}}</td>
          </tr>
        </tbody>
      </table>
      </section>
       <section>
         <!-- This is for making a new Event and send it to our DB -->
         <h1 class="addEvent">Add Event</h1>
        <footer  class="form">          
          <input type="text" placeholder="Name" v-model="newEvent.name">
          <input type="text" placeholder="Location" v-model="newEvent.where.location">
          <input type="text" placeholder="Address" v-model="newEvent.where.adress">
          <input type="text" placeholder="Date" v-model="newEvent.when.date">
          <input type="text" placeholder="Start time" v-model="newEvent.when.from">
          <input type="text" placeholder="End time" v-model="newEvent.when.to">
          <input type="number" placeholder="Price" v-model="newEvent.price">
          <input type="text" placeholder="Venue type" v-model="newEvent.spot">
          <a href="#" class="btn" @click="createEvent">Add event!</a>
        </footer>
      </section>
    </section>
  </main>
</template>
<script>
export default { 
  name: 'admin',
    beforeMount() {
    this.$store.dispatch('getEvents');
  },    
  data() {
    /* my schema from my Database */
    return {
newEvent: {      
                name: '',
                where: {
                    venue: '',
                    adress: ''
                },
                when: {
                    date: '',
                    from: '',
                    to: ''
                },
                price: "",

            }
    }
  },
  /* This runs 2 functions in our store.js: One is getEvent where we get our existing 
  * Events. Second function it runs is createEvent where it posts upcoming events. */
  methods: {
    async createEvent(){
      this.$store.dispatch('createEvent', this.newEvent);
      this.$store.dispatch("getEvent");
    }
  },
  computed: {
    events() {
      return this.$store.state.events;
    }
  }
}
</script>

<!-- Styling -->

<style lang="scss">
@import '../scss/variables';
$baseline: 2.6rem;
#admin {
    @extend %center;
    .logo {
        position: fixed;
        width: 4rem;
        left: 2rem;
        top:2rem;
    }
    .container {
        max-width: 1000px;
        width: 100%;
        color: white;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 1rem;

 
        .events {
            border-radius: 2px;
            padding: 3rem;

        
            table {
                width: 100%;
                thead {
                    color: $pink;
                    font-size: .8rem;
                    text-transform: uppercase;
                    td {
                        padding: .75rem;
                        border-bottom: 1px solid rgba($color: $pink, $alpha: .4);
                    }
                }
                tbody {
                    tr {
                        td {
                            font-size: .9rem;
                            padding: 1rem .75rem;
                            color: rgba($color: #FFF, $alpha: .8);
                        
                            &:first-child {
                                font-weight: 700;
                                color: white;
                            }
                        }
                    
                        &:nth-child(2n) {
                            background: rgba($color: #fff, $alpha: .025);
                        } 
                    }
                }
            }
        }
        .form {
            border-radius: 3px;
            padding: 1rem;
            display: grid;
            grid-gap: .5rem;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: $baseline $baseline $baseline $baseline $baseline $baseline $baseline $baseline*0.25 $baseline*1.5; 
            grid-template-areas: 
            "name name"
            "venue venue"
            "address address"
            "date date"
            "start end"
            "info info"
            "price tickets"
            ". ."
            "btn btn";
            input {
                width: 100%;
                border: 1px solid rgba($color: #fff, $alpha: .6);
                background: none;
                box-sizing: border-box;
                padding: .5rem;
                outline: none;
                font-size: 1.2rem;
                color: white;
                border-radius: 3px;
                &:focus {
                    border: 1px solid rgba($color: #fff, $alpha: 1);
                }
                &.name       { grid-area: name; }
                &.venue      { grid-area: venue; }
                &.address    { grid-area: address; }
                &.date       { grid-area: date; }
                &.time-start { grid-area: start; }
                &.time-end   { grid-area: end; }
                &.info       { grid-area: info; }
                &.price      { grid-area: price; }
                &.tickets    { grid-area: tickets; }
                &::placeholder {
                    font-size: .7rem;
                    transform: translateY(-.6rem);
                    color: rgba($color: #FFF, $alpha: .6);
                }  
            } 
            .btn {
                grid-area: btn;
                background: $pink;
                border-radius: 3px;
                font-weight: 700;
                color: white;
                @extend %center;
                text-decoration: none;
                &:hover {
                    background: rgba($color: $pink, $alpha: .8);
                }
            }
        }
    }
}
</style>