
export default function Logo({ className = "h-10 w-10" }) {
  const dots = [];
  const rings = [
    { r: 14, count: 10, size: 2.2, color: "#00B8D9" }, // Inner ring (Cyan)
    { r: 23, count: 18, size: 2.8, color: "#0052CC" }, // Middle-inner ring (Classic Blue)
    { r: 32, count: 26, size: 3.4, color: "#0747A6" }, // Middle-outer ring (Darker Blue)
    { r: 41, count: 34, size: 3.8, color: "#091E42" }  // Outer ring (Deep Dark Blue)
  ];

  rings.forEach((ring) => {
    for (let i = 0; i < ring.count; i++) {
      const angle = (i * 2 * Math.PI) / ring.count;
      const x = 50 + ring.r * Math.cos(angle);
      const y = 50 + ring.r * Math.sin(angle);
      
      // Inject some red & green accent dots at specific angles to mimic the original logo artwork
      let color = ring.color;
      const deg = (angle * 180) / Math.PI;
      
      // Left side accents
      if (deg > 140 && deg < 220) {
        if (i % 3 === 0) color = "#E11D48"; // Rose-red
        else if (i % 3 === 1) color = "#16A34A"; // Emerald-green
      } 
      // Right side accents
      else if (deg > 320 || deg < 40) {
        if (i % 4 === 0) color = "#E11D48"; // Rose-red
        else if (i % 4 === 1) color = "#16A34A"; // Emerald-green
      }

      dots.push(
        <circle
          key={`${ring.r}-${i}`}
          cx={x.toFixed(2)}
          cy={y.toFixed(2)}
          r={ring.size}
          fill={color}
        />
      );
    }
  });

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="globe-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DEEBFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#DEEBFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Ambient background glow for the globe icon */}
      <circle cx="50%" cy="50%" r="48" fill="url(#globe-bg-glow)" />
      
      {/* Dotted sphere group */}
      <g className="animate-spin-slow origin-center">
        {dots}
      </g>
    </svg>
  );
}
