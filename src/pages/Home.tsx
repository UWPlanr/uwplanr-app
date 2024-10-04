import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
        <div className="h-screen flex flex-col justify-center items-center">
            <img src="/uwplanr.png" className="rounded-lg" />
            <p className="py-6 text-center text-2xl">
                Helping UW students plan their degree.
            </p>
            <Link to="/plan" className="btn btn-primary">Get Started</Link>
        </div>
    </div>
  );
};

export default Home;
