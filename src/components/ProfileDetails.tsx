
import React, { useState } from 'react';
import { Profile } from '../types/profile';
import { X, MapPin, Heart, Calendar, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface ProfileDetailsProps {
  profile: Profile;
  onClose: () => void;
  onLike: () => void;
  onDislike: () => void;
  showFeedback?: boolean;
  isCorrect?: boolean;
  timerProgress?: number;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  profile,
  onClose,
  onLike,
  onDislike,
  showFeedback = false,
  isCorrect = false,
  timerProgress = 0
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [profile.imageUrl, ...(profile.detailImageUrls || [])];
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div
        className="relative bg-card rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-scale-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-card text-white rounded-full z-10 flex items-center justify-center hover:bg-black/40 transition-colors"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        
        {/* Image gallery */}
        <div className="relative w-full h-[40vh]">
          <div className="absolute inset-0">
            <img
              src={images[activeImage]}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Feedback overlay for image */}
          {showFeedback && (
            <div className={`absolute inset-0 z-[100] flex flex-col items-center justify-center 
              ${isCorrect ? 'bg-green-500/80' : 'bg-destructive/80'} backdrop-blur-sm`}>
              <h2 className="text-4xl font-bold text-white mb-4">
                {isCorrect ? 'Correct!' : 'Wrong!'}
              </h2>
              <div className="w-3/4 mt-4">
                <Progress value={timerProgress} className="h-2" />
              </div>
            </div>
          )}
          
          {/* Image indicator dots */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === activeImage
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  )}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          )}
          
          {/* Image navigation */}
          {images.length > 1 && !showFeedback && (
            <>
              <button
                className={cn(
                  "absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-card flex items-center justify-center",
                  activeImage === 0 ? "opacity-0" : "opacity-100 hover:bg-black/40"
                )}
                onClick={() => setActiveImage(prev => Math.max(0, prev - 1))}
                disabled={activeImage === 0}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              <button
                className={cn(
                  "absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-card flex items-center justify-center",
                  activeImage === images.length - 1 ? "opacity-0" : "opacity-100 hover:bg-black/40"
                )}
                onClick={() => setActiveImage(prev => Math.min(images.length - 1, prev + 1))}
                disabled={activeImage === images.length - 1}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>
        
        {/* Profile info */}
        <div className="overflow-y-auto p-6">
          <h2 className="text-3xl font-bold flex items-center">
            {profile.name}, {profile.age}
            {profile.compatibility && (
              <span className="ml-2 text-sm px-2 py-1 bg-accent/90 text-white rounded-full">
                {profile.compatibility}% Match
              </span>
            )}
          </h2>
          
          <div className="mt-2 flex items-center text-muted-foreground">
            <MapPin size={16} className="mr-1" />
            <span>{profile.location}</span>
            <span className="mx-2">•</span>
            <span>{profile.distance} miles away</span>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-card-foreground">{profile.bio}</p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action buttons (hidden when showing feedback) */}
        {!showFeedback && (
          <div className="p-6 border-t border-border">
            <div className="flex justify-center space-x-4">
              <button
                className="w-16 h-16 rounded-full flex items-center justify-center bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
                onClick={onDislike}
              >
                <X size={32} />
              </button>
              
              <button
                className="w-16 h-16 rounded-full flex items-center justify-center bg-[hsl(var(--success))] text-white hover:bg-[hsl(var(--success))]/90 transition-colors"
                onClick={onLike}
              >
                <Heart size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
