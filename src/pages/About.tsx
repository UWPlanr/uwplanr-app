import { Github, Laptop, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <span className="btn btn-ghost text-xl font-bold">
            <Link to="/">UW Planr</Link>
          </span>
        </div>
      </div>
      <div className="p-4 mb-4 w-full flex flex-col md:flex-row justify-evenly items-center gap-4">
        <div className="p-2 card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="w-44 rounded-full" src="/yassa.jpeg" />
          </figure>
          <div className="card-body">
            <div className="card-title">
              <h1>Yassa Taiseer</h1>
            </div>
            <p>Sophmore Combinatorics & Optimization and Statistics student. Incoming SWE @ Hitachi.</p>
            <div className="flex gap-x-2">
              <Link to="https://github.com/yassataiseer" className="btn btn-circle btn-ghost">
                <Github />
              </Link>
              <Link to="https://yassataiseer.netlify.app/" className="btn btn-circle btn-ghost">
                <Laptop />
              </Link>
              <Link to="https://www.linkedin.com/in/yassa-taiseer/" className="btn btn-circle btn-ghost">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="w-44 rounded-full" src="/hamza.jpeg" />
          </figure>
          <div className="card-body">
            <div className="card-title">
              <h1>Muhammad Hamza</h1>
            </div>
            <p>Sophmore Computer Science student.</p>
            <div className="flex gap-x-2">
              <Link to="https://github.com/Muh-Hamza-99" className="btn btn-circle btn-ghost">
                <Github />
              </Link>
              <Link to="https://pseudoinertiadevhamza.netlify.app/" className="btn btn-circle btn-ghost">
                <Laptop />
              </Link>
              <Link to="https://www.linkedin.com/in/hamzaasad/" className="btn btn-circle btn-ghost">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full flex justify-center items-center">
        <p className="text-center">If you have any questions or want to report potential issues, please send an email to <span className="text-primary font-bold">uwplanr@gmail.com</span>.</p>
      </div>
    </>
  );
};

export default About;
