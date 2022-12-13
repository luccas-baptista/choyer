import React from 'react';

import "./distribuidores.css";

const Distribuidores = () => {


  return (
    <>
      <div className="main-distribuidores">

        <div className="main-title-distribuidores">
          <h1>Nossos Distribuidores</h1>
        </div>

        {/* AMAZONAS */}
        <div className="estado-wrapper" data-state="AM">
          <div className="estado-title">
            <h2>Amazonas</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Manaus</h3>
                </div>
                <div className="nome-loja">
                  <h4>Gleisse Santos</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Raimunda Marinho, n. 194 - Novo Aleixo</p>
                </div>
                <div className="telefone-loja">
                  <p>(92) 98151-6714</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CEARA */}
        <div className="estado-wrapper" data-state="CE">
          <div className="estado-title">
            <h2>Ceará</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Fortaleza</h3>
                </div>
                <div className="nome-loja">
                  <h4>Braspet Equipamentos</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua C, n. 900 - Parque Montenegro I</p>
                </div>
                <div className="telefone-loja">
                  <p>(85) 98889-1007</p>
                </div>
              </li>

            </ul>
          </div>
        </div>


        {/* DISTRITO FEDERAL */}
        <div className="estado-wrapper" data-state="DF">
          <div className="estado-title">
            <h2>Distrito Federal</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Brasília</h3>
                </div>
                <div className="nome-loja">
                  <h4>Braspet Equipamentos</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Qne 18, 40, Loja 6, Bairro Taguatinga Norte</p>
                </div>
                <div className="telefone-loja">
                  <p>(61) 8517-0622</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Brasília</h3>
                </div>
                <div className="nome-loja">
                  <h4>Império Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>Colônia Agrícola 26 de Setembro - R. 1 CH 3A, Taguatinga</p>
                </div>
                <div className="telefone-loja">
                  <p>(61) 99832-3880</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Brasília</h3>
                </div>
                <div className="nome-loja">
                  <h4>Petstop Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>Qd. CLN 105, 17, Bloco B, Bairro Ada Norte</p>
                </div>
                <div className="telefone-loja">
                  <p>(61) 98450-2807</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* GOIÁS */}
        <div className="estado-wrapper" data-state="GO">
          <div className="estado-title">
            <h2>Goías/Distrito Federal</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Goiânia</h3>
                </div>
                <div className="nome-loja">
                  <h4>Centro Oeste Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Padre Monte, n. 1065 - Bairro Goiá</p>
                </div>
                <div className="telefone-loja">
                  <p>(62) 3286-4967</p>
                  <p>(62) 99999-3667</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Goiânia</h3>
                </div>
                <div className="nome-loja">
                  <h4>Stylo Dog</h4>
                </div>
                <div className="endereco-loja">
                  <p>Avenida Itália, 953 - Jardim Europa</p>
                </div>
                <div className="telefone-loja">
                  <p>(62) 3247-3271</p>
                  <p>(62) 98139-0665</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* MINAS GERAIS */}
        <div className="estado-wrapper" data-state="MG">
          <div className="estado-title">
            <h2>Minas Gerais</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Montes Claro</h3>
                </div>
                <div className="nome-loja">
                  <h4>Expresso Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Monte Plano, 120 - Santa Rita I</p>
                </div>
                <div className="telefone-loja">
                  <p>(38) 99112-4064</p>
                  <p>(38) 99227-9994</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Belo Horizonte</h3>
                </div>
                <div className="nome-loja">
                  <h4>Vetmix Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Padre Eustáquio, n. 2723 - Bairro Padre Eustáquio</p>
                </div>
                <div className="telefone-loja">
                  <p>(31) 3273-6679</p>
                  <p>(41) 98471-8988</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* PARAÍBA */}
        <div className="estado-wrapper" data-state="PB">
          <div className="estado-title">
            <h2>Paraíba</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>João Pessoa</h3>
                </div>
                <div className="nome-loja">
                  <h4>MULTQUIL Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>Avenida Epitácio Pessoa, 1738 - Expedicionários</p>
                </div>
                <div className="telefone-loja">
                  <p>(83) 3235-5800</p>
                  <p>(83) 99118-0182</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* PARANÁ */}
        <div className="estado-wrapper" data-state="PR">
          <div className="estado-title">
            <h2>Paraná</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Cascável</h3>
                </div>
                <div className="nome-loja">
                  <h4>Grifo Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Virgilio Formighieri, 321 - Parque São Paulo</p>
                </div>
                <div className="telefone-loja">
                  <p>(45) 99844-4432</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

         {/* PERNAMBUCO */}
         <div className="estado-wrapper" data-state="PR">
          <div className="estado-title">
            <h2>Pernambuco</h2>
          </div>
          <div className="estado-lojas">
            <ul>
              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Recife</h3>
                </div>
                <div className="nome-loja">
                  <h4>Brasvet Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>Av. Marechal Mascarenhas De Moraes, 4989 - Galpão 000c - Loja 101 - Imbiribeira</p>
                </div>
                <div className="telefone-loja">
                  <p>(81)3338-2651</p>
                  <p>(81) 99815-5142</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* RIO DE JANEIRO */}
        <div className="estado-wrapper" data-state="RJ">
          <div className="estado-title">
            <h2>Rio de Janeiro</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Rio de Janeiro</h3>
                </div>
                <div className="nome-loja">
                  <h4>Tosa Center</h4>
                </div>
                <div className="endereco-loja">
                  <p>Avenida 17 de Julho, n. 416 - Ateado</p>
                </div>
                <div className="telefone-loja">
                  <p>(24) 98806-0847</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* RONDÔNIA */}
        <div className="estado-wrapper" data-state="RO">
          <div className="estado-title">
            <h2>Rondônia</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Porto Velho</h3>
                </div>
                <div className="nome-loja">
                  <h4>Espaço Pet Distribuição</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Açafrão, 3002 - Cohab</p>
                </div>
                <div className="telefone-loja">
                  <p>(69) 98130-7716</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* RIO GRANDE DO NORTE */}
        <div className="estado-wrapper" data-state="RS">
          <div className="estado-title">
            <h2>Rio Grande do Norte</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Natal</h3>
                </div>
                <div className="nome-loja">
                  <h4>Pet Mais</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Presidente Sarmento, 813</p>
                </div>
                <div className="telefone-loja">
                  <p>(84) 3206-6272</p>
                  <p>(84) 99481-8036</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* SANTA CATARINA */}
        <div className="estado-wrapper" data-state="SC">
          <div className="estado-title">
            <h2>Santa Catarina</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Balneário Camboriú</h3>
                </div>
                <div className="nome-loja">
                  <h4>ALM Distribuidora</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua 1950, n. 1020 - Centro</p>
                </div>
                <div className="telefone-loja">
                  <p>(47) 98478-0978</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* SERGIPE */}
        <div className="estado-wrapper" data-state="SE">
          <div className="estado-title">
            <h2>Sergipe</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Aracaju</h3>
                </div>
                <div className="nome-loja">
                  <h4>Super Fofos</h4>
                </div>
                <div className="endereco-loja">
                  <p>R. Luiz Chagas, 96, Atalaia</p>
                </div>
                <div className="telefone-loja">
                  <p>(77) 99854-3561</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* SÃO PAULO */}
        <div className="estado-wrapper" data-state="SP">
          <div className="estado-title">
            <h2>São Paulo</h2>
          </div>
          <div className="estado-lojas">
            <ul>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Bauru</h3>
                </div>
                <div className="nome-loja">
                  <h4>AD Afiações</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua José Salim Izar, n. 323 - Jardim Vania Maria</p>
                </div>
                <div className="telefone-loja">
                  <p>(14) 99765-0760</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Sorocaba</h3>
                </div>
                <div className="nome-loja">
                  <h4>Angel Mix</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Francisco Neves, 90 - Parque Campolim</p>
                </div>
                <div className="telefone-loja">
                  <p>(15) 99674-9288</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Praia Grande</h3>
                </div>
                <div className="nome-loja">
                  <h4>Boutique do Tosador</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Maria Martins Baptista, n. 425 - Vila Sonia</p>
                </div>
                <div className="telefone-loja">
                  <p>(13) 98828-5348</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São Paulo</h3>
                </div>
                <div className="nome-loja">
                  <h4>Diddi Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua José Alves Coelho, 221 - Itaim Paulista</p>
                </div>
                <div className="telefone-loja">
                  <p>(11) 94188-9979</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São José do Rio Preto</h3>
                </div>
                <div className="nome-loja">
                  <h4>Elite Maqlan</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Jorge Tibirica, n. 2425 - Parque Industrial</p>
                </div>
                <div className="telefone-loja">
                  <p>(17) 3212-7793</p>
                  <p>(17) 99715-7793</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Piracicaba</h3>
                </div>
                <div className="nome-loja">
                  <h4>For Groomer</h4>
                </div>
                <div className="endereco-loja">
                  <p>Avenida Piracicamirim, 2344 - Piracicamirim</p>
                </div>
                <div className="telefone-loja">
                  <p>(19) 97155-9564</p>
                  <p>(19) 99633-5429</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>São Paulo</h3>
                </div>
                <div className="nome-loja">
                  <h4>Grupo Vet Pet</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua Marcos Frankental, 179 - Chácara Inglesa</p>
                </div>
                <div className="telefone-loja">
                  <p>(11) 3903-1895</p>
                  <p>(11) 94322-1777</p>
                </div>
              </li>

              <li className="card-loja">
                <div className="cidade-loja">
                  <h3>Américo Brasiliense</h3>
                </div>
                <div className="nome-loja">
                  <h4>Naiara Janaina</h4>
                </div>
                <div className="endereco-loja">
                  <p>Rua José Paulo Abi Jaudi, 425 - Vila Cerqueira</p>
                </div>
                <div className="telefone-loja">
                  <p>(16) 99776-3932</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Distribuidores
