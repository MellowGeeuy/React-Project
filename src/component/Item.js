import PropTypes from 'prop-types';


const Item = (props) => {
    //Properties Destucturing
    const {title,amount} = props;
    return (
        <li>{title}<span>{amount}</span></li>
    )
}

//proptypes 

//isRequired : บังคับให้มี Value ห้าม null
Item.propTypes = {
    title : PropTypes.string.isRequired,  
    amount : PropTypes.number.isRequired
}

export default Item





// React Props 
// Props (Properties) คือ ตัวแปรที่สามารุถส่งเข้าไปใน Components ได้ 
//ผ่านการกำหนด Attribute ส่งผลให้ Component แต่ละตัวสามารถรับค่าจากด้านนอกเข้าไปทำงานได้
//Syntax 
// <component properties = value/>

//Properties Destucturing