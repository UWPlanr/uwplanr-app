import { Ellipsis, X } from "lucide-react";
import { Link } from "react-router-dom";
import { statisticsColors } from "../utils/helpers";

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
                  <div className={statisticsColors(course.statistics.liked)} style={{"--value": course.statistics.liked !== "N/A" ? course.statistics.liked : "0"}} role="progressbar">{course.statistics.liked !== "N/A" ? course.statistics.liked : "0" }</div>
                  <span>Liked</span>
                </div>
                <div className="flex flex-col justify-center gap-y-4 items-center">
                  {/* 
                  // @ts-ignore */}
                  <div className={statisticsColors(course.statistics.easy)} style={{"--value": course.statistics.easy !== "N/A" ? course.statistics.easy : "0"}} role="progressbar">{course.statistics.easy !== "N/A" ? course.statistics.easy : "0"}</div>
                  <span>Easy</span>
                </div>
                <div className="flex flex-col justify-center gap-y-4 items-center">
                  {/* 
                  // @ts-ignore */}
                  <div className={statisticsColors(course.statistics.useful)} style={{"--value": course.statistics.useful !== "N/A" ? course.statistics.useful : "0"}} role="progressbar">{course.statistics.useful !== "N/A" ? course.statistics.useful : 0}</div>
                  <span>Useful</span>
                </div>
            </div>
            <div className="flex justify-end mt-8">
              <span className="text-xs italic">Statistics obtained from <Link target="_blank" to={`https://uwflow.com/course/${course.code.replace(" ", "").toLowerCase()}`} className="link link-hover">UWFlow</Link>. Last updated on {course.statistics.lastUpdated}.</span>
            </div>
        </div>
        </dialog>
    </>
  );
};

export default CourseInfoModal;
