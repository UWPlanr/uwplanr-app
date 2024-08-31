import { Link } from "react-router-dom";
import { Github, Laptop, Linkedin } from "lucide-react";

type Props = {
    name: string;
    description: string;
    github: string;
    website: string;
    linkedin: string;
    image: string;
};

const AboutMember = ({ name, description, github, website, linkedin, image }: Props) => {
  return (
    <div className="p-2 card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
            <img className="w-44 rounded-full" src={image} />
        </figure>
        <div className="card-body">
            <div className="card-title">
              <h1>{name}</h1>
            </div>
            <p>{description}</p>
            <div className="flex gap-x-2">
                <Link to={github} className="btn btn-circle btn-ghost">
                    <Github />
                </Link>
                <Link to={website} className="btn btn-circle btn-ghost">
                    <Laptop />
                </Link>
                <Link to={linkedin} className="btn btn-circle btn-ghost">
                    <Linkedin />
                </Link>
            </div>
        </div>
    </div>
  );
};

export default AboutMember;
