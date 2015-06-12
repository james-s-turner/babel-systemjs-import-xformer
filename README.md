# babel-systemjs-import-xformer
Removes systemjs custom imports e.g. ```import 'foo-style.css!``` so they don't break CommonJS module format.


#Usage
```npm install babel-systemjs-import-xformer```
```babel --plugins babel-systemjs-import-xformer foo.js```
