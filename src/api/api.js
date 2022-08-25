import axios from "axios";
import Inputmask from "inputmask";
import { onChangeState } from "../redux/form/formRedux";
import store from "../redux/redux";

const errorF = (respon) =>
  respon.status === 200 ? respon.data : Promise.reject(respon);

const instos = axios.create({
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1/",
});

let num=1

const api = {
  users: (page,count) =>
    instos.get(`users?page=${page?page:num++}&count=${count?count:6}`)
      .then(errorF),
  positions: () => instos.get("positions")
  .then(errorF),
  usersId: (id) => instos.get(`users/${id}`)
  .then(errorF),
  usersPost: (arg) => instos
      .get("token")
      .then(errorF)
      .then((i) => {
        
        const mask = 380 + Inputmask.unmask(arg.phone, { mask: "+38 (099) 999 - 99 - 99" })
        var formData = new FormData();
        var fileField = document.querySelector('input[type="file"]');
        formData.append("position_id", +arg.position_id);
        formData.append("name", arg.name);
        formData.append("email", arg.email);
        formData.append("phone", mask);
        formData.append("photo", fileField.files[0]);
     
        
        fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
          method: "POST",
          body: formData,
          headers: { Token: i.token },
        })
        .then(response => response.json())  
        .then(data=>{
          console.log(data);
          if(data.success) {  
            store.dispatch(onChangeState({key:'success',value:true}))
           
           } else { 
             data.message==="Validation failed"
             ? store.dispatch(onChangeState({key:'error',value:data.fails}))
             : store.dispatch(onChangeState({key:'error',value:{phone:data.message,email:data.message}}))
             
             
           } })
      }),
};

export default api;
