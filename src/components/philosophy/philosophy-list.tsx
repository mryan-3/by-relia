const pillars = [
  {
    num: "01",
    title: "Timeless Design",
    desc: "Enduring silhouettes created to transcend seasons and passing trends.",
  },
  {
    num: "02",
    title: "Premium Materials",
    desc: "Considered fabrics selected for their feel, quality, and lasting comfort.",
  },
  {
    num: "03",
    title: "Responsible Production",
    desc: "Thoughtfully made with considered processes that prioritize quality over excess.",
  },
  {
    num: "04",
    title: "Everyday Versatility",
    desc: "Effortless pieces designed to move naturally through every part of your day.",
  },
];

export function PhilosophyList() {
  return (
    <div className="flex flex-col gap-10 sm:gap-12 w-full max-w-xs sm:max-w-sm lg:ml-auto">
      {pillars.map((item) => (
        <div key={item.num} className="flex items-start gap-6 sm:gap-8">
          <span className="text-xs font-normal text-neutral-400 select-none pt-0.5">
            {item.num}
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-xs sm:text-sm font-semibold text-black tracking-tight">
              {item.title}
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed font-normal">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
