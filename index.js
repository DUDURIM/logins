const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ) );
app.use(express.urlencoded({extended: true}));
app.use( express.json() );


// 메인페이지 주소연결
const routerUser = require("./routes/user");
app.use('/', routerUser);

app.get('*', (req,res) =>{
    res.render("nojubken");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});

