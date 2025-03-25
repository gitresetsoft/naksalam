
import React from 'react';
import { Score } from '../types/profile';
import { cn } from '@/lib/utils';
import { Trophy, CheckCircle2, XCircle, Zap } from 'lucide-react';

interface ScoreBoardProps {
  score: Score;
  className?: string;
  totalProfiles: number;
  viewedProfiles: number;
  minimized?: boolean;
  onToggleMinimize?: () => void;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ 
  score, 
  className, 
  totalProfiles, 
  viewedProfiles,
  minimized = false,
  onToggleMinimize
}) => {
  return (
    <div className={cn(
      "bg-card/80 backdrop-blur-sm rounded-2xl p-2 card-shadow border border-border/40 relative transition-all duration-300",
      minimized && "overflow-hidden",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center">
          <Trophy className="mr-2 text-accent" size={20} />
          Your Score
        </h2>
        
        {/* {onToggleMinimize && (
          <button 
            onClick={onToggleMinimize}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={minimized ? "Expand score" : "Minimize score"}
          >
            <span className={`transition-transform ${minimized ? 'rotate-180' : ''}`}>
              ▲
            </span>
          </button>
        )} */}
      </div>
      
      <div className="opacity-100">
        {/* Profiles Viewed indicator */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-muted-foreground">Profiles Viewed</span>
            <span className="text-xs">
              {viewedProfiles} / {totalProfiles}
            </span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${(viewedProfiles / totalProfiles) * 100}%` }}
            />
          </div>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            icon={<CheckCircle2 className="text-green-500" size={18} />}
            label="Correct"
            value={score.correct}
            bgColor="bg-green-500/10"
          />
          
          <StatCard
            icon={<XCircle className="text-destructive" size={18} />}
            label="Wrong"
            value={score.wrong}
            bgColor="bg-destructive/10"
          />
        </div>
        
        {/* Streak indicator */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm">
            <span className="text-muted-foreground">Current Streak: </span>
            <span className="font-medium">{Math.floor(score.streak)} days</span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Longest: </span>
            <span className="font-medium">{score.longestStreak} days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat card component
const StatCard = ({ icon, label, value, bgColor }: { 
  icon: React.ReactNode; 
  label: string; 
  value: number;
  bgColor: string;
}) => (
  <div className={cn("p-3 rounded-xl", bgColor)}>
    <div className="flex items-center mb-1">
      {icon}
      <span className="text-xs ml-1 text-muted-foreground">{label}</span>
    </div>
    <div className="text-xl font-bold">{value}</div>
  </div>
);

export default ScoreBoard;
