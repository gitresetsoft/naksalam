import React from 'react';
import Cards from './Cards';

function Canvas() {
  return (
    // Main container with responsive height based on screen size
    <div className="h-[85vh] md:h-[70vh] w-full bg-gradient-to-b from-purple-200 via-purple-400 to-purple-800 flex items-center justify-center">
      {/* Mobile canvas container with glass effect - now responsive */}
      <div className="w-[min(375px,100vw)] h-[min(667px,100vh)] relative overflow-hidden flex items-center justify-center">
        {/* Cards container */}
        <div className="relative w-full h-full">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Canvas;