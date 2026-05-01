document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX - 25}px`;
    ripple.style.top = `${e.clientY - 25}px`;
    ripple.style.width = '50px';
    ripple.style.height = '50px';

    setTimeout(() => { ripple.remove(); }, 600);
});