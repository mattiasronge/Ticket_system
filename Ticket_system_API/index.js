// Dependecies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect(`mongodb+srv://thecaptain:${process.env.PASSWORD}@cluster0-ghab7.mongodb.net/Ticket_system?retryWrites=true`, { useNewUrlParser: true })
.then(()=> {
    console.log(`Connected.`);
})
.catch(err => console.error(err.stack))

    

// Routes
 let events = require('./routes/events');
let tickets = require('./routes/tickets');
 let verify = require('./routes/verify');

let app = express();

app.use(express.json());
app.use(cors()); // Dev

app.route('/events')
.get(events.get)
.post(events.post)

app.route('/tickets')
.post(tickets.post)

app.route('/verify/:code')
.get(verify.get)



const PORT = 3000;
app.listen(PORT, () => {
    console.info(`API up n running on port ${PORT}.`);
})
