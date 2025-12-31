const MarqueeSection = () => {
  const items = ['MY WORKS', 'MY WORKS', 'MY WORKS', 'MY WORKS', 'MY WORKS', 'MY WORKS'];
  
  return (
    <div className="py-8 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 font-display text-2xl md:text-3xl font-light tracking-wider text-muted-foreground flex items-center gap-8"
          >
            {item}
            <span className="text-accent">×</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
