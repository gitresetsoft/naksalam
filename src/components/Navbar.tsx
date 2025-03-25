import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="pt-10 w-full md:pb-10 fade-in-static-2">
      <nav className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/20 shadow-lg rounded-xl flex md:flex-row md:justify-between p-2 text-center">
        
        {/* Left: Title */}
        <div className="text-left w-full">
          <div 
            className="md:text-xl text-sm md:font-semibold font-bold"
            style={{
              background: 'linear-gradient(135deg, #FF69B4 0%, #00BFFF 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Nak Salam?
          </div>
          <div className="hidden md:block text-xs relative mt-[-2px]">
            Dibawa oleh:
          </div>
          <div className="md:text-xs text-[10px] block">
            <a 
              href="https://ambik.link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold"
              style={{
                background: 'linear-gradient(135deg, #FF69B4 0%, #00BFFF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Ambik!
            </a>
          </div>
        </div>

        {/* Middle: Links */}
        <div className="w-full flex justify-center gap-6 md:gap-10 text-slate-700 font-medium md:text-2xl mt-0">
          <Link to="/about" className="flex flex-col items-center hover:text-slate-900">
            📖 <span className="text-xs md:mt-1">Tentang</span>
          </Link>
          <Link to="/reference" className="flex flex-col items-center hover:text-slate-900">
            🕌 <span className="text-xs md:mt-1">Rujukan</span>
          </Link>
        </div>

        {/* Right: Contact */}
        <div className="w-full flex flex-col items-end text-slate-700 font-medium md:text-2xl mt-0">
          💌 <span className="text-xs md:mt-1">Hubungi saya</span>
        </div>

      </nav>
    </div>
  );
}
