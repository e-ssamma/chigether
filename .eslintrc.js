module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "naver", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      js: true,
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", require("os").EOL === "\r\n" ? "windows" : "unix"],
    
    // [NAVER] error.js
    "no-cond-assign": ["error", "except-parens"],
    "no-empty": [
      "error", {
        "allowEmptyCatch": true
      }
    ],

    // [NAVER] imports.js
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-mutable-exports": "off",
    "import/first": "error",
    "import/imports-first": "off",
    "import/extensions": "off",
    "import/no-webpack-loader-syntax": "off",

    // [NAVER] 2.2 조건/반복문/제어문에 중괄호 사용
    "curly": "error",
    // curly: ["error", "multi-line"],

    // encourages use of dot notation whenever possible
    // [NAVER] 8.6.3. 오브젝트에 속성으로 접근할 때는 .(점)을 사용한다.
    "dot-notation": ["error", {allowKeywords: true}],

    // make sure for-in loops have an if statement
    "guard-for-in": "off",
    // "guard-for-in": "error",

    // disallow else after a return in an if
    "no-else-return": "off",
    // "no-else-return": "error",

    // disallow usage of __iterator__ property
    "no-iterator": "off",
    // "no-iterator": "error",

    // disallow use of labels for anything other then loops and switches
    "no-labels": "off",
    // "no-labels": ["error", { allowLoop: false, allowSwitch: false }],    

    // // disallow reassignment of function parameters
    // // disallow parameter object manipulation
    // // rule: http://eslint.org/docs/rules/no-param-reassign.html
    "no-param-reassign": ["error", {props: false}],
    // "no-param-reassign": ["error", { props: true }],

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": [
      "error", {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      }, {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      }, {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      }
    ],

    // disallow usage of expressions in statement position
    "no-unused-expressions": [
      "error", {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],

    // requires to declare all vars on top of their containing scope
    "vars-on-top": "error",

    "wrap-iife": ["error", "inside", {functionPrototypeMethods: false}],
    // "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],

    // [NAVER] style.js
    // 괄호 안에 공백을 삽입하지 않는다.
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "never"],
    "array-bracket-newline": ["error", {"multiline": true}],
    // 줄의 끝에서 중괄호 시작
    "brace-style": "error",
    "no-multi-spaces": "error",
    "no-whitespace-before-property": "error",
    "func-call-spacing": "error",
    // 콤마(,)은 뒤에 공백을 삽입한다.
    "comma-spacing": ["error", {before: false, after: true}],
    "consistent-this": ["error", "self"],
    // require function expressions to have a name
    "func-names": "off",
    // 공백은 탭을 사용한다.
    indent: [
      "error", 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        }
      }
    ],
    "key-spacing": [
      "error", {
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "error", {
        "before": true,
        "after": true,
        "overrides": {
          "return": {after: true},
          "throw": {after: true},
          "case": {after: true}
        }
      }
    ],
    "max-len": [
      "error", {
        "code": 100,
        "tabWidth": 1,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreRegExpLiterals": true,
        "ignoreTemplateLiterals": true,
        "ignoreStrings": true,
        "ignoreUrls": true
      }
    ],
		
    // 괄호 안에 공백을 삽입하지 않는다.(disallowSpacesInsideArrayBrackets, disallowSpacesInsideObjectBrackets, disallowSpacesInsideParentheses)
    "object-curly-spacing": ["error", "never"],
    // disallow tab characters entirely
    "no-tabs": "off",
    // [NAVER] 8.6.2. 외부에서 접근할 수 없다면, 변수에 _을 사용하지 않는다.
    // [NAVER] 8.4.2. 외부에서 접근할 수 있는 경우, 사용하면 안되는 메서드는 _을 사용한다.
    // [NAVER] 8.4.3. 외부에서 접근할 수 없다면, 메서드에 _을 사용하지 않는다.
    // [NAVER] 8.6.1. 속성. 외부에서 접근할 수 있는 경우, 사용하면 안되는 속성은 _을 사용한다.
    "no-underscore-dangle": "off",
    // 오브젝트 리터럴은 키와 값을 한 쌍으로 새 줄을 삽입한다.
    "object-property-newline": "error",
    // 함수 선언 간, 변수 선언 후 빈 줄 사용 준수
    "one-var": ["error", "never"],
    // 함수 선언 후 빈줄 사용 지양
    "padded-blocks": ["error", "never"],

    // 따옴표는 쌍따옴표를 사용한다. 이스케이프한 경우는 예외로 홑따옴표를 사용할 수 있다.
    "quotes": [
      "error", "double", {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    // 종료 구분자(;) 앞에는 공백 사용 지양.
    "semi-spacing": ["error", {before: false, after: true}],
    // 중괄호({})의 앞에 공백을 하나 넣는다.
    "space-before-blocks": "error",
    // 산술 연산자, 비교 연산자 앞,뒤에 공백을 추가한다.
    "space-infix-ops": "error",
    // 단항 연산자(!, ++..)와 피연산자 사이에 공백을 두지 않는다.
    "space-unary-ops": [
      "error", {
        "nonwords": false
      }
    ],

    // 파일의 마지막 줄 개행.
    "eol-last": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "block-spacing": "error",
    "arrow-spacing": ["error", {before: true, after: true}],
    "react/prop-types": "off",
  },
};
