import { Inter } from "next/font/google";

import Header from "@/components/header";
import Mainbody from "@/components/mainbody";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Mainbody />
    </div>
  );
}
