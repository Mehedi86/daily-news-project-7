'use client'

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAppDispatch } from "../redux/hooks";
import { addSubmission } from "./informationSlice";


type Inputs = {
  name: string;
  id: string;
  email: string;
  address: string;
  hobby: string;
  occupation: string;
};


export default function page() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const occupationOptions = [
    { id: 'dsjfh', occupationName: 'Engineer' },
    { id: 'sdkjfh', occupationName: 'Teacher' },
    { id: 'kjsdh', occupationName: 'Advocate' },
    { id: 'uyebf', occupationName: 'Businessman' },
  ]
  const dispatch = useAppDispatch();
  const onsubmit: SubmitHandler<Inputs> = (data) => dispatch(addSubmission(data))

  return (
    <div className="py-12">
      <form onSubmit={handleSubmit(onsubmit)} className="max-w-md mx-auto space-y-4 rounded-xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-center">
          User Information
        </h2>

        <div className="space-y-1">
          <label className="text-sm font-medium">Name</label>
          <Input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">ID</label>
          <Input
            type="text"
            placeholder="Enter your ID"
            {...register("id")}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Hobby</label>
          <Input
            type="text"
            placeholder="Your hobby"
            {...register("hobby")}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Address</label>
          <Input
            type="text"
            placeholder="Your address"
            {...register("address")}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Occupation</label>
          <Controller
            name="occupation"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select occupation" />
                </SelectTrigger>
                <SelectContent>
                  {occupationOptions.map(option => (
                    <SelectItem key={option.id} value={option.occupationName}>
                      {option.occupationName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>

    </div>
  )
}
