"use client";

import InputForm from "@/components/InputForm";
import Result from "@/components/Result";
import { calculateAge, isValidDate } from "@/lib/utils";
import { useState } from "react";

// const testAge = {
//   day: 26,
//   month: 3,
//   year: 33,
// };

interface AgeProps {
  day: number;
  month: number;
  year: number;
}

const HomePage = () => {
  const [age, setAge] = useState<AgeProps>({
    day: 0,
    month: 0,
    year: 0,
  });

  const handleSubmit = (values: {
    day: number;
    month: number;
    year: number;
  }) => {
    const age: AgeProps | undefined = calculateAge({ values });

    if (age) {
      isValidDate({ values });
      setAge(age);
    } else {
      console.error("Failed to calculate age");
    }

    // console.log(age);
  };

  return (
    <section className="bg-off_white min-h-svh max-w-[1440px] mx-auto pt-20 lg:py-40 lg:px-[400px]">
      <div className="bg-white max-w-[93%] rounded-[25px] mx-auto rounded-br-[130px] px-7 py-12 space-y-16 lg:space-y-10">
        <InputForm onSubmit={handleSubmit} />
        <Result age={age} />
      </div>
    </section>
  );
};

export default HomePage;
