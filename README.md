# eslint-config-mm
Minute Media linter package.

Created for shared use between different repositories.

Extends [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) package.

##Setup

Add to package.json :

* dependencies:
```
 "eslint": "^4.10.0"
 "eslint-config-mm": TO ADD!!
```
* For webpack in addition add:
```
 "eslint-loader": "1.9.0"
```
* configure ESLint:
```
   "eslintConfig": {
     "extends": "eslint-config-mm"
   }
```
