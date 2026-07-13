import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "preload"> & {
  src: string;
  rootMargin?: string;
};

export default function LazyVideo({
  src,
  rootMargin = "200px",
  muted = true,
  loop = true,
  playsInline = true,
  onCanPlay,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isVisible) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad]);

  return (
    <video
      {...props}
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      preload="none"
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      onCanPlay={(event) => {
        onCanPlay?.(event);
        if (isVisible) void event.currentTarget.play().catch(() => undefined);
      }}
    />
  );
}
