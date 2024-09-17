const express = require("express");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const Auth = require("./routes/users");

const server = express();
server.use(express.json());

server.use(
    session({
      name: "sessionId",
      secret: 'my secret session',
      cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
      },
      resave: false,
      saveUninitialized: true,
      store: new KnexSessionStore({
        knex: require("./data/dbConfig"),
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 1000 * 60 * 60
      })
    })
  );

server.use("/api/auth", Auth);

module.exports = server;
