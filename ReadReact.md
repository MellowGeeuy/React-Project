ReactDOM Render Html 
    เมื่อหน้าเว็บโหลดเสร็จเรียบร้อย Web browser มันจะสร้าง DOM ของหน้านั้นขึ้นมา โดยมอง HTML เป็น Object หรือเรียกว่า DOM (Document Object Model)
    ** Tag ต่างๆใน DOM จะเรียกว่า Element

ReactDOM เป็น Library เหมือนกับ React ทำหน้าที่เฉพาะในการจะดการกับ DOM และใช้เฉพาะกับ React เท่านั้น
    ** ReactDOM.render() จะทำการสร้าง DOM(Vitual DOM) ที่มีลักษณะของโครงาร้างต้นไม้ แล้วนำโครงสร้างดังกล่าวลงไปยัง DOM จริงๆ (real DOM) ซึ่งเป้นวิธีในการ Render JSX ออกมาแสดงผลทางหน้าจอ ยกตัวอย่างเช่น 

    ReactDOM.render(<p>Hello World</p>,document.getElementByid('root'));

    หรืออีกแบบ

    const data = (
        <div>
            <h1> HelloWorld </h1>
        </div>
    );

    ReactDOM.render(data,document.getElementByid('root'))

    ------------------------------------------------------

    รูปแบบการสร้าง Component [โดยทั้งคู่จะ ReturnHTML ออกมาและเขียน JSX ด้านในส่วนของการ Return]

    1) Class Component


    2) Functional component
    -เป็นการสร้าง Function และ Return HTML ออกมา **กำหนดให้ตัวอักษรแรกของ Function เป็นตัว Capitalize เสมอ
    EX 
    
    function HelloComponent () {
        return <h1>Hello</h1>;
    }

    ReactDOM.render(<HellComponent/>,document.getElementByid('root));

    // Create Component
// function HelloComponent () {
//     return <h1>HI Component</h1>
// }
// Create Class Component
// class HelloComponent extends React.Component {
//   render() {
//     return <h1>HI IH</h1>
//   }
// }

--------------------------------------------------------------

React JSX 
-การใส่ Class Style ที่เป็น Attribute ใน JSX จะมีการหนด className แทน class เพราะว่า class = keyword

