# web2_labos2

<strong>link na aplikaciju:</strong> https://web2-lab2-lm.onrender.com <br/>
U repozitoriju se nalazi kod za drugu laboratorijsku vježbu iz kolegija Web2. Aplikacija je napravljena tako da simulira XSS napad i Broken Access Control.<br/>
Za obranu od BAC korišten je Auth0, stoga kad mijenjate /user u /admin, aplikacija će zahtijevti od vas da se prijavite kao admin s podacima:
<br/>


| email  | lozinka |
| ------------- | ------------- |
| admin.admin123@gamil.com  | Admin123!  |
<br/>
<strong>ako aplikaciju želite pokrenuti lokalno:</strong> <br/>
npm install<br/>
npm install express ejs<br/>
npm install express-openid-connect<br/>
npm start<br/>


<h5> Izgled aplikacije </h5>

<h6>Početna stranica</h6>
<img src="1.png"></img>
<h6>Zaštićeni XSS, a klikom na Nesigurno demonstrira se nezaštićeni napad</h6>
<img src="2.png"></img>
<h6>Nezaštićeni BAC, a klikom na Sigurno demonstrira se zaštićeni napad</h6>
<img src="3.png"></img>
<h6>Nakon promjene URL-a u /admin (u sigurnom načinu rada) potrebno je prijaviti se kao admin</h6>
<img src="4.png"></img>
