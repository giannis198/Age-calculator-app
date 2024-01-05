import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface calculateAgeProps {
  values: {
    day: number;
    year: number;
    month: number;
  };
}

export function calculateAge({ values }: calculateAgeProps) {
  try {
    if (values) {
      const birthDate = new Date(values.year, values.month - 1, values.day);
      const currentDate = new Date();

      // Calculate the difference in years, months, and days
      let year = currentDate.getFullYear() - birthDate.getFullYear();
      let month = currentDate.getMonth() - birthDate.getMonth();
      let day = currentDate.getDate() - birthDate.getDate();

      // Adjust negative values for months and days
      if (day < 0) {
        const lastMonthDays = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate();
        day += lastMonthDays;
        month--;
      }

      if (month < 0) {
        month += 12;
        year--;
      }
      console.log(`Age: ${year} years, ${month} months, ${day} days`);

      return { day, month, year };
    }
  } catch (error) {
    console.log("Error", error);
  }
}

export function isValidDate({ values }: calculateAgeProps) {
  var d = new Date(values.year, values.month, values.day);
  if (
    d.getFullYear() == values.year &&
    d.getMonth() == values.month &&
    d.getDate() == values.day
  ) {
    return true;
  }
  return false;
}
