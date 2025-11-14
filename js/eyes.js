document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  document.querySelectorAll('.pupil').forEach(pupil => {
    const eye = pupil.parentElement;
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const deltaX = mouseX - eyeX;
    const deltaY = mouseY - eyeY;

    pupil.style.transform = `translate(-50%, -50%) translate(${deltaX / 25}px, ${deltaY / 25}px)`;
  });
});