export interface CarouselImage {
  src: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  /** Duration for one full cycle (both copies) in seconds. */
  duration?: number;
}

/**
 * Infinite horizontal carousel (merry-go-round). Duplicates the image set
 * for seamless looping. Uses CSS animation only.
 */
export function ImageCarousel({ images, duration = 45 }: ImageCarouselProps) {
  if (images.length === 0) return null;

  const duplicated = [...images, ...images];

  return (
    <div className="carousel-section" aria-hidden>
      <div className="carousel-wrap">
        <div
          className="carousel-track"
          style={{ animationDuration: `${duration}s` }}
        >
          {duplicated.map((img, i) => (
            <div className="carousel-item" key={i}>
              <img
                src={img.src}
                alt={img.alt ?? `Carousel image ${(i % images.length) + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
