import { Ellipsis } from "lucide-react";

type Props = {
    course: GradeCourse;
};

const CourseInfoModal = ({ course }: Props) => {
  return (
    <>
        <button className="btn btn-sm btn-ghost btn-circle" onClick={() => (document.getElementById(`course-info-${course.code}`) as HTMLDialogElement).showModal()}><Ellipsis /></button>
        <dialog id={`course-info-${course.code}`} className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">{`${course.code} - ${course.title}`}</h3>
            <p className="py-4">{course.description}</p>
            <p>{course.requirements}</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-error">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </>
  );
};

export default CourseInfoModal;
