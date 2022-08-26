import  '../../index.scss'
import logo from '../../img/Grouplogo.jpg'

function Header() {
    return <div className='header'>
        <div className='container header_div'>
            <div>
                <img alt="" src={logo} />
                <p>testtask</p>
            </div>
            <div>
                <button>Users</button>
                <button>Sign up</button>
            </div>
        </div>
    </div>
}

export default Header;