# eslint-config-stemn
These are Stemn's standard eslint rules.

### Usage
npm install directly from github using `npm i git+https://git@github.com/stemn/eslint-config-stemn.git --save-dev`

Add this to the `.eslintrc` file:
``` json
{
  "extends": "stemn",
}
```

No other rules should be specified. Any rules should be added here and standardised across all projects

### What are the rules?
The base rule set is from Airbnb. There are only a few changes such as no semi-colons. All the changes are commented in `index.js`
