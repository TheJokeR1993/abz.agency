import api from "../api/api";
import { firstStateUsers } from "./card/cardRedux";
import {  getPosition,onChangeState} from "./form/formRedux";

export const connectFirstCard = () => dispatch =>{
    api.users()
    .then(i=>dispatch(firstStateUsers(i)))
    api.positions()
    .then((i) =>dispatch(getPosition(i.positions)))
}


