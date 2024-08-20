import { Plus } from "lucide-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { ProfileContext } from "../context/useProfileContext";

type Props = {
    term: Term;
};

const emptyCourse: GradeCourse = { code: "", title: "", faculty: "", description: "", requirements: "", prereqs: "", coreqs: "", antireqs: "", termsOffered: [], minLevel: "", finalized: true, grade: "" };

const AddCourseModal = ({ term }: Props) => {
  const { profile, changeProfile } = useContext(ProfileContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<GradeCourse>(emptyCourse);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCourse(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onAdd = async () => {
    if (profile.map(term => term.courses.map(course => course.code)).flat().includes(course.code)) {
      setCourse(emptyCourse);
      (document.getElementById(`add-course-${term.term}-modal`) as HTMLDialogElement).close();
      toast.error("Course has already been added.");
      return;
    };
    if (!course.grade || isNaN(parseInt(course.grade))) {
      setCourse(emptyCourse);
      (document.getElementById(`add-course-${term.term}-modal`) as HTMLDialogElement).close();
      toast.error("Invalid course grade.");
      return;
    };
    if (parseInt(course.grade) < 0 || parseInt(course.grade) > 100) {
      setCourse(emptyCourse);
      (document.getElementById(`add-course-${term.term}-modal`) as HTMLDialogElement).close();
      toast.error("Grade is invalid.");
      return;
    };
    setLoading(true);
    let refresh = false;
    await fetch(`${import.meta.env.VITE_SERVER_URL}/grab_course/${course.faculty}/${course.code}`, { method: "GET" }).then(response => response.json()).then(data => {
      console.log(data);
      if (Object.keys(data.course).length !== 0) {
        const newCourses = [...(term.courses), { ...(data.course), grade: course.grade }];
        changeProfile(profile.map(profileTerm => profileTerm.term === term.term ? ({ ...profileTerm, courses: newCourses }) : profileTerm ));
        refresh = true;
      } else {
        toast.error(`${course.code} not found.`);
      };
    }).catch(error => {
      toast.error(JSON.stringify(error));
      return;
    }).finally(() => {
      setLoading(false);
      setCourse(emptyCourse);
      (document.getElementById(`add-course-${term.term}-modal`) as HTMLDialogElement).close();
      if (refresh) window.location.reload();
    });
  };
  
  return (
    <>
        <button className="btn btn-circle btn-ghost" onClick={() => (document.getElementById(`add-course-${term.term}-modal`) as HTMLDialogElement).showModal()}><Plus /></button>
        <dialog id={`add-course-${term.term}-modal`} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{`${term.term} - ${term.season} ${term.year}`}</h3>
                <span className="text-gray-500 text-sm italic mt-2">Put 'TBD' for grade if it is to be determined.</span>
                <div className="w-full flex items-center gap-2 mt-4">
                    <select name="faculty" value={course.faculty} disabled={loading} onChange={event => handleChange(event)} className="select select-bordered w-full">
                        <option value="ENV">Environment</option>
                        <option value="MAT">Math</option>
                        <option value="ENG">Engineering</option>
                        <option value="SCI">Science</option>
                        <option value="ART">Arts</option>
                        <option value="AHS">Applied Health Sciences</option>
                    </select>
                    <input disabled={loading} onChange={event => handleChange(event)} name="code" value={course.code} type="text" placeholder="Course" className="w-full input input-bordered" />
                    <input onChange={event => handleChange(event)} name="grade" value={course.grade} type="text" placeholder="Grade" className="w-full input input-bordered" />
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button disabled={loading} className="btn btn-error">Close</button>
                    </form>
                    <button onClick={onAdd} disabled={loading} className="btn btn-primary">
                      { loading ? <span className="loading loading-spinner"></span> : "Add" }
                    </button>
                </div>
            </div>
        </dialog>
    </>
  );
};

export default AddCourseModal;
