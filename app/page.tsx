import Image from "next/image";
import localFont from "next/font/local";
import Balancer from 'react-wrap-balancer'
import { SkillTinyBlock } from "@/components/skillsRectangle";
import Link from "next/link";


const redaction35Italic = localFont({
  src: "../public/font/Redaction35-Italic.otf",
});
const redaction35 = localFont({
  src: "../public/font/Redaction35-Regular.otf",
});
const redaction35Bold = localFont({
  src: "../public/font/Redaction35-Bold.otf",
});
const redaction20 = localFont({
  src: "../public/font/Redaction20-Regular.otf",
});
const redaction20Italic = localFont({
  src: "../public/font/Redaction20-Italic.otf",
});
const redaction10 = localFont({
  src: "../public/font/Redaction10-Regular.otf",
});
const redaction10Italic = localFont({
  src: "../public/font/Redaction10-Italic.otf",
});
const redaction = localFont({ src: "../public/font/Redaction-Regular.otf" });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-6 text-md">
      <div className={`flex flex-col gap-y-8`}>
        <div className={`${redaction35.className} text-4xl`}>
          <Balancer>my name is Arthur
            <br />
            and I code web things.
          </Balancer>
        </div>

        <Link href={"https://www.artschur.com"} className="text-lg text-cyan-800">
          <span className="underline decoration-gray-800">fullstack developer</span> @ vios tecnologia
        </Link>

        <section className="text-lg justify-between flex flex-row gap-x-16">
          <div>im from 🇧🇷 🇱🇺 <br /> the tools i use are <span className=" underline "> nextjs</span>, <span className=" underline "> react </span>, <span className=" underline ">typescript.</span> </div>
          <span> currently working at <Link href="https://www.artschur.com" className="underline decoration-gray-900 "> reading-recs</Link>.</span>
        </section>

      </div>
    </main >
  );
}
