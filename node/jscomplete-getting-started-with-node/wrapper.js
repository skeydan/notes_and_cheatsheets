// automatic function invocation (IIFE), as if had 
// function(exports, require, module, _filename, dirname) {...}

console.log(arguments);

/* [Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: {
      id: '.',
      path: '/home/key/code/js-dev/jscomplete-getting-started-with-node',
      exports: {},
      filename: '/home/key/code/js-dev/jscomplete-getting-started-with-node/index.js',
      loaded: false,
      children: [],
      paths: [Array],
      [Symbol(kIsMainSymbol)]: true,
      [Symbol(kIsCachedByESMLoader)]: false,
      [Symbol(kIsExecuting)]: true
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/home/key/code/js-dev/jscomplete-getting-started-with-node/index.js': [Object]
    }
  },
  '2': {
    id: '.',
    path: '/home/key/code/js-dev/jscomplete-getting-started-with-node',
    exports: {},
    filename: '/home/key/code/js-dev/jscomplete-getting-started-with-node/index.js',
    loaded: false,
    children: [],
    paths: [
      '/home/key/code/js-dev/jscomplete-getting-started-with-node/node_modules',
      '/home/key/code/js-dev/node_modules',
      '/home/key/code/node_modules',
      '/home/key/node_modules',
      '/home/node_modules',
      '/node_modules'
    ],
    [Symbol(kIsMainSymbol)]: true,
    [Symbol(kIsCachedByESMLoader)]: false,
    [Symbol(kIsExecuting)]: true
  },
  '3': '/home/key/code/js-dev/jscomplete-getting-started-with-node/index.js',
  '4': '/home/key/code/js-dev/jscomplete-getting-started-with-node'
} */