import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded());
app.get('/',(req, res) => {
  res.render('index.ejs');
})
app.post('/', (req, res) => {
    const username = req.body.username;
    res.render('hello.ejs',{username: username})
})
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listen port ${port}`)
})