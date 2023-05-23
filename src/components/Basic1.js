import React, {useState} from 'react'


const Basic1 = (props) => {
  // この関数は使わなくなった
  const clickHandler = () => {
    console.log('clicked')
  }
// useStateの使用
// count：状態変数, setCount：更新関数
  const [count, setCount] = useState(0)

  return (
    <>
    {/* useStateフックから取得したsetCount関数を使用して、現在のカウント（count）に1を加えることで、カウントの新しい状態を設定 */}
      <button onClick={() => setCount(count+1)}>Count {count}</button>

      <h1>Hello { props.name }</h1>
      <h1>Hello React</h1> 
    </>
  )
}

export default Basic1

