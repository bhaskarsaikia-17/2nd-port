import { useEffect, useRef } from 'react';

interface UseMouseReflectorOptions {
  cardId?: string;
  glowRadius?: number;
  elementGlowRadius?: number;
  proximityThreshold?: number;
  elementProximityThreshold?: number;
  glowOpacity?: number;
  elementGlowOpacity?: number;
}

export function useMouseReflector(options: UseMouseReflectorOptions = {}) {
  const {
    cardId = 'discord-profile-card',
    glowRadius = 500,
    elementGlowRadius = 175,
    proximityThreshold = 100,
    elementProximityThreshold = 50,
    glowOpacity = 0.3,
    elementGlowOpacity = 0.6
  } = options;

  const mouseHandlerRef = useRef<((e: MouseEvent) => void) | null>(null);

  useEffect(() => {
    const initializeGlowEffect = () => {
      // Remove existing event listener if it exists
      if (mouseHandlerRef.current) {
        document.removeEventListener('mousemove', mouseHandlerRef.current);
      }

      const card = document.getElementById(cardId) as HTMLElement;
      if (!card) return;

      // Cleanup existing glow elements
      const existingGlowContainers = card.querySelectorAll('.glow-container');
      existingGlowContainers.forEach(container => container.remove());
      const existingElementGlows = document.querySelectorAll('[id^="glow-element-"]');
      existingElementGlows.forEach(elem => elem.remove());

      // Set card position to relative for absolute positioning
      card.style.position = 'relative';

      // Initialize element glows
      const glowElements = document.querySelectorAll('.element-glow') as NodeListOf<HTMLElement>;
      glowElements.forEach((element, index) => {
        const glowMaskElement = document.createElement('div');
        glowMaskElement.id = `glow-element-${index}`;
        glowMaskElement.className = 'absolute bg-gradient-to-r from-indigo-600/40 via-purple-600/40 to-indigo-600/40 opacity-0 blur-xl pointer-events-none';
        glowMaskElement.style.width = `${elementGlowRadius}px`;
        glowMaskElement.style.height = `${elementGlowRadius}px`;
        glowMaskElement.style.borderRadius = '50%';
        glowMaskElement.style.transform = 'translate(-50%, -50%)';
        glowMaskElement.style.transition = 'opacity 150ms ease';
        glowMaskElement.style.zIndex = '1';

        element.appendChild(glowMaskElement);
      });

      // Mouse move handler
      const handleMouseMove = (e: MouseEvent) => {
        const card = document.getElementById(cardId) as HTMLElement;
        if (!card) return;

        // Card rect calculation removed as it's currently unused
        // const rect = card.getBoundingClientRect();

        // Check if mouse is near the card (currently unused)
        // const isNearCard =
        //   e.clientX >= rect.left - proximityThreshold &&
        //   e.clientX <= rect.right + proximityThreshold &&
        //   e.clientY >= rect.top - proximityThreshold &&
        //   e.clientY <= rect.bottom + proximityThreshold;

        // Handle element glows
        const glowElements = document.querySelectorAll('.element-glow') as NodeListOf<HTMLElement>;
        glowElements.forEach((element, index) => {
          const parentCard = element.closest('.backdrop-blur-md') as HTMLElement;
          if (!parentCard) return;

          const glowMaskElement = document.getElementById(`glow-element-${index}`);
          if (!glowMaskElement) return;

          const elementRect = parentCard.getBoundingClientRect();
          const isNearElement =
            e.clientX >= elementRect.left - elementProximityThreshold &&
            e.clientX <= elementRect.right + elementProximityThreshold &&
            e.clientY >= elementRect.top - elementProximityThreshold &&
            e.clientY <= elementRect.bottom + elementProximityThreshold;

          if (isNearElement) {
            const x = e.clientX - elementRect.left;
            const y = e.clientY - elementRect.top;

            glowMaskElement.style.opacity = elementGlowOpacity.toString();
            glowMaskElement.style.left = `${x}px`;
            glowMaskElement.style.top = `${y}px`;
          } else {
            glowMaskElement.style.opacity = '0';
          }
        });
      };

      mouseHandlerRef.current = handleMouseMove;
      document.addEventListener('mousemove', handleMouseMove);
    };

    // Initialize with a small delay to ensure DOM is ready
    const timer = setTimeout(initializeGlowEffect, 100);

    return () => {
      clearTimeout(timer);
      if (mouseHandlerRef.current) {
        document.removeEventListener('mousemove', mouseHandlerRef.current);
      }
      
      // Cleanup glow elements
      const existingElementGlows = document.querySelectorAll('[id^="glow-element-"]');
      existingElementGlows.forEach(elem => elem.remove());
    };
  }, [cardId, glowRadius, elementGlowRadius, proximityThreshold, elementProximityThreshold, glowOpacity, elementGlowOpacity]);

  return null;
}
