import express from "express";
import dotenv from "dotenv";
import session from "express-session";

// routes
import auth from "./routes/auth.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 3001;


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(
    session({
        secret: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: true,
        //cookie: { secure: true }
    })
)
app.use((req, res, next) => {
    res.locals.session = req.session
    next()
})

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Title',
        greeting: 'Welcome to website!'
    })
})

app.use('/auth', auth)

app.listen(3000, () => { console.log(`App listening at ${port}`) })