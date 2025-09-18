'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { Input } from "./input"
import { Button } from "@/components/button"



const schema = z.object({
   name: z.string().min(1, 'Nome obrigatorio'),
   email:z.email('Email Invalido'),
    subject: z.string().min(1, 'Assunto Obrigatorio'),
    message: z.string().min(1, 'Mensagem Obrigatoria'),
})


type FormData = z.infer<typeof schema>










export function Form(){
    const {register, handleSubmit, formState: {errors, isSubmitSuccessful, isSubmitting}, reset} = useForm<FormData>({
    resolver: zodResolver(schema),
    mode:"onChange"
    })


  const onSubmit = async(data:FormData) => {
    console.log(data);
    reset()
  }
    
    return(
         <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-page-about p-8 bg-white rounded-2xl space-y-8">
            <Input
            type="text"
            labelName="Full Name"
            name="name"
            placeholder="John Doe"
            register={register}
            error={errors.name?.message}
            />
            <Input
            type="text"
            labelName="Email Address"
            name="email"
            placeholder="Enter your email"
            register={register}
            error={errors.email?.message}
            />
            <Input
            type="text"
            labelName="Subject"
            name="subject"
            placeholder="Enter your subject"
            register={register}
            error={errors.subject?.message}
            />
            <Input
            labelName="Message"
            name="message"
            placeholder="Type your message"
            register={register}
            error={errors.message?.message}
            isTextArea
            />


            <Button btnStyle="btnThird" className={`w-full ${isSubmitting ? "!cursor-not-allowed opacity-50" : ""}`} disabled={isSubmitting}> 
                {
                    isSubmitting ? "Sending Mensage..." : "Get In Touch"
                }
            </Button>

            {
                isSubmitSuccessful && (
                    <p className="text-green-500">Mensagem Enviada</p>
                )
            }
         </form>
    )
}