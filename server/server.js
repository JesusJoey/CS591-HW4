const createError = require('http-errors');
const express = require('express');
const indexRouter = require('./routes/index');
const bodyParser=require('body-parser')
const server = express();

server.listen(4000,function(){
  console.log('Success!')
});

server.use('/api', indexRouter);

server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;
