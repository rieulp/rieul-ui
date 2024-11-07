module.exports = {
  parser: '@typescript-eslint/parser', // 타입스크립트 파서
  extends: [
    'eslint:recommended', // 기본 규칙
    'plugin:react/recommended', // 리액트 규칙
    'plugin:@typescript-eslint/recommended', // 타입스크립트 규칙
    'prettier', // 프리티어와 충돌하는 룰을 비활성화
  ],
  plugins: ['react', '@typescript-eslint'], // 플러그인
  rules: {
    // 사용자 정의 규칙
    '@typescript-eslint/no-explicit-any': 'warn', // any 타입 검사 비활성화
    '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수 검사 비활성화
  },
  settings: {
    react: {
      version: 'detect', // 리액트 버전 자동 감지
    },
  },
};
