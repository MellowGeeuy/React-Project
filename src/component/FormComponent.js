// รับข้อมูลผู้ใช้ผ่าน Form

const FormComponent = () => {
    return(
       <div>
        <form>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ"/>
            </div>
        </form>
       </div>
    )
}

