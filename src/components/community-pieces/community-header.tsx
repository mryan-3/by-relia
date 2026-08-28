export function CommunityHeader() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6">
      <div className="lg:col-span-5">
        <h2 className="text-xs sm:text-sm uppercase tracking-widest text-neutral-500 font-medium">
          Our Most Loved Pieces
        </h2>
      </div>
      <div className="lg:col-span-7 lg:text-right">
        <p className="font-editorial text-xl sm:text-2xl lg:text-3xl text-black font-normal leading-snug tracking-tight max-w-xl lg:ml-auto">
          Eight essentials our community reaches for again and again — chosen
          for fit, feel, and staying power.
        </p>
      </div>
    </div>
  );
}
