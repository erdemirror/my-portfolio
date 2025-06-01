import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [meteors, setMeteors] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars
    const starArray = [];
    for (let i = 0; i < 120; i++) {
      starArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 2,
      });
    }
    setStars(starArray);

    // Generate meteors more frequently
    const meteorInterval = setInterval(() => {
      const newMeteor = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        top: Math.random() * 40,
        width: Math.random() * 150 + 80,
        height: 2,
        delay: 0,
      };

      setMeteors((prev) => [...prev, newMeteor]);

      // Remove meteor after animation duration + buffer
      setTimeout(() => {
        setMeteors((prev) => prev.filter((m) => m.id !== newMeteor.id));
      }, 3500);
    }, 800); // spawn every 800ms

    return () => clearInterval(meteorInterval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: `${meteor.left}%`,
            top: `${meteor.top}%`,
            width: `${meteor.width}px`,
            height: `${meteor.height}px`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
