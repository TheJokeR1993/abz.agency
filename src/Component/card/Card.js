import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/api";
import "../../index.scss";
import {
  addChangeState,
  changeTotalUsers,
  unshiftChangeState,
} from "../../redux/card/cardRedux";
import Preloader from "../../spiner/Preloader";
import CardItem from "./CardItem";

function Card() {
  const { card, total_users } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const cardMemo = useMemo(() =>
    card.map((i,index) =>i===''
    ?<Preloader key={index}  /> 
    : <CardItem key={i.id} item={i} />)
  );
 
console.log(card);
  const click = () => {
    api.users().then((i) => {
      if(i.total_users===total_users){
        dispatch(addChangeState(i.users))
      }else{
        const count = i.total_users-total_users
        const arr=i.users.slice(count)
        api.users(1,count)
        .then(user=>{
          dispatch(addChangeState(arr))
          dispatch(unshiftChangeState(user.users))
          dispatch(changeTotalUsers(i.total_users))
        })
      }
    });
  };

  
  
  return  <div className="container">
      <div className="card">
        <h1 title="asdas">Working with GET request</h1>
        <div className="card_all">{cardMemo}</div>
        {total_users > card.length && (
          <button onClick={click}>Show more</button>
        )}
      </div>
    </div>
  
}

export default Card;
