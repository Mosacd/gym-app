import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import FormElement from "./form/form"

 




const LogIn = () =>{
  return(
    <Dialog>
  <DialogTrigger>Log in</DialogTrigger>
  <DialogContent className="rounded-2xl max-w-xs">
    <DialogHeader>
      <DialogTitle className="text-2xl dark:text-neutral-400 text-center">Sign In</DialogTitle>
      <DialogDescription className="text-left">
      <FormElement/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
} 

export default LogIn