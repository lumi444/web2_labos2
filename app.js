const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const externalUrl = process.env.RENDER_EXTERNAL_URL
const port = externalUrl && process.env.port ? parseInt(process.env.port) : 3000;

require('dotenv').config();

const { auth, requiresAuth } = require('express-openid-connect');
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: externalUrl || process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

app.use( bodyParser.json() );      
    app.use(bodyParser.urlencoded({    
        extended: true
    })
)

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.set('views','./views')
app.set('view engine','ejs')



app.get('',(req,res)=>{
    res.render('index')
    res.sendStatus(200)
})

app.get('/sigurnixss',(req,res)=>{
    res.render('sigurnixss')
})

app.get('/bac/sigurnibac/user',(req,res)=>{
    res.render('sigurnibac')
})

app.get('/nesigurnixss',(req,res)=>{
    
    res.render('nesigurnixss')
})

app.get('/bac/nesigurnibac/user',(req,res)=>{
    res.render('nesigurnibac')
})

app.get('/bac/sigurnibac/admin',requiresAuth(),(req,res)=>{
    var userEmailJson = JSON.stringify(req.oidc.user)
    const userEmailP = JSON.parse(userEmailJson)
    const userEmail = userEmailP.email
    res.render('admin2',{currentUser:userEmail})
})

app.post('/nesigurnixss',(req, res)=>{
    const nezasticeniPodatak = String(req.body.nezasticeno)
    const prezime = String(req.body.prezime)
    res.render('rezultatNezasticeniXss',{podatak:nezasticeniPodatak,prezime:prezime})
})

app.get('/rezultat',(req,res)=>{
    
    res.render('rezultatZasticeniXss')
})

app.get('/bac/nesigurnibac/admin',(req,res)=>{
    
    res.render('admin1')
})

app.post('/sigurnixss',(req, res)=>{
    const zasticeniPodatak = String(req.body.zasticeno)
    const prezime = String(req.body.prezimez)
    res.render('rezultatZasticeniXss',{podatak:zasticeniPodatak,prezime:prezime})
})

if(externalUrl){
    const hostname= '127.0.0.1';
    app.listen(port, ()=>{
      console.log(`Server locally running at http://${hostname}:${port}/ and from outside on ${externalUrl}`)
    })
  }else{
    app.listen(port,()=>console.info(`Listening on port ${port}`))
  }
