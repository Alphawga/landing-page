'use client';
import { motion } from 'framer-motion';

export default function AnimatedGraph() {
  const months = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'];
  const values = ['100K', '80K', '60K', '40K', '20K', '0'];
  
  // Points for the graph line (normalized to viewBox coordinates)
  const points = [
    [0, 85],    // Start lower
    [20, 75],   // Gentle rise
    [40, 65],   // Continue rising
    [60, 45],   // Steeper rise
    [80, 35],   // More rise
    [100, 15],  // Final position
  ];

  // Create straight line path
  const createLinePath = (points: number[][]) => {
    return `M ${points.map(([x, y]) => `${x},${y}`).join(' L ')}`;
  };

  const pathString = createLinePath(points);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.2 }
      }
    }
  };

  const legendVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 2.2, duration: 0.5 }
    }
  };

  return (
    <div className="relative w-full">
      <div className="text-lg font-semibold mb-4 text-gray-800">Website Traffic Growth</div>
      <div className="relative w-full aspect-[4/3]">
        <svg
          viewBox="-10 -10 120 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Y-axis labels */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[4px]"
          >
            {values.map((value, index) => (
              <text
                key={`y-label-${index}`}
                x="-12"
                y={index * 20}
                textAnchor="end"
                alignmentBaseline="middle"
                fill="#666"
              >
                {value}
              </text>
            ))}
          </motion.g>

          {/* X-axis labels */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[4px]"
          >
            {months.map((month, index) => (
              <text
                key={`x-label-${index}`}
                x={index * 20}
                y="105"
                textAnchor="middle"
                fill="#666"
              >
                {month}
              </text>
            ))}
          </motion.g>

          {/* Grid lines */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {[20, 40, 60, 80].map((position) => (
              <g key={`grid-${position}`}>
                <line
                  x1={position}
                  y1="0"
                  x2={position}
                  y2="100"
                  stroke="#000"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
                <line
                  x1="0"
                  y1={position}
                  x2="100"
                  y2={position}
                  stroke="#000"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
              </g>
            ))}
          </motion.g>

          {/* Axes */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <line x1="0" y1="0" x2="0" y2="100" stroke="#000" strokeWidth="1" />
            <line x1="0" y1="100" x2="100" y2="100" stroke="#000" strokeWidth="1" />
          </motion.g>

          {/* Main graph line */}
          <motion.path
            d={pathString}
            stroke="#2D89EF"
            strokeWidth="4"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {points.map(([x, y], index) => (
            <motion.circle
              key={`point-${index}`}
              cx={x}
              cy={y}
              r="3"
              fill="#2D89EF"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + (index * 0.1), duration: 0.3 }}
            />
          ))}

          {/* Gradient fill under the line */}
          <motion.path
            d={`${pathString} L 100 100 L 0 100 Z`}
            fill="url(#graphGradient)"
            opacity="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1, duration: 1 }}
          />

          {/* Define gradient */}
          <defs>
            <linearGradient id="graphGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2D89EF" />
              <stop offset="100%" stopColor="#2D89EF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Legend */}
      <motion.div
        className="mt-4 flex items-center justify-center gap-8 text-sm text-gray-600"
        variants={legendVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#2D89EF] rounded-full"></div>
          <span>Organic Traffic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#2D89EF] opacity-20"></div>
          <span>Growth Trend</span>
        </div>
        <div className="flex items-center gap-2 text-[#2D89EF] font-semibold">
          <span>+156% Growth</span>
        </div>
      </motion.div>

      {/* Annotations */}
      <motion.div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#2D89EF]/10 p-3 rounded-lg text-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4, duration: 0.5 }}
      >
        <div className="font-semibold text-[#2D89EF]">Key Milestones</div>
        <ul className="mt-2 space-y-1 text-gray-600">
          <li>• SEO Strategy Launch</li>
          <li>• Content Optimization</li>
          <li>• Backlink Growth</li>
        </ul>
      </motion.div>
    </div>
  );
} 