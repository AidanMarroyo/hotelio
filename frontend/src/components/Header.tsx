import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import SignOutButton from './SignOutButton';
import { Button } from 'flowbite-react';

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className='bg-[#EAF1F4] py-6'>
      <div className='container mx-auto flex justify-between'>
        <Link to='/'>
          <img className='max-h-20' src='/logo.svg' alt='Travel Agency' />
        </Link>
        <span className='flex space-x-2'>
          {isLoggedIn ? (
            <>
              <Link className='flex items-center ' to='/my-bookings'>
                <Button className='flex items-center bg-[#2C3E50] text-[#EAF1F4] px-3 font-bold hover:bg-[#34495E]'>
                  My Bookings
                </Button>
              </Link>
              <Link className='flex items-center' to='/my-hotels'>
                <Button className='flex items-center bg-[#3498DB] text-[#EAF1F4] px-3 font-bold hover:bg-[#5DADE2]'>
                  My Hotels
                </Button>
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link to='/sign-in' className='flex items-center'>
              <Button className='flex items-center bg-[#2C3E50] text-[#EAF1F4] px-3 font-bold hover:bg-[#34495E]'>
                Sign In
              </Button>
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
