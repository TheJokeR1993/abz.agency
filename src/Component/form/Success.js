import { useEffect } from 'react'
import image from '../../img/success-image.png'
import { connectFirstCard } from '../../redux/connect'
import store from '../../redux/redux'
const Success =()=>{
    useEffect(() => {
       store.dispatch(connectFirstCard())
    }, [])
    
   
return <div className="form_div">
    <h1>User successfully registered</h1>
    <img src={image} alt=""/>
</div>
}
export default Success