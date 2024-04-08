import { useMutation, useQueryClient } from 'react-query';
import * as apiClient from '../api-client';
import { useAppContext } from '../contexts/AppContext';
import { Button } from 'flowbite-react';

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('validateToken');
      showToast({ message: 'Signed Out!', type: 'SUCCESS' });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: 'ERROR' });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <span className='flex items-center '>
      <Button
        onClick={handleClick}
        className='flex items-center bg-[#2C3E50] text-[#EAF1F4] px-3 font-bold hover:bg-[#34495E] '
      >
        Sign Out
      </Button>
    </span>
  );
};

export default SignOutButton;
