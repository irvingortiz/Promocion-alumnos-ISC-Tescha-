// src/data/eventos.js

const BASE = import.meta.env.BASE_URL;
export const eventos = [
  {
    titulo: "Innovatec",
    descripcion: "Proyectos de innovación tecnológica.",
    fotos: [`${BASE}fotos/innovatec/1.jpg`, `${BASE}fotos/innovatec/2.jpg`, `${BASE}fotos/innovatec/3.jpg`, `${BASE}fotos/innovatec/4.jpg`, `${BASE}fotos/innovatec/5.jpg`, `${BASE}fotos/innovatec/6.jpg`, `${BASE}fotos/innovatec/7.jpg`]
  },
  {
    titulo: "Flisol",
    descripcion: "Festival de software libre.",
    fotos: [`${BASE}fotos/flisol-2026/1.jpg`, `${BASE}fotos/flisol-2026/2.jpg` , `${BASE}fotos/flisol-2026/3.jpg`, `${BASE}fotos/flisol-2026/4.jpg`, `${BASE}fotos/flisol-2026/5.jpg`, `${BASE}fotos/flisol-2026/6.jpg`, `${BASE}fotos/flisol-2026/7.jpg`, `${BASE}fotos/flisol-2026/8.jpg`, `${BASE}fotos/flisol-2026/9.jpg`, `${BASE}fotos/flisol-2026/10.jpg`, `${BASE}fotos/flisol-2026/11.jpg`, `${BASE}fotos/flisol-2026/12.jpg`]
  },
  {
    titulo: "Wolftec",
    descripcion: "Ingeniería en Sistemas Computacionales participó en el “AXOLOTL TOURNAMENT 2026",
    fotos: [`${BASE}fotos/wolftec/1.jpg`, `${BASE}fotos/wolftec/2.jpg`, `${BASE}fotos/wolftec/3.jpg`, `${BASE}fotos/wolftec/4.jpg`]
  },
  {
    titulo: "Proyecto Integrador",
    descripcion: "En el marco del aprendizaje situado y la vinculación con el sector productivo",
    fotos: [`${BASE}fotos/integrador/1.jpg`, `${BASE}fotos/integrador/2.jpg`, `${BASE}fotos/integrador/3.jpg`, `${BASE}fotos/integrador/4.jpg`]
  },
  {
    titulo: "Director General",
    descripcion: "Encuentro con el Director General",
    fotos: [`${BASE}fotos/director/1.jpg`, `${BASE}fotos/director/2.jpg`]
  }
];