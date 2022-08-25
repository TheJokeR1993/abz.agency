
import cardRedux from "./card/cardRedux";
import {configureStore} from '@reduxjs/toolkit'
import formRedux from "./form/formRedux";



const store = configureStore({
   reducer : {
      card : cardRedux,
      form : formRedux
   }
})


export default store