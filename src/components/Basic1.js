import React from 'react'


// Basic1というReactの関数コンポーネント
// propsは親コンポーネントから子コンポーネントへデータを渡すためのもの
const Basic1 = (props) => {
  // clickHandlerという名前の関数を定義
  const clickHandler = () => {
    console.log('clicked')
  }

  // 表示内容をreturn
  // 表示する内容には、<button>要素と2つの<h1>要素が含まれる
  return (
    <>
      <button onClick={clickHandler}>click</button>
      <h1>Hello { props.name }</h1>
      <h1>Hello React</h1> 
    </>
  )
}

export default Basic1

