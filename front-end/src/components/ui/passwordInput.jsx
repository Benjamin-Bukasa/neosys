import { useState } from 'react';
// import Button from './button';
import { Eye, EyeClosed } from "lucide-react"

const PasswordInput = ({className, placeholder, label, value}) => {

    const [ishidden, setIsHidden] = useState(true)

    const handleVisible =()=>{
      setIsHidden(!ishidden)
      console.log("it's working !");
      
    }

  return (
    <>
    <div className="w-full flex flex-col justify-start items-start gap-2 text-md text-neutral-700 font-semibold">
      <p>{label}</p>
      <p className={`flex items-center justify-between px-2 border border-2 border-neutral-600/10 rounded-lg focus:border-neutral-600/20 ${className}`}>
          <input 
              type={ishidden ? "password" : "text"}
              className={`py-2 shadow-sm outline-none focus:border-none`}
              placeholder={placeholder}
              value={value}
              />
          <span onClick={handleVisible} className={`text-neutral-600`} >
              {ishidden ? <EyeClosed size={20}/> : <Eye size={20}/>}
          </span>
      </p>
    </div>
    </>
  );
}

export default PasswordInput;
