import "../../index.scss";
import photo from "../../img/Vector.jpg";
import {  useState } from "react";
import ReactTooltip from 'react-tooltip';

function CardItem(props) {
  const [imgSrc, setImgSrc] = useState(props.item.photo);
  const numberPhone = +props.item.phone + "";

  const phone = `+${numberPhone.slice(0, 2)} (${numberPhone.slice(2,5)}) ${numberPhone.slice(5, 8)} ${numberPhone.slice(8,10)} ${numberPhone.slice(10, 12)}`;

  return <div className="card_item">
      <img className="card_photo" alt="" onError={() => setImgSrc(photo)} src={imgSrc} />
      <p data-tip={props.item.name.length>25?props.item.name:''} data-for='toolName'   data-place="bottom">{props.item.name}</p>
      <ReactTooltip  arrowColor='rgba(255, 255, 255, 0);' id='toolName' getContent={(arg) => arg }/>
      <p>{props.item.position}</p>
      <p data-tip={props.item.email.length>25?props.item.email:'' } data-for='toolEmail'   data-place="bottom">{props.item.email} </p>
      <ReactTooltip arrowColor='rgba(255, 255, 255, 0);'  id='toolEmail' getContent={(arg) => arg }/>

      <p>{phone}</p>
    </div>
 
}

export default CardItem;
