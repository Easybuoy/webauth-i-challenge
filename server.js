const express = require('express');

// const Projects = require('./routes/project');
// const Actions = require('./routes/action');
// const Contexts = require('./routes/context');

const server = express();

server.use(express.json());

// server.use('/api/contexts', Contexts);
// server.use('/api/projects', Projects);
// server.use('/api/actions', Actions);

module.exports = server;