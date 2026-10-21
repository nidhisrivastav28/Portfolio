import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButton() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
      fixed bottom-8 right-8 z-50
      w-14 h-14 rounded-full
      bg-gradient-to-r from-violet-600 to-blue-600
      flex items-center justify-center
      shadow-[0_0_25px_rgba(139,92,246,.45)]
      transition-all duration-300
      hover:scale-110
      hover:shadow-[0_0_35px_rgba(139,92,246,.8)]
      "
    >
      {isTop ? (
        <ArrowDown size={24} />
      ) : (
        <ArrowUp size={24} />
      )}
    </button>
  );
}