"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Circle, icons } from "lucide-react";
import Image from "next/image";

const currentYear = new Date().getFullYear();

const formSchema = z.object({
  day: z.coerce
    .number()
    .lte(31, { message: "Must be a valid day" })
    .gt(0, { message: "Must be a valid day" })
    .int(),

  month: z.coerce
    .number()
    .min(1)
    .int()
    .lte(12, { message: "Must be a valid month" })
    .gte(0, { message: "Must be a valid month" }),
  year: z.coerce
    .number()
    .min(4, { message: "Must be a valid year" })
    .int()
    .lt(currentYear, { message: "Must be in the past" }),
});

const InputForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const userBirthday = Object.values(values);
    console.log(userBirthday);

    const currentDate = new Date();
    console.log(currentDate);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="day"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="form__label">day</FormLabel>
                <FormControl className="border-light_grey">
                  <Input className="form__input" placeholder="DD" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="month"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="form__label">month</FormLabel>
                <FormControl className="border-light_grey">
                  <Input className="form__input" placeholder="MM" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="form__label">year</FormLabel>
                <FormControl className="border-light_grey">
                  <Input
                    className="form__input"
                    placeholder="YYYY"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-center relative">
          <Separator className="h-0.5" />

          <Button
            size="icon"
            className="rounded-full w-16 h-16 bg-purple absolute translate-y-[-50%]"
            type="submit"
          >
            <Image
              src="/icon-arrow.svg"
              height={20}
              width={20}
              alt="arrow down"
            />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InputForm;
