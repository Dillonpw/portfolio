const Scroll = () => {
  return (
    <div className="my-4 flex overflow-hidden rounded-xl border-4 px-10">
      <div className="animate-marquee flex min-w-full justify-around">
        {["Lorem", "Ipsum", "Dolor", "Sit", "Amet"].map((text, index) => (
          <div key={index}>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="animate-marquee flex min-w-full justify-around">
        {["Lorem", "Ipsum", "Dolor", "Sit", "Amet"].map((text, index) => (
          <div key={index}>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
