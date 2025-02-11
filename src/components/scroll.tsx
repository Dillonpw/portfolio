interface MarqueeProps {
  items: string[];
}
export const demoItems = ["lorem", "Ipsum", "Dolor", "Sit", "Amet"];

export default function Marquee({ items }: MarqueeProps) {
  return (
    <div className="my-4 flex overflow-hidden rounded-xl border-4 px-10">
      <div className="animate-marquee flex min-w-full justify-around">
        {items.map((item, index) => (
          <span key={index} className="mx-4 text-lg">
            {item}
          </span>
        ))}
      </div>
      <div className="animate-marquee flex min-w-full justify-around">
        {items.map((item, index) => (
          <span key={index} className="mx-4 text-lg">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
