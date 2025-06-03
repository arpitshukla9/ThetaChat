import { MessageSquare, Zap, Shield, Users, Star, Heart } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-yellow-400/25 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-400/30 rounded-full blur-lg animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
        
        {/* Rotating Rings */}
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 left-16 animate-float">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Zap className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
        
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Shield className="w-6 h-6 text-green-300" />
          </div>
        </div>
        
        <div className="absolute top-1/2 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Users className="w-6 h-6 text-blue-300" />
          </div>
        </div>
        
        {/* Particle System */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <polygon points="30,2 50,15 50,37 30,50 10,37 10,15" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center p-12 text-white min-h-screen">
        <div className="max-w-lg space-y-8">
          {/* Central Logo with Animated Ring */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-2 rounded-full bg-indigo-900 flex items-center justify-center">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-yellow-400 rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -right-2 w-3 h-3 bg-cyan-400 rounded-full -translate-y-1/2"></div>
              <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-pink-400 rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -left-2 w-3 h-3 bg-green-400 rounded-full -translate-y-1/2"></div>
            </div>
          </div>

          {/* 3D Text Effect */}
          <div className="space-y-4">
            <h2 className="text-5xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed font-medium max-w-md mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Star className="w-8 h-8 text-yellow-300 mb-2 mx-auto group-hover:rotate-12 transition-transform duration-300" />
              <p className="text-sm font-semibold">Premium Experience</p>
            </div>
            
            <div className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Heart className="w-8 h-8 text-pink-300 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-semibold">Loved by Users</p>
            </div>
          </div>

          {/* Animated Progress Indicators */}
          <div className="flex items-center justify-center gap-3 pt-8">
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white/40 rounded-full animate-pulse"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '1.5s'
                  }}
                ></div>
              ))}
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full animate-pulse"
                  style={{
                    animationDelay: `${(i + 3) * 0.3}s`,
                    animationDuration: '1.5s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AuthImagePattern;