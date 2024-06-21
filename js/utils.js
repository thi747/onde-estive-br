export default function setOnMap(uf, map, x, y) {
  document.getElementById(uf).setAttribute("d", map);
  document.getElementById(`${uf}_label`).setAttribute("transform", `matrix(1 0 0 1 ${x} ${y})`);
}
