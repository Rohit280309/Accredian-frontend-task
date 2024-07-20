import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import axios from "@/api/axios";
import { toast } from "sonner";


const ReferForm = () => {

  const referFormSchema = () => z.object({
    yourName: z.string().min(2, "Your name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    friendName: z.string().min(2, "Friend's name must be at least 2 characters long"),
    friendEmail: z.string().email("Invalid email address"),
    friendPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format").optional(),
    course: z.string()
  });

  const formSchema = referFormSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {

    const headers = {
      'auth-token': localStorage.getItem('token')
    }

    if (data.email === data.friendEmail) {
      toast.error("You can't refer yourself")
      return;
    }

    axios.post("/refer", {
      yourName: data.yourName,
      yourEmail: data.email,
      friendName: data.friendName,
      friendEmail: data.friendEmail,
      course: data.course,
      friendPhone: data.friendPhone
    }, { headers })
    .then((res) => {
      if (res.data.success) {
        toast.success("Refferal Sent");
      }
    })
    .catch((err: any) => {
      toast.error("Error sending referral")
      console.log(err);
    })

  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="yourName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name*</FormLabel>
                <FormControl>
                  <Input className="text-black font-semibold" placeholder="Enter your name..." {...field} />
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
                <FormLabel>Your Email*</FormLabel>
                <FormControl>
                  <Input className="text-black font-semibold" placeholder="Enter your email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="friendName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Friend's Name*</FormLabel>
                <FormControl>
                  <Input className="text-black font-semibold" placeholder="Enter friend's name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="friendEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Friend's Email*</FormLabel>
                <FormControl>
                  <Input className="text-black font-semibold" placeholder="Enter friend's email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Course1">Course 1</SelectItem>
                    <SelectItem value="Course2">Course 2</SelectItem>
                    <SelectItem value="Course3">Course 3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="friendPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Friend's Phone no</FormLabel>
                <FormControl>
                  <Input className="text-black font-semibold" placeholder="Enter friend's phone no..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default ReferForm