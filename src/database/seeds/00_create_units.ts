import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('units').insert([
    // {
    //   description: "Unidade X",
    //   code: "959e09d387a9",
    //   image: "unidadex",
    //   email: "unidadeX@unidade.com",
    //   latitude: "-16.681598",
    //   longitude: "-49.254997",
    //   city: "Goiânia",
    //   uf: "GO"
    // },
    // {
    //   description: "Unidade Y",
    //   code: "0dfa5683ffcb",
    //   image: "unidadey",
    //   email: "unidadey@unidade.com",
    //   latitude: "-16.675133",
    //   longitude: "-49.262518",
    //   city: "Goiânia",
    //   uf: "GO"
    // },
    // {
    //   description: "Unidade Z",
    //   code: "e71b6a63bf7f",
    //   image: "unidadez",
    //   email: "unidadez@unidade.com",
    //   latitude: "-16.670440",
    //   longitude: "-49.256307",
    //   city: "Goiânia",
    //   uf: "GO"
    // },
    // {
    //   description: "Unidade W",
    //   code: "2e4ce12da93e",
    //   image: "unidadew",
    //   email: "unidadew@unidade.com",
    //   latitude: "-16.677186",
    //   longitude: "-49.245876",
    //   city: "Goiânia",
    //   uf: "GO"
    // },
    // {
    //   description: "Unidade V",
    //   code: "c8d94f108525",
    //   image: "unidadev",
    //   email: "unidadev@unidade.com",
    //   latitude: "-16.666345",
    //   longitude: "-49.260514",
    //   city: "Goiânia",
    //   uf: "GO"
    // },
    {
      description: "Unidade X",
      code: "959e09d387a9",
      image: "unidadex",
      email: "unidadeX@unidade.com",
      latitude: "-16.781755",
      longitude: "-49.294090",
      city: "Aparecida de Goiânia",
      uf: "GO"
    },
    {
      description: "Unidade Y",
      code: "0dfa5683ffcb",
      image: "unidadey",
      email: "unidadey@unidade.com",
      latitude: "-16.782186",
      longitude: "-49.297373",
      city: "Aparecida de Goiânia",
      uf: "GO"
    },
    {
      description: "Unidade Z",
      code: "e71b6a63bf7f",
      image: "unidadez",
      email: "unidadez@unidade.com",
      latitude: "-16.779084",
      longitude: "-49.295710",
      city: "Aparecida de Goiânia",
      uf: "GO"
    },
    {
      description: "Unidade W",
      code: "2e4ce12da93e",
      image: "unidadew",
      email: "unidadew@unidade.com",
      latitude: "-16.779577",
      longitude: "-49.290871",
      city: "Aparecida de Goiânia",
      uf: "GO"
    },
    {
      description: "Unidade V",
      code: "c8d94f108525",
      image: "unidadev",
      email: "unidadev@unidade.com",
      latitude: "-16.781909",
      longitude: "-49.291429",
      city: "Aparecida de Goiânia",
      uf: "GO"
    },
  ])
}