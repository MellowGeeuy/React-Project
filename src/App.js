import Transaction from "./component/Transaction"
import Item from "./component/Item"
import './App.css'


const Title = () => <h1>โปรแกรมบีญชีรายรับ รายจ่าย</h1>
const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>


// Root Component
const App = () => {
  return (
    <div className="container">
      <Title/>
      <Item/>

    </div>
  )
}

export default App;
