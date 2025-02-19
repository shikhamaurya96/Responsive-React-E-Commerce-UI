import React,{useState} from 'react'
import useFetchCategory from '../../hooks/useFetchCategory'
import { useDispatch } from 'react-redux';
import { addCategory } from '../../store/categorySlice';


const SearchDropdown = () => {
  
const[value,setValue] = useState("");
const [ isOpen,setIsOpen] = useState(false);
const dispatch = useDispatch()
const category = useFetchCategory();

const handleDropdownClick = (option)=>{
  setValue(option)
  dispatch(addCategory(option))
  setIsOpen(false)
}

  return (
    <div className="flex items-center space-x-2 w-full max-w-md relative border border-black">
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            onFocus={()=>setIsOpen(true)}
           />
           {
          isOpen &&  (
            <ul className="absolute z-10  top-12 left-0 w-4/5 border border-black bg-white rounded-md shadow-lg mt-1">
          {category.map((option, index) => (
            <li
              key={index}
              onClick={()=>handleDropdownClick(option)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
          )
           }
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={()=>handleDropdownClick(value)}>
            Search
          </button>
        </div>

  )
}

export default SearchDropdown