import React, { useEffect, useRef } from 'react';

function NeuralBackground({ isDarkMode }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Redimensionner le canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Paramètres du réseau neuronal
    const nodeCount = 80;
    const connectionDistance = 150;
    const nodeSpeed = 0.3;

    // Classe pour les neurones
    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * nodeSpeed;
        this.vy = (Math.random() - 0.5) * nodeSpeed;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebondir sur les bords
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Garder dans les limites
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode 
          ? 'rgba(0, 217, 255, 0.8)' 
          : 'rgba(0, 217, 255, 0.6)';
        ctx.fill();
        
        // Effet de lueur
        ctx.shadowBlur = 10;
        ctx.shadowColor = isDarkMode 
          ? 'rgba(0, 217, 255, 0.5)' 
          : 'rgba(0, 217, 255, 0.3)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Créer les neurones
    nodesRef.current = [];
    for (let i = 0; i < nodeCount; i++) {
      nodesRef.current.push(new Node());
    }

    // Animation
    const animate = () => {
      // Fond avec légère transparence pour effet de traînée
      ctx.fillStyle = isDarkMode 
        ? 'rgba(10, 14, 39, 0.1)' 
        : 'rgba(240, 244, 248, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;

      // Mettre à jour et dessiner les connexions
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.5;
            
            ctx.beginPath();
            ctx.strokeStyle = isDarkMode 
              ? `rgba(0, 217, 255, ${opacity})` 
              : `rgba(0, 217, 255, ${opacity * 0.7})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Dessiner les neurones
      nodes.forEach(node => node.draw());

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Nettoyage
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}

export default NeuralBackground;