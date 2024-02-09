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