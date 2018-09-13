'use strict';

import path from 'path';
import express from 'express';
// import favicon from 'serve-favicon'
import jsonServer from 'json-server';
import Sanitizer from '../src/Sanitizer';
import * as data from '../data/json-data.json';
import * as schema from '../data/schema/json-schema.json';

const __dirname = path.resolve(path.dirname('./'));
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;
const usersRouter = jsonServer.router(path.join(__dirname, '/data', '', 'json-data.json'));
const schemaRouter = jsonServer.router(path.join(__dirname, '/data/schema', '', 'json-schema.json'));
const sanitizer = new Sanitizer(data.records, schema, 'new user');
let validateSchema = sanitizer.validateSchema();

router.get('/users', usersRouter);
router.get('/users/:id', usersRouter);
router.get('/schema', schemaRouter);

app.get("/users/:id", function (req, res, next) {
  next()
});

app.get("/users", (req, res, next) => {
  next();
});

app.listen(PORT, () => {
  console.log( path.join(__dirname, '/data', '', 'json-data.json'),
              'We are live on http://0.0.0.0:'+ PORT );
});

// app.use(express.static('build', {'index': ['index.html', 'index.htm']}));
app.use('/', express.static(__dirname + '/build'));
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use('/', router);
