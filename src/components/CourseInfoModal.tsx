import { Ellipsis, X } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
    course: GradeCourse;
};

const CourseInfoModal = ({ course }: Props) => {
  return (
    <>
        <button className="btn btn-sm btn-ghost btn-circle" onClick={() => (document.getElementById(`course-info-${course.code}-modal`) as HTMLDialogElement).showModal()}><Ellipsis /></button>
        <dialog id={`course-info-${course.code}-modal`} className="modal">
        <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><X /></button>
            </form>
            <h3 className="font-bold text-lg">{`${course.code} - ${course.title}`}</h3>
            <p className="py-4">{course.description}</p>
            <p>{course.requirements}</p>
            <div className="flex justify-evenly items-center mt-8">
                <div className="flex flex-col justify-center gap-y-4 items-center">
                  {/* 
                  // @ts-ignore */}
                  <div className="radial-progress font-bold text-error" style={{"--value": 59}} role="progressbar">59%</div>
                  <span>Liked</span>
                </div>
                <div className="flex flex-col justify-center gap-y-4 items-center">
                  {/* 
                  // @ts-ignore */}
                  <div className="radial-progress font-bold text-warning" style={{"--value": 58}} role="progressbar">58%</div>
                  <span>Easy</span>
                </div>
                <div className="flex flex-col justify-center gap-y-4 items-center">
                  {/* 
                  // @ts-ignore */}
                  <div className="radial-progress font-bold text-green-500" style={{"--value": 81}} role="progressbar">81%</div>
                  <span>Useful</span>
                </div>
            </div>
            <div className="flex justify-end mt-8">
              <span className="text-xs italic">Statistics obtained from <Link to="uwflow.com" className="link link-hover">UWFlow</Link>. Last updated on Sep 29th, 2024.</span>
            </div>
        </div>
        </dialog>
    </>
  );
};

export default CourseInfoModal;
