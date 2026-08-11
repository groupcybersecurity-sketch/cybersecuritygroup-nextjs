const nodes = [
  { x: 80, y: 90 }, { x: 220, y: 60 }, { x: 360, y: 130 }, { x: 520, y: 70 },
  { x: 680, y: 120 }, { x: 140, y: 220 }, { x: 300, y: 260 }, { x: 460, y: 210 },
  { x: 610, y: 260 }, { x: 740, y: 200 }, { x: 90, y: 350 }, { x: 250, y: 380 },
  { x: 410, y: 340 }, { x: 560, y: 390 }, { x: 700, y: 350 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
  [5, 6], [6, 7], [7, 8], [8, 9], [5, 10], [6, 11], [7, 12], [8, 13], [9, 14],
  [10, 11], [11, 12], [12, 13], [13, 14],
];

export default function NetworkBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 480"
      className={`network-bg pointer-events-none ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#00AEEF"
          strokeOpacity={0.16}
          strokeWidth={1}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 4 : 2.6}
          fill={i % 2 === 0 ? "#00AEEF" : "#0033A0"}
          className="network-node"
          style={{ animationDelay: `${(i % 6) * 0.4}s` }}
        />
      ))}
    </svg>
  );
}
