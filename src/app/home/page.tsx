import Link from "next/link";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cream relative">


      <div className="flex flex-col items-start absolute left-4 bottom-4">
        <Link href="/technologies" className="text-white hover:text-green-200 transition duration-300 ease-in-out mb-2">
          Technologies
        </Link>
        <Link href="/projects" className="text-white hover:text-green-200 transition duration-300 ease-in-out mb-2">
          Projects
        </Link>
        <Link href="/about" className="text-white hover:text-green-200 transition duration-300 ease-in-out mb-2">
          About me
        </Link>
      </div>
    </div>
  );
};

export default Index;
