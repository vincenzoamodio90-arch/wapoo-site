import React, { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleTouchEnd = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
      activation: number; // 0 to 1, triggered by mouse

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 0.08;
        this.vy = (Math.random() - 0.5) * 0.08;
        this.radius = Math.random() * 1.8 + 1.2;
        this.baseAlpha = Math.random() * 0.25 + 0.2;
        this.color = '63, 94, 247'; // Wapoo Blue
        this.pulse = Math.random() * Math.PI;
        this.pulseSpeed = 0.008 + Math.random() * 0.012;
        this.activation = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        // Mouse interaction: activation and physical attraction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const activeRadius = 250;
          
          if (distance < activeRadius) {
            const targetActivation = Math.pow((activeRadius - distance) / activeRadius, 1.2);
            this.activation += (targetActivation - this.activation) * 0.15;
            
            // Physical attraction: move towards mouse when activated
            const pullForce = this.activation * 0.5;
            this.x += (dx / distance) * pullForce;
            this.y += (dy / distance) * pullForce;
          } else {
            this.activation *= 0.9;
          }

          // Parallax
          const parallaxX = (mouse.x - canvas.width / 2) * (this.z / 6000);
          const parallaxY = (mouse.y - canvas.height / 2) * (this.z / 6000);
          this.x += (parallaxX - (this.x_parallax || 0)) * 0.05;
          this.y += (parallaxY - (this.y_parallax || 0)) * 0.05;
          this.x_parallax = parallaxX;
          this.y_parallax = parallaxY;
        } else {
          this.activation *= 0.85;
        }

        if (this.x < -100) this.x = canvas.width + 100;
        if (this.x > canvas.width + 100) this.x = -100;
        if (this.y < -100) this.y = canvas.height + 100;
        if (this.y > canvas.height + 100) this.y = -100;
      }

      x_parallax = 0;
      y_parallax = 0;

      draw() {
        if (!ctx) return;
        
        const scale = 1000 / (1000 + this.z);
        const pulseVal = (Math.sin(this.pulse) + 1) / 2;
        
        // Brighter and more visible
        let alpha = (this.baseAlpha + pulseVal * 0.1 + this.activation * 1.2) * scale;
        let size = (this.radius + this.activation * 5) * scale;
        let glow = (5 + this.activation * 60) * scale;

        // Outer glow for activated neurons
        if (this.activation > 0.05) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color}, ${this.activation * 0.2 * scale})`;
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${this.color}, ${Math.min(alpha, 1)})`;
        
        if (alpha > 0.1) {
          ctx.shadowBlur = glow;
          ctx.shadowColor = `rgba(${this.color}, ${0.7 + this.activation * 0.3})`;
          
          if (this.activation > 0.3) {
            ctx.shadowBlur = glow * 1.8;
          }
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Brilliant white core
        if (this.activation > 0.1) {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(this.activation * 1.8, 1)})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, size * 0.45, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background grid remains subtle
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(63, 94, 247, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 120;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dz = particles[i].z - particles[j].z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 220) {
            ctx.beginPath();
            const scale = 1000 / (1000 + (particles[i].z + particles[j].z) / 2);
            
            const avgActivation = (particles[i].activation + particles[j].activation) / 2;
            const opacity = (0.12 + avgActivation * 1.2) * (1 - distance / 220) * scale;
            
            ctx.strokeStyle = `rgba(63, 94, 247, ${Math.min(opacity, 1)})`;
            ctx.lineWidth = (0.6 + avgActivation * 3) * scale;
            
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            if (avgActivation > 0.3 && Math.random() > 0.9) {
              const sparkPos = Math.random();
              const sx = particles[i].x + (particles[j].x - particles[i].x) * sparkPos;
              const sy = particles[i].y + (particles[j].y - particles[i].y) * sparkPos;
              
              ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(avgActivation * 2, 1)})`;
              ctx.beginPath();
              ctx.arc(sx, sy, 2.5 * scale, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Absolute black digital background for maximum contrast */}
      <div className="absolute inset-0 bg-[#02040a]" />
      
      {/* Subtle radial gradients for depth */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
      />
      
      {/* Very subtle blue overlay */}
      <div className="absolute inset-0 bg-blue-950/20 z-20" />
    </div>
  );
}
