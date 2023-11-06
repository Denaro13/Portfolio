const SkillsCard = ({ title, text }) => {
  return (
    <article className="text-center">
      <h4 className="mt-6 text-4xl font-bold">{title}</h4>
      <p className="mt-2 text-slate-500 capitalize text-xl">{text}</p>
    </article>
  );
};

export default SkillsCard;
