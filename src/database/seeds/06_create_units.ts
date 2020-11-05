import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('units').insert([
    {
      description: "Unidade A",
      code: "959e09d387a9",
      image: "unidadex",
      email: "unidadea@unidade.com",
      latitude: "-16.681598",
      longitude: "-49.254997",
      city: "Goiânia",
      uf: "GO"
    },
    {
      description: "Unidade B",
      code: "0dfa5683ffcb",
      image: "unidadey",
      email: "unidadeb@unidade.com",
      latitude: "-16.675133",
      longitude: "-49.262518",
      city: "Goiânia",
      uf: "GO"
    },
    {
      description: "Unidade C",
      code: "e71b6a63bf7f",
      image: "unidadez",
      email: "unidadec@unidade.com",
      latitude: "-16.670440",
      longitude: "-49.256307",
      city: "Goiânia",
      uf: "GO"
    },
    {
      description: "Unidade D",
      code: "2e4ce12da93e",
      image: "unidadew",
      email: "unidaded@unidade.com",
      latitude: "-16.677186",
      longitude: "-49.245876",
      city: "Goiânia",
      uf: "GO"
    },
    {
      description: "Unidade E",
      code: "c8d94f108525",
      image: "unidadev",
      email: "unidadee@unidade.com",
      latitude: "-16.666345",
      longitude: "-49.260514",
      city: "Goiânia",
      uf: "GO"
    },
  ])
}