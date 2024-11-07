// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 이전 빌드 파일 삭제
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 처리할 파일 확장자
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 타입스크립트 파일 처리
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: process.env.NODE_ENV || 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // 기본 HTML 템플릿
    }),
  ],
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false, // 소스 맵
  devServer: process.env.NODE_ENV === 'development' && {
    // 개발 서버
    static: {
      // 정적 파일 서비스
      directory: path.join(__dirname, 'dist'), // 정적 파일 경로
    },
    compress: true, // gzip 압축
    port: 3000, // 포트 번호
  },
};
