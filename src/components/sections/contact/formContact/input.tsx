import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormSchema } from "./form";

interface InputProps{
  type?:string;
  placeholder:string;
  name:keyof FormSchema;
  register:UseFormRegister<FormSchema>;
  error?:string;
  rules?:RegisterOptions;
  labelName:string;
  isTextArea?:boolean;
}


export function Input({type, placeholder, name, register, error, rules, labelName, isTextArea = false}:InputProps){
    return(
       <div className="space-y-4">
            <label htmlFor={`input-${name}`} className="font-bold text-gray-900 block">{labelName} <span className="font-normal text-gray-700">(Required)</span></label>
            {
                isTextArea ? (
                    <>
                        <textarea
                        id={`input-${name}`}
                        className={`w-full px-5 py-3 rounded-lg resize-none border border-gray-200  [&:hover,&:focus]:outline-primary-700 ${error ? "border-red-400" : ""}`}
                        placeholder="Type your message"
                        rows={5}
                        {...register(name,rules)}
                        />
                        {
                            error && <span className="text-red-400">{error}</span>
                        }
                    </>
                ):(
                    <>
                        <input
                        className={`w-full px-5 rounded-lg leading-12 border border-gray-200  [&:hover,&:focus]:outline-primary-700 ${error ? "border-red-400" : ""}`}
                        type={type}
                        placeholder={placeholder}
                        id={`input-${name}`}
                        {...register(name,rules)}
                        />
                        {error && <span className="text-red-400">{error}</span>}
                        
                        </>
                        
                   )
                }
            
       </div>
    )
}