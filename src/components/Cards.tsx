import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardData {
  id: number;
  name: string;
  image: string;
  bio: string;
}

const DUMMY_DATA: CardData[] = [
  {
    id: 1,
    name: "Dragon Warrior",
    image: "https://picsum.photos/seed/1/300/400",
    bio: "Legendary fighter from the Eastern Realms"
  },
  {
    id: 2,
    name: "Forest Mage",
    image: "https://picsum.photos/seed/2/300/400",
    bio: "Master of nature's ancient secrets"
  },
  {
    id: 3,
    name: "Shadow Knight",
    image: "https://picsum.photos/seed/3/300/400",
    bio: "Protector of the midnight realm"
  }
];

function Cards() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [showOverlay, setShowOverlay] = useState<'correct' | 'wrong' | null>(null);
  const [exitX, setExitX] = useState<number>(0);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || startX === null) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setOffsetX(diff);
    e.preventDefault();
  };

  const moveToNextCard = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % DUMMY_DATA.length);
    setShowOverlay(null);
    setExitX(0);
  }, []);

  const handleDragEnd = () => {
    if (!isDragging) return;

    if (Math.abs(offsetX) > 100) {
      const isCorrect = offsetX > 0;
      setShowOverlay(isCorrect ? 'correct' : 'wrong');
      setExitX(isCorrect ? 1000 : -1000); // Set exit direction
      
      // Wait 2 seconds before showing next card
      setTimeout(moveToNextCard, 2000);
    } else {
      // Reset position if not swiped enough
      setOffsetX(0);
    }
    
    setIsDragging(false);
    setStartX(null);
  };

  const currentCard = DUMMY_DATA[currentIndex];

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="relative w-full max-w-[300px] bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl cursor-grab active:cursor-grabbing overflow-hidden"
          style={{
            transform: `translateX(${offsetX}px) rotate(${offsetX * 0.1}deg)`,
          }}
          initial={{ scale: 0.8, opacity: 0, x: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            x: showOverlay ? exitX : 0,
            transition: {
              x: { type: "spring", stiffness: 300, damping: 30 }
            }
          }}
          exit={{ 
            scale: 0.8, 
            opacity: 0,
            transition: { duration: 0.2 }
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {/* Card Image Container */}
          <div className="relative">
            <img
              src={currentCard.image}
              alt={currentCard.name}
              className="w-full h-[400px] object-cover select-none"
              draggable="false"
            />
            
            {/* Feedback Overlay */}
            <AnimatePresence>
              {showOverlay && (
                <motion.div
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 ${
                      showOverlay === 'correct' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ type: "spring", damping: 15 }}
                      className="text-6xl text-white"
                    >
                      {showOverlay === 'correct' ? '✓' : '✗'}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Swipe Indicators */}
            <motion.div 
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-red-500/30 to-transparent"
              animate={{ opacity: offsetX < 0 ? Math.min(Math.abs(offsetX) / 200, 0.7) : 0 }}
            />
            <motion.div 
              className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-green-500/30 to-transparent"
              animate={{ opacity: offsetX > 0 ? Math.min(Math.abs(offsetX) / 200, 0.7) : 0 }}
            />
          </div>
          
          {/* Card Content */}
          <motion.div 
            className="p-6 select-none bg-white/5 backdrop-blur-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-3 tracking-wide text-center">
              {currentCard.name}
            </h2>
            <p className="text-white/80 text-sm leading-relaxed text-center">
              {currentCard.bio}
            </p>
          </motion.div>

          {/* Card Decorations */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Ornamental Corners */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-300/30 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-300/30 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-300/30 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-300/30 rounded-br-xl" />
            
            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Cards;