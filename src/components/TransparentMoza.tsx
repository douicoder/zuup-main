import React, { useRef, useEffect } from 'react';

interface Props extends React.HTMLAttributes<HTMLCanvasElement> {
  src: string;
  alt?: string;
}

const TransparentMoza: React.FC<Props> = ({ src, alt, className, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new Image();
    // Prevent CORS issues if testing from external URLs (though we use local paths)
    img.crossOrigin = "anonymous";
    img.src = src;
    
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const brightness = (data[i] + data[i+1] + data[i+2]) / 3;
        if (brightness < 30) {
          data[i+3] = 0; // Pure black becomes transparent
        } else {
          // Keep white but map alpha to brightness for smooth anti-aliased edges
          data[i] = 255;
          data[i+1] = 255;
          data[i+2] = 255;
          data[i+3] = Math.floor((brightness / 255) * 255);
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
    };
  }, [src]);

  return <canvas ref={canvasRef} className={`block ${className}`} aria-label={alt} {...props} />;
};

export default TransparentMoza;
