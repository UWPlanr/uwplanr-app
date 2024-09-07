import { Ellipsis, X } from "lucide-react";

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
        </div>
        </dialog>
    </>
  );
};

export default CourseInfoModal;
