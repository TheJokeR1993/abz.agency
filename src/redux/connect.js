import api from "../api/api";
import { firstStateUsers } from "./card/cardRedux";
import {  getPosition} from "./form/formRedux";

export const connectFirstCard = () => dispatch =>{
    api.users(1)
    .then(i=>dispatch(firstStateUsers(i)))
    api.positions()
    .then((i) =>dispatch(getPosition(i.positions)))
}


