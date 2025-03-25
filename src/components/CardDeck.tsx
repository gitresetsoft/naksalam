
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Profile, Direction, SwipeAction } from '../types/profile';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { Progress } from '@/components/ui/progress';
import ProfileDetails from '@/components/ProfileDetails';

interface CardDeckProps {
  profiles: Profile[];
  onSwipeAction: (profile: Profile, action: SwipeAction) => void;
  disabled?: boolean;
}

const CardDeck: React.FC<CardDeckProps> = ({
  profiles,
  onSwipeAction,
  disabled = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsLeft, setCardsLeft] = useState(profiles.length);
  const [feedback, setFeedback] = useState<{ visible: boolean, isCorrect: boolean }>({ visible: false, isCorrect: false });
  const [timerProgress, setTimerProgress] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  
  const currentProfile = profiles[currentIndex];
  
  // Reset the current index when profiles array changes
  useEffect(() => {
    setCurrentIndex(0);
    setCardsLeft(profiles.length);
  }, [profiles]);
  
  const handleSwipe = (direction: Direction) => {
    if (disabled || currentIndex >= profiles.length || feedback.visible) return;
    
    // Convert swipe direction to action and check correctness
    const userGuess = direction === 'right'; // right = yes, left = no
    const isCorrect = userGuess === !!currentProfile.isFamily;
    const action: SwipeAction = isCorrect ? 'correct' : 'wrong';
    
    // Show feedback
    setFeedback({ visible: true, isCorrect });
    setTimerProgress(0);
    
    // If wrong, open the profile details
    if (!isCorrect) {
      setSelectedProfile(currentProfile);
    }
    
    // Start the 5-second timer
    const startTime = Date.now();
    const endTime = startTime + 5000;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = endTime - now;
      
      if (remaining <= 0) {
        clearInterval(timer);
        setFeedback({ visible: false, isCorrect: false });
        
        // Close profile details if open
        setSelectedProfile(null);
        
        // Call the callback with the action
        onSwipeAction(currentProfile, action);
        
        // Move to the next card
        setCurrentIndex(prevIndex => prevIndex + 1);
        setCardsLeft(prevCount => prevCount - 1);
        setTimerProgress(0);
      } else {
        // Update progress bar
        setTimerProgress(((5000 - remaining) / 5000) * 100);
      }
    }, 50);
    
    // Clean up timer on unmount
    return () => clearInterval(timer);
  };
  
  const handleKeyboardDirection = (direction: Direction) => {
    handleSwipe(direction);
  };
  
  const handleKeyboardAction = () => {
    // This function is required by the useKeyboardNavigation hook
    // We can leave it empty as we're not using the action feature in this component
    // or implement a custom action like swiping right if needed
  };
  
  // Use keyboard navigation with the missing onAction prop
  useKeyboardNavigation({
    onDirectionChange: handleKeyboardDirection,
    onAction: handleKeyboardAction,
    disabled: disabled || feedback.visible
  });
  
  // Determine which cards to render (current and next 2)
  const displayProfiles = profiles.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <div className="relative w-full max-w-md aspect-[3/4] mx-auto my-4">
      {/* Cards container */}
      <div className="relative w-full h-full">
        {/* We'll render 3 cards (current and next 2 for performance) */}
        {displayProfiles.map((profile, index) => {
          const absoluteIndex = currentIndex + index;
          return (
            <Card
              key={profile.id}
              profile={profile}
              onSwipe={handleSwipe}
              isActive={index === 0} // Only the top card is active
              zIndex={profiles.length - absoluteIndex}
              disabled={disabled || feedback.visible}
            />
          );
        })}
        
        {/* Feedback overlay for correct answers */}
        {feedback.visible && feedback.isCorrect && currentProfile && (
          <div className={`absolute inset-0 z-[100] flex flex-col items-center justify-center rounded-2xl 
            bg-green-500/80 backdrop-blur-sm animate-fade-in`}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Correct!
            </h2>
            <div className="w-3/4 mt-4">
              <Progress value={timerProgress} className="h-2" />
            </div>
          </div>
        )}
        
        {/* Profile details modal (for wrong answers) */}
        {selectedProfile && (
          <ProfileDetails
            profile={selectedProfile}
            onClose={() => {}} // Empty function since we auto-close
            onLike={() => {}} // Not used in this scenario
            onDislike={() => {}} // Not used in this scenario
            showFeedback={true}
            isCorrect={false}
            timerProgress={timerProgress}
          />
        )}
        
        {/* Empty state when no cards left */}
        {cardsLeft === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl card-shadow animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              You've seen everyone!
            </h3>
            <p className="text-muted-foreground">
              Check back later for new profiles or adjust your preferences.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDeck;
