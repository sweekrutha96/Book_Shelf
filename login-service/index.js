import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()

app.use(cors({
  origin: ["https://book-shelf-back-end.vercel.app","https://book-shelf-login-back-end.vercel.app"],
  methods: ["POST","GET","DELETE","PUT","PATCH","OPTIONS"]
  credentials: true,
}));

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect("mongodb+srv://admin:knywpVTYMT9t9c2h@cluster0.kccg0e0.mongodb.net/users?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
})

app.get("/hello", (req, res) => {
  res.send("Hello World!")
})

app.listen(9002,() => {
    console.log("BE started at port 9002")
})
