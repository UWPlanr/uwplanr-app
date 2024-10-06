import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProfileContext } from "../context/useProfileContext";

import Term from "../components/Term";
import AddTermModal from "../components/AddTermModal";

const Plan = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold">
                <span className="text-green-500">UW</span>Planr
              </Link>
            </div>
          </div>
        </div>
      </nav>
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
    </div>
  );
};

export default Plan;
