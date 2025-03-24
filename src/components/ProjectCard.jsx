import { nanoid } from "nanoid";

const ProjectCard = ({ img, techList, title, url }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <a href={url}>
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-t-lg h-64"
        />
      </a>
      <div className="capitalize p-8">
        <h2 className="text-2xl font-medium uppercase">{title}</h2>
        <div className="flex gap-x-4 flex-wrap">
          {techList.map((list) => {
            return (
              <h6 key={nanoid()} className="uppercase text-slate-600">
                {list}
              </h6>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
