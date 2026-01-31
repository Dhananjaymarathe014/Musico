import { useEffect, useRef } from 'react';

interface MusicNote {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
}

export default function MusicParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const musicNotes: MusicNote[] = [];
    const noteCount = 15; // Reduced count for subtlety

    // Create simple music notes
    for (let i = 0; i < noteCount; i++) {
      musicNotes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.15 + 0.05, // Very subtle opacity
        size: Math.random() * 4 + 6, // Small size (6-10px)
      });
    }

    // Draw a simple, minimal musical note
    const drawSimpleNote = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = `rgba(239, 68, 68, ${opacity})`;
      ctx.fillStyle = `rgba(239, 68, 68, ${opacity})`;
      ctx.lineWidth = 1;

      // Small note head (filled circle)
      ctx.beginPath();
      ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // Minimal stem
      ctx.beginPath();
      ctx.moveTo(x + size * 0.4, y);
      ctx.lineTo(x + size * 0.4, y - size * 0.8);
      ctx.stroke();

      ctx.restore();
    };

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.005; // Slower animation

      // Update and draw music notes
      musicNotes.forEach((note) => {
        // Update position with very subtle movement
        note.x += note.vx;
        note.y += note.vy;

        // Wrap around edges
        if (note.x < -20) note.x = canvas.width + 20;
        if (note.x > canvas.width + 20) note.x = -20;
        if (note.y < -20) note.y = canvas.height + 20;
        if (note.y > canvas.height + 20) note.y = -20;

        // Very subtle floating motion
        note.x += Math.sin(time + note.y * 0.005) * 0.1;
        note.y += Math.cos(time + note.x * 0.005) * 0.1;

        // Draw simple note
        drawSimpleNote(note.x, note.y, note.size, note.opacity);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}

