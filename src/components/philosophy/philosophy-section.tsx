import { PhilosophyHeader } from "./philosophy-header";
import { PhilosophyVisual } from "./philosophy-visual";
import { PhilosophyList } from "./philosophy-list";

export function PhilosophySection() {
  return (
    <section
      id="stories"
      className="w-full bg-[#fbfbfb] px-6 sm:px-10 lg:px-12 py-16 sm:py-24"
    >
      <div className="w-full flex flex-col gap-12 sm:gap-16">
        <PhilosophyHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-24 xl:gap-32">
          <div className="lg:col-span-7">
            <PhilosophyVisual />
          </div>
          <div className="lg:col-span-5">
            <PhilosophyList />
          </div>
        </div>
      </div>
    </section>
  );
}
