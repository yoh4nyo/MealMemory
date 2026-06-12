import { Star } from "lucide-react";

type RatingStarsProps = {
  rating: number;
  showScore?: boolean;
};

export function RatingStars({ rating, showScore = false }: RatingStarsProps) {
  const rounded = Math.round(rating);

  return (
    <div className="flex items-center gap-1 text-[#db313f]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4"
          fill={index < rounded ? "currentColor" : "none"}
          aria-hidden="true"
        />
      ))}
      {showScore ? (
        <span className="ml-1 text-sm font-bold text-[#414943]">
          {rating.toFixed(1)}
        </span>
      ) : null}
    </div>
  );
}
