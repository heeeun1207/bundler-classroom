//config파일은 항상 root 위치에 있어야 한다.
//commonJS 방식으로 '모듈'을 만들었다.
export default {
  mode: 'production', //->원래 깔끔한 코드    // development -> 디버깅용 
  entry: './index.js',
  output: {
    filename: './indexdd.bundle.js',
  },
};
