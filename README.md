# eslint-config-mm
Minute Media linter package.

Created for shared use between different repositories.

Extends [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) package.

# Setup
Prerequisites: Node.js (>=6.14), npm version 3+.

Add to package.json :

* dependencies:
```
 "eslint": "^5.7.0"
 "eslint-config-mm": "git+https://github.com/FTBpro/eslint-config-mm.git#v2.0"
```
* For webpack in addition add:
```
 "eslint-loader": "2.1.1"
```
* For rollup in addition add:
```
 "rollup-plugin-eslint": "^5.0.0"
```
* configure ESLint:
```
   "eslintConfig": {
         "extends": "eslint-config-mm"
       }
```
