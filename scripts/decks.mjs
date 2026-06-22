function normalizeBase(value) {
  let base = value || "/";

  if (!base.startsWith("/")) {
    base = `/${base}`;
  }

  if (!base.endsWith("/")) {
    base = `${base}/`;
  }

  return base;
}

const SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");

function withBase(value = "") {
  return `${SITE_BASE}${value.replace(/^[/]+/, "")}`;
}

export const decks = [
  {
    name: "openclass-percepcioncomputacional",
    entry: "slides.md",
    out: "dist",
    base: SITE_BASE,
    exportable: false,
  },
  {
    name: "percepcioncomputacional_semana1",
    entry: "percepcioncomputacional_semana1.md",
    out: "dist/semanas/percepcioncomputacional_semana1",
    base: withBase("semanas/percepcioncomputacional_semana1/"),
    exportable: true,
  },
  {
    name: "percepcioncomputacional_semana2",
    entry: "percepcioncomputacional_semana2.md",
    out: "dist/semanas/percepcioncomputacional_semana2",
    base: withBase("semanas/percepcioncomputacional_semana2/"),
    exportable: true,
  },
  {
    name: "percepcioncomputacional_semana3",
    entry: "percepcioncomputacional_semana3.md",
    out: "dist/semanas/percepcioncomputacional_semana3",
    base: withBase("semanas/percepcioncomputacional_semana3/"),
    exportable: true,
  },
  {
    name: "percepcioncomputacional_semana4",
    entry: "percepcioncomputacional_semana4.md",
    out: "dist/semanas/percepcioncomputacional_semana4",
    base: withBase("semanas/percepcioncomputacional_semana4/"),
    exportable: true,
  },
  {
    name: "percepcioncomputacional_semana5",
    entry: "percepcioncomputacional_semana5.md",
    out: "dist/semanas/percepcioncomputacional_semana5",
    base: withBase("semanas/percepcioncomputacional_semana5/"),
    exportable: true,
  },
  {
    name: "percepcioncomputacional_semana6",
    entry: "percepcioncomputacional_semana6.md",
    out: "dist/semanas/percepcioncomputacional_semana6",
    base: withBase("semanas/percepcioncomputacional_semana6/"),
    exportable: true,
  },
  {
    name: "percepcioncomputacional_semana7",
    entry: "percepcioncomputacional_semana7.md",
    out: "dist/semanas/percepcioncomputacional_semana7",
    base: withBase("semanas/percepcioncomputacional_semana7/"),
    exportable: true,
  },
];

export default decks;
