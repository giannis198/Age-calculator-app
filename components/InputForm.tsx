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
import Image from "next/image";

const currentYear = new Date().getFullYear();

const formSchema = z.object({
  day: z.coerce
    .number()
    .lte(31, { message: "Must be a valid day" })
    .gt(0, { message: "Must be a valid day" })
    .int()
    .min(1),

  month: z.coerce
    .number()
    .lte(12, { message: "Must be a valid month" })
    .gt(0, { message: "Must be a valid month" })
    .int()
    .min(1),

  year: z.coerce
    .number()
    .min(4, { message: "Must be a valid year" })
    .int()
    .lte(currentYear, { message: "Must be in the past" }),
});

const InputForm: React.FC<{
  onSubmit: (values: { day: number; month: number; year: number }) => void;
}> = (props) => {
  const { onSubmit } = props;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      day: 0,
      month: 0,
      year: 1990,
    },
  });

  function submitForm(values: z.infer<typeof formSchema>) {
    onSubmit(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitForm)}
        className="space-y-16 lg:space-y-10"
      >
        <div className="flex gap-4 lg:w-[80%]">
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
            className="rounded-full w-16 h-16 lg:right-0 bg-purple absolute translate-y-[-50%]"
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
