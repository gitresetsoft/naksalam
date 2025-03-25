
import React from 'react';
import { Profile, Direction } from '../types/profile';
import { cn } from '@/lib/utils';
import { useSwipe } from '@/hooks/useSwipe';
import { Heart, X } from 'lucide-react';

interface CardProps {
  profile: Profile;
  onSwipe: (direction: Direction) => void;
  isActive: boolean;
  zIndex: number;
  disabled?: boolean;
}

const Card: React.FC<CardProps> = ({
  profile,
  onSwipe,
  isActive,
  zIndex,
  disabled = false
}) => {
  const {
    swipeHandlers,
    style,
    direction,
    elementRef
  } = useSwipe({
    onSwipe,
    disabled: !isActive || disabled
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        "absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden card-shadow transition-all duration-300",
        !isActive && "pointer-events-none",
        isActive ? "opacity-100" : "opacity-0"
      )}
      style={{
        ...style,
        zIndex,
        transform: `${style.transform || ''} ${direction === 'left' ? 'rotate(-5deg)' : direction === 'right' ? 'rotate(5deg)' : ''}`,
      }}
      {...swipeHandlers}
    >
      <div className="relative w-full h-full">
        {/* Card Image */}
        <div className="absolute inset-0">
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Swipe Direction Overlays */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-300",
          direction === 'left' ? "opacity-100 swipe-wrong-overlay" : "opacity-0"
        )}>
          <div className="flex h-full items-center justify-center">
            <X className="w-32 h-32 text-white" strokeWidth={1.5} />
            <span className="text-3xl font-bold text-white ml-4">No</span>
          </div>
        </div>
        
        <div className={cn(
          "absolute inset-0 transition-opacity duration-300",
          direction === 'right' ? "opacity-100 swipe-correct-overlay" : "opacity-0"
        )}>
          <div className="flex h-full items-center justify-center">
            <Heart className="w-32 h-32 text-white" strokeWidth={1.5} />
            <span className="text-3xl font-bold text-white ml-4">Yes</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-10">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-white flex items-center">
              {profile.name}, {profile.age}
              {profile.compatibility && (
                <span className="ml-2 text-sm px-2 py-1 bg-accent/90 text-white rounded-full">
                  {profile.compatibility}% Match
                </span>
              )}
            </h2>
            
            <p className="text-white/90 mt-1 flex items-center text-sm">
              <span className="mr-2">{profile.location}</span>
              <span className="w-1 h-1 rounded-full bg-white/80"></span>
              <span className="ml-2">{profile.distance} miles away</span>
            </p>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.interests.slice(0, 3).map((interest, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-card text-white text-xs rounded-full"
                >
                  {interest}
                </span>
              ))}
              {profile.interests.length > 3 && (
                <span className="px-3 py-1 bg-white/20 backdrop-blur-card text-white text-xs rounded-full">
                  +{profile.interests.length - 3} more
                </span>
              )}
            </div>
            
            <p className="text-white/80 mt-3 text-sm line-clamp-2">
              {profile.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
