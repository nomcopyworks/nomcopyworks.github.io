interface CursorState {
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

export function initCustomCursor(): void {
  // Only run on desktop with pointer devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const follower = document.createElement('div');
  follower.className = 'custom-cursor-follower';
  document.body.appendChild(follower);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let followerX = 0;
  let followerY = 0;
  let scale = 1;
  let followerScale = 1;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Magnetic effect for interactive elements
  const magneticElements = document.querySelectorAll(
    'a, button, [data-magnetic]'
  );
  
  magneticElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      scale = 2.5;
      followerScale = 1.5;
      cursor.classList.add('cursor-hover');
      follower.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
      scale = 1;
      followerScale = 1;
      cursor.classList.remove('cursor-hover');
      follower.classList.remove('cursor-hover');
    });

    // Magnetic pull effect
    el.addEventListener('mousemove', (e) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (mouseX - centerX) * 0.3;
      const deltaY = (mouseY - centerY) * 0.3;

      if (
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom
      ) {
        (el as HTMLElement).style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    });

    el.addEventListener('mouseleave', () => {
      (el as HTMLElement).style.transform = 'translate(0, 0)';
    });
  });

  // Smooth cursor follow with lerp
  function lerp(start: number, end: number, factor: number): number {
    return start + (end - start) * factor;
  }

  function animate() {
    // Cursor follows immediately with slight easing
    cursorX = lerp(cursorX, mouseX, 0.15);
    cursorY = lerp(cursorY, mouseY, 0.15);

    // Follower has more lag for trailing effect
    followerX = lerp(followerX, mouseX, 0.08);
    followerY = lerp(followerY, mouseY, 0.08);

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(${scale})`;
    follower.style.transform = `translate(${followerX}px, ${followerY}px) scale(${followerScale})`;

    requestAnimationFrame(animate);
  }

  animate();

  // Hide default cursor
  document.body.style.cursor = 'none';
  document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
    (el as HTMLElement).style.cursor = 'none';
  });
}

// Cleanup on page navigation
export function cleanupCustomCursor(): void {
  document.querySelectorAll('.custom-cursor, .custom-cursor-follower').forEach((el) => el.remove());
  document.body.style.cursor = '';
}
