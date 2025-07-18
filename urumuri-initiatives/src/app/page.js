import Image from "next/image";
import SignupJobseekeer from "./Jobseeker/page";
export default function Home() {
  return (
  <div>
    <h1 className="my-8">Welcome to Urumuri Initiatives</h1>
    <SignupJobseekeer />
  </div>
  );
}
