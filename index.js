const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');
const {getAll} = require('./demo_db');
const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware

app.engine('handlebars', exphbs({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) => {
    const temp = getAll();
    temp.then((items)=>{

        let tmp = items.map((item)=> {
            return {...item, createdAt: new Date(item.createdAt).toLocaleDateString()}
        })

        res.render('index', {
        title: 'Member App', 
        members:tmp})
    })
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));