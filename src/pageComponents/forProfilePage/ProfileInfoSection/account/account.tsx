import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Account = () => {

    return(
        <Card className="border-4 dark:border-neutral-800 text-center sm:text-start flex flex-col *:w-full items-center sm:items-start">
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:flex-nowrap w-full  sm:gap-20">
          <div className="space-y-1 w-full min-w-sm  max-w-sm">
            <label htmlFor="name">Firts Name</label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="space-y-1  w-full max-w-sm">
            <label htmlFor="name">Last Name</label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:flex-nowrap w-full  sm:gap-20 ">
          <div className="space-y-1 max-w-sm w-full">
            <label htmlFor="username">Username</label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
          <div className="space-y-1 max-w-sm w-full">
            <label htmlFor="number">Number</label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
          </div>
          <div className="flex justify-center sm:justify-start">
          <div className="space-y-1 max-w-sm w-full ">
            <label htmlFor="address">Address</label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
          </div>
        </CardContent>
        <CardFooter className="gap-5">
          <Button className="max-w-sm m-auto sm:m-0 w-full sm:max-w-40">Update Profile</Button>
        
        </CardFooter>
      </Card>
    )
}


export default Account;