
function go(id) {
  document.querySelectorAll('.node').forEach(n => n.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
