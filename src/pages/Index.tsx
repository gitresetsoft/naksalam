
import React, { useState, useEffect } from 'react';
import CardDeck from '@/components/CardDeck';
import ScoreBoard from '@/components/ScoreBoard';
import { Profile, SwipeAction, Score } from '@/types/profile';
import profiles from '@/data/profiles';
import { toast } from "sonner";
import { HelpCircle, X, CheckCheck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UserInfo from '@/components/UserInfo'; 
import Navbar from '@/components/Navbar';

// Add isFamily flag to some profiles randomly
const enhancedProfiles = profiles.map(profile => ({
  ...profile,
  isFamily: Math.random() > 0.7 // 30% chance of being family
}));

const initialScore: Score = {
  correct: 0,
  wrong: 0,
  streak: 1, // Start with a 1-day streak
  longestStreak: 1
};

const Index = () => {
  const [score, setScore] = useState<Score>(initialScore);
  const [displayProfiles, setDisplayProfiles] = useState<Profile[]>(enhancedProfiles);
  const [isScoreboardMinimized, setIsScoreboardMinimized] = useState(false);
  const isMobile = useIsMobile();

  // Load score from local storage
  useEffect(() => {
    const savedScore = localStorage.getItem('familyGuessGameScore');
    if (savedScore) {
      try {
        setScore(JSON.parse(savedScore));
      } catch (e) {
        console.error('Error parsing saved score:', e);
      }
    }
  }, []);

  // Auto-minimize scoreboard on mobile
  useEffect(() => {
    if (isMobile) {
      setIsScoreboardMinimized(true);
    } else {
      setIsScoreboardMinimized(false);
    }
  }, [isMobile]);

  // Save score to local storage when it changes
  useEffect(() => {
    localStorage.setItem('familyGuessGameScore', JSON.stringify(score));
  }, [score]);

  // Handle profile actions
  const handleSwipeAction = (profile: Profile, action: SwipeAction) => {
    // Show feedback based on action
    switch (action) {
      case 'correct':
        toast(
          <div className="flex items-center">
            <CheckCheck className="text-green-500 mr-2" size={16} />
            <span>Correct guess for {profile.name}</span>
          </div>
        );
        break;
      case 'wrong':
        toast(
          <div className="flex items-center">
            <X className="text-destructive mr-2" size={16} />
            <span>Wrong guess for {profile.name}</span>
          </div>
        );
        break;
    }
    
    // Update score
    setScore(prevScore => {
      return {
        ...prevScore,
        [action]: prevScore[action] + 1,
        streak: action === 'correct' ? prevScore.streak + 0.2 : 1, // Reset streak on wrong answer
        longestStreak: Math.max(prevScore.longestStreak, Math.floor(prevScore.streak + (action === 'correct' ? 0.2 : 0)))
      };
    });
    
    // Remove profile from display
    setDisplayProfiles(prev => prev.filter(p => p.id !== profile.id));
  };

  // Reset game
  const handleReset = () => {
    setScore(initialScore);
    setDisplayProfiles(enhancedProfiles);
    toast("Game Reset", {
      description: "All progress has been reset.",
      duration: 3000,
    });
  };

  // Handle logout
  const handleLogout = () => {
    toast("Logged out", {
      description: "You have been logged out successfully.",
      duration: 3000,
    });
    // TODO: actual logout logic here
  };

  // Instructions component
  const Instructions = () => (
    <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl card-shadow border border-border/40">
      <h3 className="font-bold mb-2">How to Play</h3>
      <p className="text-sm mb-4 text-muted-foreground">
        Guess which people are family members by swiping.
      </p>
      <ul className="text-sm space-y-2 text-muted-foreground">
        <li className="flex items-center">
          <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mr-2 text-xs">→</span>
          <span>Swipe right or press right arrow if you think they're family</span>
        </li>
        <li className="flex items-center">
          <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mr-2 text-xs">←</span>
          <span>Swipe left or press left arrow if you think they're not family</span>
        </li>
      </ul>
      
      <div className="mt-6">
        <button
          onClick={handleReset}
          className="w-full py-2 bg-gradient-to-r from-red-300 to-pink-500 text-white 
                    hover:from-red-400 hover:to-pink-600 transition-colors 
                    rounded-lg text-sm"
        >
          Reset Game
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9f9ff] via-[#ebfffc] to-[#ffe7e9] text-foreground py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-2 flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ background: 'linear-gradient(135deg, #FF69B4 0%, #00BFFF 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Nak Salam?</h1>
          
          {/* User Info // TODO: FUTURE */} 
          {/* <UserInfo handleLogout={handleLogout} /> */} 
        </header>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-2 items-center lg:items-start">
          {/* Left column (scoreboard on all screens) */}
          <div className={`w-full ${!isMobile ? 'lg:w-1/4 order-1' : 'order-2'}`}>
            <ScoreBoard 
              score={score}
              className="sticky top-8" 
              totalProfiles={enhancedProfiles.length}
              viewedProfiles={enhancedProfiles.length - displayProfiles.length}
              minimized={isScoreboardMinimized}
              onToggleMinimize={() => setIsScoreboardMinimized(!isScoreboardMinimized)}
            />
          </div>

          {/* Center column (card deck) */}
          <div className="w-full lg:w-2/4 order-1">
            <CardDeck
              profiles={displayProfiles}
              onSwipeAction={handleSwipeAction}
              disabled={false}
            />

            {displayProfiles.length === 0 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setDisplayProfiles(enhancedProfiles)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>

          {/* Right column (how to play on desktop) */}
          {!isMobile ? (
            <div className="w-full lg:w-1/4 order-3">
              <Instructions />
            </div>
          ) : (
            <div className="fixed bottom-20 right-2 z-10 flex flex-col gap-2 ">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="rounded-full h-14 w-14 shadow-lg bg-red-300" variant="secondary">
                    <HelpCircle />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogTitle>How to Play</DialogTitle>
                  <DialogDescription>
                    <Instructions />
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Index;
