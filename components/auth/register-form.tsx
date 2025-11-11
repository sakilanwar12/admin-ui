"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
type Inputs = {
  name: string;
  email: string;
  image?: string;
  password: string;
  confirmPassword: string;
};
const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push("/");
  };
  return (
    <form
      action="#"
      className="mt-3"
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
    >
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">name</Label>
          <Input
            id="name"
            {...register("name", { required: "Your name is required." })}
          />
          {errors.name && (
            <p className="text-xs text-danger mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register("email", { required: "Your Email is required." })}
          />
          {errors.email && (
            <p className="text-xs text-danger mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password" className="mb-0">
            Password
          </Label>
          <Input
            id="password"
            {...register("password", {
              required: "Your Password is required.",
            })}
          />
          {errors.password && (
            <p className="text-xs text-danger mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="confirmPassword" className="mb-0">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Your Password is required.",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-danger mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="mb-0">
            I accept
          </Label>
          <Link href="#" className="text-xs text-primary ">
            Terms and Conditions
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <Button size="md" className="py-0 w-full" type="submit">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
