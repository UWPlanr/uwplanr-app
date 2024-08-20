import { useContext } from "react";
import { Ghost, Trash } from "lucide-react";

import EditTermModal from "./EditTermModal";
import AddCourseModal from "./AddCourseModal";

import { ProfileContext } from "../context/useProfileContext";
import { prereqCheckerWrapper } from "../utils/checkers";

type Props = {
    term: Term;
};

const Term = ({ term }: Props) => {
  const { profile, changeProfile } = useContext(ProfileContext);
  const onDelete = () => {
    changeProfile(profile.splice(0, profile.length - 1));
  };
  return (
    <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title flex justify-between">
                <span>{term.term}</span>
                <span>{`${term.season} ${term.year}`}</span>
            </h2>
            {term.courses.length !== 0 ? (<div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            term.courses.map((course, index) => (
                                <tr key={index}>
                                    <td className="tooltip tooltip-right" data-tip={course.requirements}>{course.code}</td>
                                    <td>{course.grade}</td>
                                    <td>
                                        { prereqCheckerWrapper(profile, course, term.term) ? 
                                            <span className="btn btn-xs btn-circle bg-green-500 hover:bg-green-500"></span> :
                                            <span className="btn btn-xs btn-circle bg-red-500 hover:bg-red-500"></span> }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>) : (
                <div className="h-full flex justify-center items-center">
                    <Ghost className="text-gray-500" size={40} />
                </div>
            )}
            <div className="card-actions justify-end mt-auto">
                <AddCourseModal term={term} />
                {term.courses.length === 0 ? null : <EditTermModal term={term} />}
                {term.courses.length === 0 ? term.term === profile[profile.length - 1].term ? <button onClick={onDelete} className="btn btn-circle btn-ghost"><Trash /></button> : null : null}
            </div>
        </div>
    </div>
  );
};

export default Term;
