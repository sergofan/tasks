'use strict';
import Mustache from 'mustache';
import superagent from 'superagent';

window.onload = function () {
  Mustache.Formatters = {
    "uppercase": function (str) {
      return str.toUpperCase();
    },
    "lpad": function (str, num, sep) {
      sep = sep || " ";
      str = "" + str;
      let filler = "";
      while ((filler.length + str.length) < num) {
        filler += sep
      };
      return (filler + str).slice(-num);
    },
    "dateFormat": function (dt) {
      let date = new Date(dt);
      let lpad = Mustache.Formatters.lpad;
      let day = lpad(date.getDate(), 2, "0");
      let month = lpad(date.getMonth() + 1, 2, "0");
      return day + "/" + month + "/" + date.getFullYear();
    },
    "phone": function (phn) {
      return '+' + phn;
    }
  };
  superagent
    .get('/users')
    .then(function (res) {
      // res.body, res.headers, res.status
      getItems(res.body);
    })
    .catch(function (err) {
      // err.message, err.response
    });

  var getItems = function (items) {
    let usersTemplate = document.getElementById('usersTemplate').innerHTML;
    let output = Mustache.render(usersTemplate, items);
    document.getElementById("usersOutput").innerHTML = output;
  }
};