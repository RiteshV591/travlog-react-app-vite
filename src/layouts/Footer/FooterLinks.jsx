export const FooterLinks = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-matt-black xl:text-2xl">
        {title}
      </h2>
      <ul className="text-slate-500 md:text-lg">
        {items.map((item) => (
          <li key={item} className="mb-4">
            <a href="" className="hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
