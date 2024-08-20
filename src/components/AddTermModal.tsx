import { Plus } from "lucide-react";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/useProfileContext";
import { nextSeasonYear, nextTerm, validNextTerm } from "../utils/helpers";
import toast from "react-hot-toast";

const AddTermModal = () => {
  const { profile, changeProfile } = useContext(ProfileContext);
  const [term, setTerm] = useState<Term>({ term: nextTerm(profile), ...(nextSeasonYear(profile)), courses: [] });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTerm(prev => ({ ...prev, [event.target.name]: event.target.value}))
  };
  const onAdd = () => {
    if (!validNextTerm(profile, term)) {
      (document.getElementById("add-term-modal") as HTMLDialogElement).close();
      toast.error("Invalid term");
      return;
    };
    changeProfile([...profile, term]);
    (document.getElementById("add-term-modal") as HTMLDialogElement).close()
    window.location.reload();
  };
  return (
    <>
        <button className="btn btn-lg btn-circle btn-ghost" onClick={() => (document.getElementById("add-term-modal") as HTMLDialogElement).showModal()}><Plus size={30} /></button>
        <dialog id={"add-term-modal"} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add {term.term} Term</h3>
                <div className="w-full flex items-center gap-2 mt-4">
                    <select onChange={event => handleChange(event)} name="season" value={term.season} className="select select-bordered w-full max-w-xs">
                        <option value={"Winter"}>Winter</option>
                        <option value={"Spring"}>Spring</option>
                        <option value={"Fall"}>Fall</option>
                    </select>
                    <input onChange={event => handleChange(event)} name="year" value={term.year} type="text" placeholder="Year" className="w-full input input-bordered" />
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-error">Close</button>
                    </form>
                    <button onClick={onAdd} className="btn btn-primary">Add</button>
                </div>
            </div>
        </dialog>
    </>
  );
};

export default AddTermModal;