"use client";

import InputForm from "@/components/InputForm";
import Result from "@/components/Result";
import { calculateAge } from "@/lib/utils";
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
      setAge(age);
    } else {
      console.error("Failed to calculate age");
    }

    // console.log(age);
  };

  return (
    <section className="bg-off_white min-h-svh max-w-[1440px] mx-auto flex align-center justify-center py-48 lg:px-[450px]">
      <div className="bg-white max-w-[93%] rounded-[25px] rounded-br-[130px] px-6 py-12 space-y-14">
        <InputForm onSubmit={handleSubmit} />
        <Result age={age} />
      </div>
    </section>
  );
};

export default HomePage;
