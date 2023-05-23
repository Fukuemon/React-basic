// React ライブラリを import します。これにより、このファイル内で React の各機能を使用できるようになります。
import React from 'react'

// 関数コンポーネント Basic1 を定義します。Reactのコンポーネントは、表示したい内容をreturnする関数またはクラスとして定義されます。
const Basic1 = () => {
  // return 内部の JSX が画面に表示される内容です。
  // <> と </> はフラグメントと呼ばれ、複数の JSX 要素を一つの要素としてまとめるために使用されます。これにより、余分な div タグなどを追加する必要がなくなります。
  return (
    <>
      {/* HTML の h1 タグに相当する JSX 要素です。ここでは "Hello React" というテキストを表示します */}
      <h1>Hello React</h1>
      <h1>Hello React</h1> 
    </>
  )
}

// Basic1 コンポーネントを export します。これにより、他の JavaScript ファイルからこのコンポーネントを import して利用することが可能になります。
export default Basic1
