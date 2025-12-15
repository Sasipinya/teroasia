
 import { Kanit,Sarabun } from 'next/font/google';
export const kanit = Kanit({
  subsets: ["thai"],
  weight: ["400","600"],
  display: "swap",
  variable: "--font-kanit",
});

export const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["400","700"],
  display: "swap",
  variable: "--font-sarabun",
});
