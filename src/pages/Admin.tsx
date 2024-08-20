import { useEffect, useState } from "react";
import AdminCourseCard from "../components/AdminCourseCard";
import { Link } from "react-router-dom";

const Admin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<Course | null>({ code: "", title: "", faculty: "", description: "", requirements: "", prereqs: "", coreqs: "", antireqs: "", termsOffered: [], minLevel: "", finalized: true });

  useEffect(() => {
        setLoading(true);
        fetch("http://127.0.0.1:5000/grab_random_course")
            .then(response => response.json())
            .then(data => {
                if (Object.keys(data.course).length === 0) {
                  setCourse(null);
                  return;
                };
                setCourse(data.course)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
        { loading ? (
            <span className="loading loading-spinner loading-lg text-primary"></span>
          ) : course ? <AdminCourseCard course={course} /> : (
            <div className="flex flex-col justify-center items-center gap-y-2">
              <h1 className="text-2xl font-bold">All Courses Finalized 😉</h1>
              <Link className="link-primary link link-hover" to="/">Home</Link>
            </div>
          )}
    </div>
  );
};

export default Admin;
