import { Download } from "lucide-react";
import Term from "../components/Term";
import { Link } from "react-router-dom";
import AddTermModal from "../components/AddTermModal";
import { useContext } from "react";
import { ProfileContext } from "../context/useProfileContext";

const Home = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="navbar-start">
          <span className="btn btn-ghost text-xl font-bold">
            <Link to="/">UW Planr</Link>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="tooltip tooltip-left" data-tip="Download a JSON profile and re-use whenever needed.">
            <button className="btn btn-outline btn-primary"><Download size={20} />Download</button>
          </div>
        </div>
      </div>
      {profile.length === 0 ? 
        (
          <div className="w-full h-[85vh] flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-2xl font-bold">Add Term</h1>
            <AddTermModal />
          </div>
        ) : (
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              profile.map((term, index) => <Term term={term} key={index} />)
            }
            <div className="flex justify-center items-center">
              <AddTermModal />
            </div>
          </div>
        )}
    </>
  );
};

export default Home;
