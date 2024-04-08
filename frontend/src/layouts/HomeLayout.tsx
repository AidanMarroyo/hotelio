import Footer from '../components/Footer';
import Header from '../components/Header';

import SearchBar from '../components/SearchBar';

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div>
        <SearchBar />
      </div>
      <div className='container mx-auto py-10 flex-1'>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
