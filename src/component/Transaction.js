import './Transaction.css'
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Transaction = () => {

  const data = [
    // {id:1 ,title:"ค่ารักษาพยาบาล",amount:"2000"},
    // {id:2,title:"เงินเดือน",amount:"20000"},
    // {id:3,title:"ค่าเดินทาง",amount:"3000"},
    // {id:4,title:"ค่าอาหาร",amount:"5000"},
    // {id:5,title:"ค่าคอนโด",amount:"4000"}

    {title:"ค่ารักษาพยาบาล",amount:2000},
    {title:"เงินเดือน",amount:20000},
    {title:"ค่าเดินทาง",amount:3000},
    {title:"ค่าอาหาร",amount:5000},
    {title:"ค่าคอนโด",amount:4000}

  ]

    return(
      // map loops
      <ul className="item-list">
      {data.map((element) => {
        // return <Item title={element.title} amount={element.amount} />
        return <Item 
                  title {...element} 
                  key = {uuidv4()} // uuid key
                /> 
      })}
  
    
    </ul>
    );
  }

  export default Transaction;


      // <ul className="item-list">
      //     <Item title={data[0].title} amount={data[0].amount}/>
      //     <Item title={data[1].title} amount={data[1].amount}/>
      //     <Item title={data[2].title} amount={data[2].amount}/>
      //     <Item title={data[3].title} amount={data[3].amount}/>
      //     <Item title={data[4].title} amount={data[4].amount}/>
      
      // </ul>

