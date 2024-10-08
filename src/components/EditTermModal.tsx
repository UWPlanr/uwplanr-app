import { useContext, useState } from "react";
import { Edit, Trash, X } from "lucide-react";

import { ProfileContext } from "../context/useProfileContext";

type Props = {
    term: Term;
};

const EditTermModal = ({ term }: Props) => {
  const { profile, changeProfile } = useContext(ProfileContext);
  const [courses, setCourses] = useState<GradeCourse[]>(term.courses);
  const [validGrades, setValidGrades] = useState<boolean[]>(new Array(term.courses.length).fill(true));
  const onEditGrade = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCourses = courses.map(course => course.code === event.target.name ? ({ ...course, grade: event.target.value }) : course)
    setCourses(newCourses);
    setValidGrades(newCourses.map(course => (parseInt(course.grade) >= 0 && parseInt(course.grade) <= 100) || course.grade === ""));
  };
  const onDeleteGrade = (courseCode: string) => {
    const newCourses = courses.filter(course => course.code !== courseCode);
    setCourses(newCourses);
  };
  const onEdit = () => {
    changeProfile(profile.map(profileTerm => profileTerm.index === term.index ? ({ ...profileTerm, courses }) : profileTerm));
    (document.getElementById(`edit-term-${term.code}-modal`) as HTMLDialogElement).close();
  };
  return (
    <>
        <button className="btn btn-circle btn-ghost" onClick={() => {setCourses(profile[term.index].courses); (document.getElementById(`edit-term-${term.code}-modal`) as HTMLDialogElement).showModal()}}><Edit /></button>
        <dialog id={`edit-term-${term.code}-modal`} className="modal">
            <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><X /></button>
                </form>
                <h3 className="font-bold text-lg">{`${term.season} ${term.year} - ${term.code}`}</h3>
                <div className="flex flex-col gap-y-2 my-4">
                    {
                        courses.map((course, index) => (
                            <div key={index} className="w-full flex items-center gap-2">
                                <input value={course.code} type="text" placeholder="Type here" className="w-full input input-bordered" disabled />
                                <input onChange={event => onEditGrade(event)} name={course.code} value={course.grade} type="text" placeholder="Type here" className={`w-full input input-bordered ${!validGrades[index] ? "input-error" : ""}`} />
                                <button onClick={() => onDeleteGrade(course.code)} className="btn btn-circle btn-ghost"><Trash /></button>
                            </div>
                        ))
                    }
                </div>
                <div className="modal-action">
                    <button disabled={validGrades.some(element => element === false)} onClick={onEdit} className="btn btn-primary">Edit</button>
                </div>
            </div>
        </dialog>
    </>
  );
};

export default EditTermModal;
