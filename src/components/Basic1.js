// Reactライブラリをインポート
import React from 'react'

// Basic1という関数コンポーネントを定義
// このコンポーネントはpropsというパラメータを受けとる
// propsは親コンポーネントから子コンポーネントへのデータフローを制御するためのオブジェクト
const Basic1 = (props) => {
  // JSXを返します。このJSXが実際にブラウザ上でレンダリングされる。
  return (
    // フラグメントを使用して複数の要素を一つにまとめまる。
    <>
      {/* props.nameを使用して名前を表示。 */}
      <h1>Hello { props.name }</h1>
      {/* 単純に文字列"Hello React"を表示 */}
      <h1>Hello React</h1> 
    </>
  )
}

// このコンポーネントをエクスポート。これにより他のファイルからこのコンポーネントをimportして利用することができる
export default Basic1

