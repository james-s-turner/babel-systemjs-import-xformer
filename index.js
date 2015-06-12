module.exports = function (babel) {

    var t = babel.types;

    return new babel.Transformer("babel-systemjs-import-xformer", {
        ImportDeclaration: function (node, parent) {
            var imported = node.source.value;
            if(imported.endsWith(".css!")){
                this.dangerouslyRemove();
            }
        }
    });
    return null;
};