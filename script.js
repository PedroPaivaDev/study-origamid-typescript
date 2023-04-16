"use strict";
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <h3>R$ ${data.preco.toFixed(2)}</h3>
      <p>${data.descricao}</p>
      <p>${data.garantia} anos de garantia! </p>
      ${data.seguroAcidentes && '<spam>Possui seguro em caso de acidentes</spam>'}
      <p>Fabricante: ${data.empresaFabricante.nome}, ${data.empresaFabricante.fundacao}, ${data.empresaFabricante.pais}</p>
      <p>Montadora: ${data.empresaMontadora.nome}, ${data.empresaMontadora.fundacao}, ${data.empresaMontadora.pais}</p>
    </div>
  `;
}
