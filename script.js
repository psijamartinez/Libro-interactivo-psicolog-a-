function show(id) {
  document.querySelectorAll('.node')
    .forEach(n => n.classList.remove('active'));
  document.getElementById(id)
    .classList.add('active');
}
