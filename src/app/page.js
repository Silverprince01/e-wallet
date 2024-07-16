import Image from "next/image";
import Link from "next/link";
import Auth from "./Components/Auth";
export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between px-40 ">
<Auth/>
    </main>
  );
}

