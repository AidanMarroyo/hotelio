const Footer = () => {
  return (
    <div className='bg-[#EAF1F4] py-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <span className='text-3xl text-[#424141] font-bold tracking-tight'>
          Hotelio | Around the World
        </span>
        <span className='text-[#424141] font-bold tracking-tight flex gap-4'>
          <p className='cursor-pointer'>Privacy Policy</p>
          <p className='cursor-pointer'>Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
