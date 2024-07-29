import {} from "./uf/ac.js";
import {} from "./uf/al.js";
import {} from "./uf/am.js";
import {} from "./uf/ap.js";
import {} from "./uf/ba.js";
import {} from "./uf/ce.js";
import {} from "./uf/df.js";
import {} from "./uf/es.js";
import {} from "./uf/go.js";
import {} from "./uf/ma.js";
import {} from "./uf/mg.js";
import {} from "./uf/ms.js";
import {} from "./uf/mt.js";
import {} from "./uf/pa.js";
import {} from "./uf/pb.js";
import {} from "./uf/pe.js";
import {} from "./uf/pi.js";
import {} from "./uf/pr.js";
import {} from "./uf/rj.js";
import {} from "./uf/rn.js";
import {} from "./uf/ro.js";
import {} from "./uf/rr.js";
import {} from "./uf/rs.js";
import {} from "./uf/sc.js";
import {} from "./uf/se.js";
import {} from "./uf/sp.js";
import {} from "./uf/to.js";

// Função para colorir os estados
function colorirEstados() {
  for (let i = 0; i < ESTADOS.length; i++) {
    let pathElement = document.querySelector(`#${ESTADOS[i]}`);
    if (pathElement) {
      pathElement.classList = getClasseCor(QUERY_STRING[i]);
    }
  }
}

// Fornece a variável de cor do CSS
function getClasseCor(index) {
  if (index < 0 || index > 6) {
    index = 0;
  }
  return `status-${index}`;
}

// Função para obter parâmetros da URL
function obterParametroURL(nomeParam) {
  // Obter a parte da query da URL
  const queries = window.location.search;
  // Criar expressão regular para encontrar o parâmetro desejado na query
  const regex = new RegExp(`[?&]${nomeParam}(=([^&#]*)|&|#|$)`);

  const resultados = regex.exec(queries);
  if (!resultados?.[2]) {
    return null;
  }
  return decodeURIComponent(resultados[2].replace(/\+/g, " "));
}

function preencherInstrucoes() {
  const link = `${URL}?q=${QUERY_STRING}`;
  document.getElementById("usage").innerHTML += `<a href="${link}"><em>${URL}</em>?q=${QUERY_STRING}</a>`;
}

function preencherTabela() {
  const ufRow = document.getElementById("uf-row");
  const paramRow = document.getElementById("param-row");

  ESTADOS.forEach((uf, index) => {
    // Criar célula para UF
    const ufCell = document.createElement("th");
    ufCell.textContent = uf;
    ufRow.appendChild(ufCell);

    // Criar célula para o número correspondente
    const paramCell = document.createElement("td");
    paramCell.textContent = QUERY_STRING[index] || "";
    paramCell.classList = getClasseCor(QUERY_STRING[index]);
    paramRow.appendChild(paramCell);
  });
}

function randomizar() {
  let qs = "";
  for (let i = 0; i < TOTAL_UFS; i++) {
    qs += Math.floor(Math.random() * 7);
  }
  console.log(qs);
  window.location = `${URL}?q=${qs}`;
}

function validaQueryString(qs) {
  if (qs.length == TOTAL_UFS) {
    return qs;
  }
  if (qs.length < TOTAL_UFS) {
    return qs.padEnd(TOTAL_UFS, 0);
  }
  return qs.substring(0, TOTAL_UFS);
}

// ############################################################################################
const URL = window.location.href.split("?")[0];
// Mapeamento das UFs em ordem alfabética de sigla
const ESTADOS = Array.from(document.querySelectorAll("path"))
  .map((path) => path.id) // mapeia para obter os IDs do HTML
  .filter((id) => id); // filtra para remover IDs vazios
ESTADOS.sort();

const TOTAL_UFS = ESTADOS.length;

document.getElementById("btnrandom").addEventListener("click", randomizar);

// String de 27 dígitos (1/uf)
const QUERY_STRING = validaQueryString(obterParametroURL("q") || "430435133060063604340005030");
preencherInstrucoes();
preencherTabela();
colorirEstados();
