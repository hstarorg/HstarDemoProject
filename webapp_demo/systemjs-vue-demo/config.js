System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    '/src/pages': {
      defaultJSExtensions: false,
      meta: {
        "*.vue": {
          "loader": "systemjs-plugin-vue"
        }
      }
    }
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "systemjs-plugin-vue": "npm:systemjs-plugin-vue@1.2.0",
    "vue": "npm:vue@2.5.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:argparse@1.0.9": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:autoprefixer@6.7.7": {
      "browserslist": "npm:browserslist@1.7.7",
      "caniuse-db": "npm:caniuse-db@1.0.30000748",
      "normalize-range": "npm:normalize-range@0.1.2",
      "num2fraction": "npm:num2fraction@1.2.2",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserslist@1.7.7": {
      "caniuse-db": "npm:caniuse-db@1.0.30000748",
      "electron-to-chromium": "npm:electron-to-chromium@1.3.26",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:caniuse-api@1.6.1": {
      "browserslist": "npm:browserslist@1.7.7",
      "caniuse-db": "npm:caniuse-db@1.0.30000748",
      "lodash.memoize": "npm:lodash.memoize@4.1.2",
      "lodash.uniq": "npm:lodash.uniq@4.5.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:clap@1.2.3": {
      "chalk": "npm:chalk@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:coa@1.0.4": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.5.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:color-convert@1.9.0": {
      "color-name": "npm:color-name@1.1.3"
    },
    "npm:color-name@1.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:color-string@0.3.0": {
      "color-name": "npm:color-name@1.1.3"
    },
    "npm:color@0.11.4": {
      "clone": "npm:clone@1.0.2",
      "color-convert": "npm:color-convert@1.9.0",
      "color-string": "npm:color-string@0.3.0"
    },
    "npm:colormin@1.1.2": {
      "color": "npm:color@0.11.4",
      "css-color-names": "npm:css-color-names@0.0.4",
      "has": "npm:has@1.0.1"
    },
    "npm:colors@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:css-color-names@0.0.4": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:cssnano@3.10.0": {
      "autoprefixer": "npm:autoprefixer@6.7.7",
      "decamelize": "npm:decamelize@1.2.0",
      "defined": "npm:defined@1.0.0",
      "has": "npm:has@1.0.1",
      "object-assign": "npm:object-assign@4.1.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-calc": "npm:postcss-calc@5.3.1",
      "postcss-colormin": "npm:postcss-colormin@2.2.2",
      "postcss-convert-values": "npm:postcss-convert-values@2.6.1",
      "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
      "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.1.0",
      "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
      "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
      "postcss-discard-unused": "npm:postcss-discard-unused@2.2.3",
      "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.2",
      "postcss-merge-idents": "npm:postcss-merge-idents@2.1.7",
      "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.2",
      "postcss-merge-rules": "npm:postcss-merge-rules@2.1.2",
      "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
      "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.5",
      "postcss-minify-params": "npm:postcss-minify-params@1.2.2",
      "postcss-minify-selectors": "npm:postcss-minify-selectors@2.1.1",
      "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.1",
      "postcss-normalize-url": "npm:postcss-normalize-url@3.0.8",
      "postcss-ordered-values": "npm:postcss-ordered-values@2.2.3",
      "postcss-reduce-idents": "npm:postcss-reduce-idents@2.4.0",
      "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.1",
      "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.4",
      "postcss-svgo": "npm:postcss-svgo@2.1.6",
      "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "postcss-zindex": "npm:postcss-zindex@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:csso@2.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "clap": "npm:clap@1.2.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:de-indent@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.11"
    },
    "npm:flatten@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-svg@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "html-comment-regex": "npm:html-comment-regex@1.1.1"
    },
    "npm:js-base64@2.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:js-yaml@3.7.0": {
      "argparse": "npm:argparse@1.0.9",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "esprima": "npm:esprima@2.7.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:lodash.memoize@4.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.uniq@4.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lru-cache@4.1.1": {
      "pseudomap": "npm:pseudomap@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "yallist": "npm:yallist@2.1.2"
    },
    "npm:macaddress@0.2.8": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:normalize-url@1.9.1": {
      "object-assign": "npm:object-assign@4.1.1",
      "prepend-http": "npm:prepend-http@1.0.4",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "query-string": "npm:query-string@4.3.4",
      "sort-keys": "npm:sort-keys@1.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-calc@5.3.1": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "reduce-css-calc": "npm:reduce-css-calc@1.3.0"
    },
    "npm:postcss-colormin@2.2.2": {
      "colormin": "npm:colormin@1.1.2",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-convert-values@2.6.1": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-discard-comments@2.0.4": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-discard-duplicates@2.1.0": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-discard-empty@2.1.0": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-discard-overridden@0.1.1": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-discard-unused@2.2.3": {
      "postcss": "npm:postcss@5.2.18",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-filter-plugins@2.0.2": {
      "postcss": "npm:postcss@5.2.18",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uniqid": "npm:uniqid@4.1.1"
    },
    "npm:postcss-merge-idents@2.1.7": {
      "has": "npm:has@1.0.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-merge-longhand@2.0.2": {
      "postcss": "npm:postcss@5.2.18",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-merge-rules@2.1.2": {
      "browserslist": "npm:browserslist@1.7.7",
      "caniuse-api": "npm:caniuse-api@1.6.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3",
      "vendors": "npm:vendors@1.0.1"
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "object-assign": "npm:object-assign@4.1.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-minify-gradients@1.0.5": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-minify-params@1.2.2": {
      "alphanum-sort": "npm:alphanum-sort@1.0.2",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-minify-selectors@2.1.1": {
      "alphanum-sort": "npm:alphanum-sort@1.0.2",
      "has": "npm:has@1.0.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3"
    },
    "npm:postcss-normalize-charset@1.1.1": {
      "postcss": "npm:postcss@5.2.18"
    },
    "npm:postcss-normalize-url@3.0.8": {
      "is-absolute-url": "npm:is-absolute-url@2.1.0",
      "normalize-url": "npm:normalize-url@1.9.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-ordered-values@2.2.3": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-reduce-idents@2.4.0": {
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-reduce-initial@1.0.1": {
      "postcss": "npm:postcss@5.2.18",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:postcss-reduce-transforms@1.0.4": {
      "has": "npm:has@1.0.1",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
    },
    "npm:postcss-selector-parser@2.2.3": {
      "flatten": "npm:flatten@1.0.2",
      "indexes-of": "npm:indexes-of@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:postcss-svgo@2.1.6": {
      "is-svg": "npm:is-svg@2.1.0",
      "postcss": "npm:postcss@5.2.18",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "svgo": "npm:svgo@0.7.2"
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "alphanum-sort": "npm:alphanum-sort@1.0.2",
      "postcss": "npm:postcss@5.2.18",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-zindex@2.2.0": {
      "has": "npm:has@1.0.1",
      "postcss": "npm:postcss@5.2.18",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss@5.2.18": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chalk": "npm:chalk@1.1.3",
      "js-base64": "npm:js-base64@2.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.7",
      "supports-color": "npm:supports-color@3.2.3"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:pseudomap@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@4.3.4": {
      "object-assign": "npm:object-assign@4.1.1",
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:reduce-css-calc@1.3.0": {
      "balanced-match": "npm:balanced-match@0.4.2",
      "math-expression-evaluator": "npm:math-expression-evaluator@1.2.17",
      "reduce-function-call": "npm:reduce-function-call@1.0.2"
    },
    "npm:reduce-function-call@1.0.2": {
      "balanced-match": "npm:balanced-match@0.4.2"
    },
    "npm:sax@1.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:sort-keys@1.1.2": {
      "is-plain-obj": "npm:is-plain-obj@1.1.0"
    },
    "npm:source-map@0.5.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.2.3": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:svgo@0.7.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "coa": "npm:coa@1.0.4",
      "colors": "npm:colors@1.1.2",
      "csso": "npm:csso@2.3.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-yaml": "npm:js-yaml@3.7.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sax": "npm:sax@1.2.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "whet.extend": "npm:whet.extend@0.9.9"
    },
    "npm:systemjs-plugin-vue@1.2.0": {
      "cssnano": "npm:cssnano@3.10.0",
      "falafel": "npm:falafel@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lru-cache": "npm:lru-cache@4.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.2.18",
      "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "vue-template-compiler": "npm:vue-template-compiler@2.5.2"
    },
    "npm:uniqid@4.1.1": {
      "macaddress": "npm:macaddress@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uniqs@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vendors@1.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:vue-template-compiler@2.5.2": {
      "de-indent": "npm:de-indent@1.0.2",
      "he": "npm:he@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:vue@2.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
