module.exports = {
  "extends": [
    "eslint-config-airbnb",
  ].map(require.resolve),
  
  "env": {
    "node": true,
    "browser": true,
  },

  "globals": {
    "GLOBAL_ENV": true,
  },

  "rules": {
    "linebreak-style": 0,                     // Both CRLF/LF are fine
    "semi": ["error", "never"],               // Never allow semi colons
    "no-multi-spaces": 0,                     // Allow multi spaces so things line up
    "max-len": 0,
    "eol-last": 0,
    "global-require": 0,
    
    "no-underscore-dangle": 0,                // Allow _ in var names such as _id
    "no-trailing-spaces": 0,
    "no-mixed-operators": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-console": 0,
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": 0,
    
    "react/jsx-curly-spacing": [2, "always"], // Use spaces in jsx around vars
    "react/prefer-stateless-function": 0,     
    "react/prop-types": 0,                    // TODO This would be good to remove
    "react/no-unescaped-entities": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,
    "react/sort-comp": 0,
    "react/no-danger": 0,
    "react/forbid-prop-types": 0,             // TODO This would be good to remove
    
    "import/first": 0,                        // Don't force absolute imports to be first
    "import/extensions": 0,                   // Don't require file extensions
    "import/no-extraneous-dependencies": 0,   // Allow extensions webpack aliases
    "import/no-unresolved": 0,                // Allow unresolved imports (webpack resolves)
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,

    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/no-static-element-interactions": 0,
  }
};
