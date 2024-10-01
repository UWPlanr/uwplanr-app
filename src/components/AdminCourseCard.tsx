import { useState } from "react";

type Props = {
    course: RawCourse;
};

const AdminCourseCard = ({ course }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState({ ...course });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData(prev => {
        if (event.target.name == "termsOffered") {
            return ({ ...prev, termsOffered: event.target.value.split(",") })
        } else {
            return ({ ...prev, [event.target.name]: event.target.value });
        };
    });
  };

const handleFinalize = async () => {
    try {
      setLoading(true);
      await fetch(`${import.meta.env.VITE_SERVER_URL}/finalize_course`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, finalized: true }) })
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      window.location.reload();
    };
  };

  return (
    <div className="card w-[90%] shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">{`${course.code} - ${course.title}`}</h2>
          <p className="py-4">{course.description}</p>
          <p className="pb-4">{course.requirements}</p>
          <div className="flex flex-col gap-y-4">
            <input disabled={loading} onChange={event => handleChange(event)} name="prereqs" value={data.prereqs} type="text" placeholder="Prerequisites" className="input input-sm input-bordered w-full" />
            <input disabled={loading} onChange={event => handleChange(event)} name="coreqs" value={data.coreqs} type="text" placeholder="Corequisites" className="input input-sm input-bordered w-full" />
            <input disabled={loading} onChange={event => handleChange(event)} name="antireqs" value={data.antireqs} type="text" placeholder="Antirequisites" className="input input-sm input-bordered w-full" />
            <select name="faculty" value={data.faculty} disabled onChange={event => handleChange(event)} className="select select-sm select-bordered w-full">
              <option value="ENV">Environment</option>
              <option value="MAT">Math</option>
              <option value="ENG">Engineering</option>
              <option value="SCI">Science</option>
              <option value="ART">Arts</option>
              <option value="AHS">Applied Health Sciences</option>
              <option value="STP">St. Paul's College (United College)</option>
              <option value="REN">Renison University College</option>
              <option value="STJ">St. Jerome's University</option>
              <option value="CGC">Conrad Gerbel College</option>
              <option value="VPA">Vice President Academic</option>
            </select>
            <div className="flex justify-between gap-4">
              <input disabled={loading} onChange={event => handleChange(event)} name="minLevel" value={data.minLevel} type="text" placeholder="Min Level" className="input input-sm input-bordered w-full" />
              <input disabled={loading} onChange={event => handleChange(event)} name="termsOffered" value={data.termsOffered.join(",")} type="text" placeholder="Terms Offered" className="input input-sm input-bordered w-full" />
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" type="submit" disabled={loading} onClick={handleFinalize}>Finalize</button>
          </div>
      </div>
    </div>
  );
};

export default AdminCourseCard;
