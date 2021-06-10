const express = require('express'); //express 모듈 가져오기
const app = express();  
const port = 3000;  //포트번호 설정

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})