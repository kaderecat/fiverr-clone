import { Link } from "react-router-dom";
import { Project } from "../types/Projects";

interface ProjectProps {
  projects: Project;
}

const ProjectCard = ({ projects }: ProjectProps) => {
  return (
    <Link to={"/gigs?cat=design"}>
      <div className="w-[252px] h-[344px] rounded-md text-white flex flex-col overflow-hidden  shadow-lg">
        <div className="flex flex-col w-[100%] h-[100%] ">
          <div className="w-[100%] h-[70%] ">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={projects.img}
              alt=""
            />
          </div>
          <div className="flex  mt-4 gap-4 justify-start px-4">
            <img
              className="w-12 h-12 rounded-full overflow-hidden"
              src={projects.pp}
              alt=""
            />
            <div className="flex flex-col">
              <span className="font-bold text-black">{projects.username}</span>
              <span className="text-black">{projects.cat}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
