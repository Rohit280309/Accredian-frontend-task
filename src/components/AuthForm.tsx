import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Form, FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import axios from "../api/axios";

const AuthForm = ({ type }: { type: string }) => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const authFormSchema = (type: string) => z.object({
    name: type === "login" ? z.string().optional() : z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8)
  });

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "login") {
        const res = await axios.post("/login", { email: data.email, password: data.password });
        if (res.data.success) {
          toast.success("Login Successful");
          localStorage.setItem("token", res.data.token)
          navigate("/");
        }
        else {
          toast.success("Login Failed");
        }
      } else if (type === "signup") {
        const res = await axios.post("/signup", { name: data.name, email: data.email, password: data.password });
        if (res.data.success) {
          toast.success("Signup Successful");
          navigate("/login");
        }
      }

    } catch (error: any) {
      toast.error("Error")
    }

  }


  return (
    <section className="w-1/2 gap-5">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {
            type === "signup" && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label">Name</FormLabel>
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          className="input-class"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="form-message mt-2" />
                    </div>
                  </div>
                )}
              />
            )
          }
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <div className="form-item">
                <FormLabel className="form-label">Email</FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      className="input-class"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="form-message mt-2" />
                </div>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <div className="form-item">
                <FormLabel className="form-label">Password</FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      className="input-class"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="form-message mt-2" />
                </div>
              </div>
            )}
          />
          <div className="flex flex-col gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
                </>
              ) : type === "login" ? (
                "Login"
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>

        </form>
      </Form>
      <p className="flex justify-center text-gray-500 font-semibold">
        {type === "signup" ? "Already have an account? " : "Don't have an account? "}
        <Link className="ml-1" to={type === "signup" ? "/login" : "/signup"}>{type === "signup" ? "Login" : "Signup"}</Link>
      </p>

    </section>
  )
}

export default AuthForm