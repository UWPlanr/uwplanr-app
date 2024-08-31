import { Info } from "lucide-react";

const InfoModal = () => {
  return (
    <>
        <button className="btn btn-ghost btn-circle" onClick={() => (document.getElementById("info-modal") as HTMLDialogElement).showModal()}><Info /></button>
        <dialog id="info-modal" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Information</h3>
            <div className="mt-4">
                <div className="overflow-x-auto">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>All course requirements met</td>
                                <td><span className="btn btn-xs btn-circle bg-green-500 hover:bg-green-500"></span></td>
                            </tr>
                            <tr>
                                <td>Course prerequisites not met</td>
                                <td><span className="btn btn-xs btn-circle bg-red-500 hover:bg-red-500"></span></td>
                            </tr>
                            <tr>
                                <td>Course antirequisites not met</td>
                                <td><span className="btn btn-xs btn-circle bg-orange-500 hover:bg-orange-500"></span></td>
                            </tr>
                            <tr>
                                <td>Course minimum level not met</td>
                                <td><span className="btn btn-xs btn-circle bg-indigo-500 hover:bg-indigo-500"></span></td>
                            </tr>
                            <tr>
                                <td>Course can not be taken in the term</td>
                                <td><span className="btn btn-xs btn-circle bg-cyan-500 hover:bg-cyan-500"></span></td>
                            </tr>
                        </tbody>
                    </table>
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
