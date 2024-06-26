
const express = require('express');
const routerApi =  require('./routes');
const {logErrors, errorHandler, boomErrorHandler } = require ('./middlewares/errorHandler')
const cors = require('cors');

const app = express();
const port = 3000;
app.use(express.json());
const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('Not allowed by CORS'));
    }
  }
}
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,() => {
  console.log(`Server is running on port ${port}`)
});
