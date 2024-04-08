import { FormEvent, useState } from 'react';
import { useSearchContext } from '../contexts/SearchContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate('/search');
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
      <div className='relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 xl:px-0 z-1'>
        <div className='container mx-auto mb-6 lg:mb-0'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl'>
            Find your next stay
          </h1>
          <p className='mb-6 text-gray-300 lg:mb-8 md:text-lg lg:text-xl'>
            Search low prices on hotels for your dream vacation...
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='grid gap-y-4 p-4 mt-8 w-full bg-white rounded-xl lg:gap-x-4 lg:grid-cols-7 lg:mt-12 dark:bg-gray-800 bg-blend-multiply'
        >
          <div className='lg:col-span-1'>
            <Label className='text-black mb'>Destination</Label>
            <TextInput
              placeholder='Where to?'
              className='text-md w-full focus:outline-none text-black'
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            />
          </div>
          <div className='flex items-center lg:col-span-3'>
            <div>
              <Label className='text-black mb'>Check-in</Label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date as Date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText='Check-in Date'
                className='min-w-half bg-white text-black p-2 rounded-xl focus:outline-none'
                wrapperClassName='min-w-full'
              />
            </div>
            <div>
              <Label className='text-black mb'>Check-in</Label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date as Date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText='Check-out Date'
                className='min-w-half bg-white text-black p-2 rounded-xl focus:outline-none'
                wrapperClassName='min-w-full'
              />
            </div>
          </div>
          <div className='flex gap-1'>
            <Label className='items-center  text-black'>
              Adults:
              <input
                className='text-black w-full p-1 rounded-xl focus:outline-none font-bold'
                type='number'
                min={1}
                max={20}
                value={adultCount}
                onChange={(event) =>
                  setAdultCount(parseInt(event.target.value))
                }
              />
            </Label>
            <Label className='items-center text-black'>
              Children:
              <input
                className='w-full p-1 rounded-xl focus:outline-none font-bold'
                type='number'
                min={0}
                max={20}
                value={childCount}
                onChange={(event) =>
                  setChildCount(parseInt(event.target.value))
                }
              />
            </Label>
          </div>
          <div className='flex gap-2'>
            <div className='flex items-center'>
              <Button
                className='flex items-center bg-[#2C3E50] text-[#EAF1F4] px-3 font-bold hover:bg-[#34495E]'
                type='submit'
              >
                Search
              </Button>
            </div>
            <div className='flex items-center'>
              <Button className='flex items-center bg-[#3498DB] text-[#EAF1F4] px-3 font-bold hover:bg-[#5DADE2]'>
                Clear
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
