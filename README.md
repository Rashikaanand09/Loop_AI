Tech Stack:
Node.js
Express.js

After downloading the zip file

Install dependencies
npm install

and run app.js 
node app.js

Test on postMan
in post reuqest write this is body (raw,json)
 http://localhost:5000/ingest
{
  "ids": [1, 2, 3, 4, 5],
  "priority": "HIGH"
} 

 and in get reuqest
 http://localhost:5000/status/ingest_0
