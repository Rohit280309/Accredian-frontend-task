import { toast } from "sonner"
import ReferForm from "./ReferForm"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useRef } from "react"

const ReferButton = () => {

  const btnRef = useRef<any>(null);

  const checkLogin = () => {
    let token = localStorage.getItem("token");
    if(!token) {
      toast.message("Please login before sending referral")  
    }
    else {
      btnRef.current.click();
    }
  }

  return (
    <div>
      <Button onClick={checkLogin} className="bg-blue-600 hover:bg-blue-800 rounded-md">Refer Now</Button>
      <Dialog>
        <DialogTrigger><Button className="hidden" ref={btnRef}>Open</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Refer a friend</DialogTitle>
            <DialogDescription>
              <ReferForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ReferButton