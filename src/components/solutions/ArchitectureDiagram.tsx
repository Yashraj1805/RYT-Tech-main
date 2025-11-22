import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

type Node = {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
};

type ArchitectureDiagramProps = {
  nodes: Node[];
  title?: string;
  description?: string;
};

export const ArchitectureDiagram = ({ 
  nodes, 
  title = "Solution Architecture",
  description 
}: ArchitectureDiagramProps) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            {description && <p className="text-muted-foreground text-lg">{description}</p>}
          </div>
          
          <Card className="glass-card p-8 rounded-xl">
            {/* Desktop SVG Diagram */}
            <div className="hidden md:block relative aspect-video bg-gradient-to-br from-secondary/50 to-background rounded-lg overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
                {/* Connection lines */}
                {nodes.length > 1 && (
                  <g stroke="hsl(var(--neon) / 0.3)" strokeWidth="2" fill="none">
                    {nodes.slice(0, -1).map((node, index) => {
                      const nextNode = nodes[index + 1];
                      return (
                        <line
                          key={`line-${index}`}
                          x1={node.x}
                          y1={node.y}
                          x2={nextNode.x}
                          y2={nextNode.y}
                          strokeDasharray="4,4"
                        />
                      );
                    })}
                  </g>
                )}
                
                {/* Nodes */}
                {nodes.map((node) => (
                  <g key={node.id}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="30"
                      fill={hoveredNode === node.id ? "hsl(var(--neon) / 0.2)" : "hsl(var(--neon) / 0.1)"}
                      stroke="hsl(var(--neon) / 0.5)"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      whileHover={{ scale: 1.1, strokeWidth: 3 }}
                      tabIndex={0}
                      role="button"
                      aria-label={node.label}
                    />
                    <text
                      x={node.x}
                      y={node.y + 50}
                      textAnchor="middle"
                      className="fill-foreground text-sm font-semibold pointer-events-none"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
              
              {/* Tooltip */}
              {hoveredNode && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card p-4 rounded-lg border border-neon/30 max-w-md"
                >
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {nodes.find(n => n.id === hoveredNode)?.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {nodes.find(n => n.id === hoveredNode)?.description}
                  </p>
                </motion.div>
              )}
            </div>
            
            {/* Mobile fallback */}
            <div className="md:hidden space-y-3">
              {nodes.map((node, index) => (
                <div
                  key={node.id}
                  className="glass-card p-4 rounded-lg border border-border/50"
                  tabIndex={0}
                  role="button"
                  aria-label={node.label}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-neon">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{node.label}</p>
                      <p className="text-sm text-muted-foreground">{node.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

