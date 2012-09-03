var require = __meteor_bootstrap__.require;
var path = require("path");

NodeModules = {
  _path: path.join(path.resolve('.'), 'public/node_modules'),
  require: function(module) {
    return require(path.join(NodeModules._path, module));
  },
  setPath: function(modulePath) {
    if (modulePath[0] === '/')
      NodeModules._path = modulePath;
    else
      NodeModules._path = path.join(path.resolve('.'), modulePath);
  }
};
