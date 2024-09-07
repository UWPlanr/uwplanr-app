import { Plus, X } from "lucide-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { ProfileContext } from "../context/useProfileContext";
import { EMPTY_COURSE } from "../utils/constants";

type Props = {
    term: Term;
};

const AddCourseModal = ({ term }: Props) => {
  const { profile, changeProfile } = useContext(ProfileContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<GradeCourse>(EMPTY_COURSE);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onAdd = async () => {
    if (profile.map(term => term.courses.map(course => course.code)).flat().includes(course.code)) {
      setCourse(EMPTY_COURSE);
      (document.getElementById(`add-course-${term.code}-modal`) as HTMLDialogElement).close();
      toast.error("Course has already been added.");
      return;
    };
    if (isNaN(parseInt(course.grade)) && course.grade !== "") {
      setCourse(EMPTY_COURSE);
      (document.getElementById(`add-course-${term.code}-modal`) as HTMLDialogElement).close();
      toast.error("Grade is invalid.");
      return;
    };
    if (parseInt(course.grade) < 0 || parseInt(course.grade) > 100) {
      setCourse(EMPTY_COURSE);
      (document.getElementById(`add-course-${term.code}-modal`) as HTMLDialogElement).close();
      toast.error("Grade is invalid.");
      return;
    };
    setLoading(true);
    let refresh = false;
    await fetch(`${import.meta.env.VITE_SERVER_URL}/grab_course/${course.code.toUpperCase().trim()}`, { method: "GET" }).then(response => response.json()).then(data => {
      if (Object.keys(data.course).length !== 0) {
        const newCourses = [...(term.courses), { ...(data.course), grade: course.grade }];
        changeProfile(profile.map(profileTerm => profileTerm.index === term.index ? ({ ...profileTerm, courses: newCourses }) : profileTerm ));
        refresh = true;
      } else {
        toast.error(`${course.code} not found.`);
      };
    }).catch(error => {
      toast.error(JSON.stringify(error));
      return;
    }).finally(() => {
      setLoading(false);
      setCourse(EMPTY_COURSE);
      (document.getElementById(`add-course-${term.code}-modal`) as HTMLDialogElement).close();
      if (refresh) window.location.reload();
    });
  };
  
  return (
    <>
        <button className="btn btn-circle btn-ghost" onClick={() => (document.getElementById(`add-course-${term.code}-modal`) as HTMLDialogElement).showModal()}><Plus /></button>
        <dialog id={`add-course-${term.code}-modal`} className="modal">
            <div className="modal-box">
                <form method="dialog">
                  <button disabled={loading} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><X /></button>
                </form>
                <h3 className="font-bold text-lg">{`${term.season} ${term.year} - ${term.code}`}</h3>
                <span className="block text-gray-500 italic text-sm">Separate the subject code and catalog number; e.g.: MATH135 to MATH 135.</span>
                <span className="block text-gray-500 italic text-sm">Leave the grade field empty if the grade is undecided.</span>
                <div className="w-full flex items-center gap-2 mt-4">
                    <input disabled={loading} onChange={event => handleChange(event)} name="code" value={course.code} type="text" placeholder="Course" className="w-full input input-bordered" />
                    <input onChange={event => handleChange(event)} name="grade" value={course.grade} type="text" placeholder="Grade" className="w-full input input-bordered" />
                </div>
                <div className="modal-action">
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
