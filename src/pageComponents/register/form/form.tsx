import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/componentsShadcn/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/componentsShadcn/ui/form"
import { Input } from "@/componentsShadcn/ui/input"


const formSchema = z.object({
  firstname: z
    .string()
    .nonempty({ message: "Firs Name is required" }),
  lastname: z
    .string()
    .nonempty({ message: "Last Name is required" }),
  nickname: z
    .string()
    .nonempty({ message: "Nickname is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(8, {message: "Password must be at least 8 characters."})
    .nonempty({ message: "Password is required" }),
});
 


const RegisterForm = () =>{
     
 // 1. Define your form.
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname:"",
      lastname:"",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

     return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col items-center space-y-6 max-w-xs *:w-full px-2 w-full dark:text-white">
            <div className="space-y-3">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="rando1" {...field} />
                  </FormControl>
         
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="randomadze" {...field} />
                  </FormControl>
         
                  <FormMessage />
                </FormItem>
              )}
            />
           
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="something@gmail.com" {...field} />
                  </FormControl>
         
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="something" {...field} />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />
            </div> 
            <Button className="" type="submit">Register</Button>
            <FormDescription>
            <div className="flex justify-center gap-2">
              <h1 className="text-sm text-gray-600 dark:text-gray-500">Already have an account?</h1>
              <h1 className="text-sm text-purple-900 font-semibold hover:underline cursor-pointer">Log In</h1>
            </div>
            </FormDescription>
          </form>
        </Form>
      )
} 
    


export default RegisterForm;