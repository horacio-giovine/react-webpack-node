// require.context(directory, useSubdirectories = false, regExp = /^\.\//)
var context = require.context('./app', true, /.spec.js$/);
context.keys().forEach(context);
