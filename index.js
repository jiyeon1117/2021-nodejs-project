const express = require('express'); //express 모듈 가져오기
const app = express();  
const port = 3000;  //포트번호 설정

const mongoose = require('mongoose');  //MongoDB 모듈 가져오기
//MongoDB 연결
mongoose.connect('mongodb+srv://jiyeon:0317@cluster.wiunt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))  //연결 확인
  .catch(err => console.log(err)) //에러 확인 가능

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})