
import ActiveLink from '../ActiveLink/ActiveLink';
import { Outlet } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdContactPhone, MdInfo } from 'react-icons/md';
import { TbArrowGuide } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <li>
            <ActiveLink className='w-full' to='/'>
              <span className='block w-64 flex items-center'>
                <AiFillHome className=' text-xl mr-2' />
                Home
              </span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className='w-full' to='/contact'>
              <span className='block w-64 flex items-center'>
                <MdContactPhone className=' text-xl mr-2' />
                Contact
              </span>
            </ActiveLink>
          </li>{' '}
          <li>
            <ActiveLink className='w-full' to='/information'>
              <span className='block w-64 flex items-center'>
                <MdInfo className=' text-xl mr-2' />
                Information
              </span>
            </ActiveLink>
          </li>{' '}
          <li>
            <ActiveLink className='w-full' to='/guide'>
              <span className='block w-64 flex items-center'>
                <TbArrowGuide className=' text-xl mr-2' />
                Guide
              </span>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;