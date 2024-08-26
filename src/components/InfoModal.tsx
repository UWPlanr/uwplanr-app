import { Info } from "lucide-react";

const InfoModal = () => {
  return (
    <>
        <button className="btn btn-ghost btn-circle" onClick={() => (document.getElementById("info-modal") as HTMLDialogElement).showModal()}><Info /></button>
        <dialog id="info-modal" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Information</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                <div className="flex items-center gap-x-2">
                    <span className="btn btn-xs btn-circle bg-green-500 hover:bg-green-500"></span>
                    <span>All requirements met</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <span className="btn btn-xs btn-circle bg-red-500 hover:bg-red-500"></span>
                    <span>Prerequisites not met</span>
                </div>
            </div>
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

export default InfoModal;
