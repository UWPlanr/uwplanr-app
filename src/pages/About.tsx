import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";

import AboutMember from "../components/AboutMember";

const About = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
          <span className="btn btn-ghost text-xl font-bold">
            <Link to="/">UWPlanr</Link>
          </span>
        </div>
        <div className="flex-0">
          <Link className="btn btn-ghost btn-circle" to="https://buymeacoffee.com/uwplanr"><Coffee /></Link>
        </div>
      </div>
      <div className="p-4 mb-4 w-full flex flex-col md:flex-row justify-evenly items-center gap-4">
        <AboutMember name="Muhammad Hamza" description="Co-founder. Sophmore Computer Science student." github="https://github.com/Muh-Hamza-99" website="https://muhhamza.netlify.app/" linkedin="https://www.linkedin.com/in/hamzaasad/" image="/hamza.jpeg" />        
        <AboutMember name="Yassa Taiseer" description="Co-founder. Sophmore Combinatorics & Optimization and Statistics student. Incoming SWE @ Hitachi." github="https://github.com/yassataiseer" website="https://yassataiseer.netlify.app/" linkedin="https://www.linkedin.com/in/yassa-taiseer/" image="/yassa.jpeg" />
        <AboutMember name="Moayyad Shahid" description="Software Developer. Sophmore Mathematics student." github="https://github.com/MoayyadShahid" website="https://moayyadshahid.com/" linkedin="https://www.linkedin.com/in/moayyad-shahid-53baa71b6/" image="/moayyad.jpeg" />
      </div>
      <div className="p-4 w-full flex justify-center items-center">
        <p className="text-center">If you have any questions or want to report potential issues, please send an email to <span className="text-primary font-bold">uwplanr@gmail.com</span>.</p>
      </div>
    </>
  );
};

export default About;
