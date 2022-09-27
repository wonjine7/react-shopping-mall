import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menulist = ['여성', 'Divied', '남성', '신생아/유아' , 'Hnm HOME','Sale','지속가능성',];
  return (
    <div>
     
      <div>
        <div class='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
        </div>
        
      </div>

      <div className='nav-section'>
        <img 
        width={100}
        src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1968-1999.png'/>
      </div>

      <div className='menu-area'>
        <ul className='menu-list'>
             {menulist.map(menu=><li>{menu}</li>)}
        </ul>
        <div className='menu-search'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type='text'/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
