import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex item-center gap-2'>
      <input type="text" placeholder='Search...' className='input input-bordered round-full' />
      <button type='submit' className='btn btn-circle bg-orange-900 text-white'>
      <IoSearchSharp className ='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};

export default SearchInput;



