import setOnMap from "../utils.js";

const UF = "SP";
const MAP =
  "M465.4 617.3l0.6-0.6 0.5-0.6 1.2-2.2 0.1-0.1 0.2-0.1 0.3-0.1 0.2-0.1 0.2-0.2 0.3-0.7 0.4-0.6 0.1-0.1 0.2 0.2 0.3 0 0.4-0.2 1.5-0.7 0.1-0.1 0.2-0.6 0.1-0.1 0.1-0.1 1.9-1.1 0.6-0.6 0.4-0.2 1.1-0.4 0.6-0.6 0.4-0.2 0.2-0.1 0.4 0 0.2-0.1 0.2-0.1 0.5-0.5 0.2-0.1 0.5-0.3 0.1-0.1 0.4-0.5 1.3-1.2 0.1-0.2 0.2-0.6 0-0.1 0.6-1.3 0.1-0.3 0.1-0.7 0.1-0.3 0.2-0.3 1-1 0.1-0.1 0.4-0.1 0.2-0.2 0.2-0.2 0.1-0.2 0.2-0.2 0.1-0.3 0-0.4 0.1-0.3 0.6-1 0.3-0.2 0.7-0.3 0.5-0.4 0.4-0.3 0.3-0.4 0.1-0.5-0.1-0.2-0.1-0.2-0.3-0.1-0.9-1.5 0.1-0.6 0.1-0.1 0.1 0 0.1-0.1 0.1-0.1 0-0.1 0-0.1 0-0.1 0.1-0.2 0.2-0.1 0.1-0.1 0.3 0 0.4 0 0.3 0.1 0.3 0.1 0.4-0.2 0.3-0.2 0.6-1 0.1-0.4 1.2-1.3 0.4-1-0.1-0.9-0.4-1.8 0.1-0.6 0.2-0.3 0.4-0.2 0.5-0.4 0.3-0.2 0.1-0.1 0.1-0.1 0.4-0.6 0.5-1.3 0.2-0.2 0.1-0.1 0.4-0.3 1.4-1.6 0.2-0.4 0.2-2.3 0-1 0-0.5 0.5-0.8 0.2-1 0.1-0.4 0.4-0.3 1-0.2 1-1.1 0.5-0.7 0.8-1 0.3-0.6 0.8-0.8 0.3-0.3 1.2-0.6 2.7-0.8 0.4-0.3 0.6-0.5 0.6-0.7 0.5-0.9 0.7-1.8 0.9-1.1 1.2-1 0.4-0.2 3.5-1.3 0.5-0.2 0.4-0.2 1.5-1.5 0.4-0.8 0.7-0.4 0.7-0.2 0.7 0 0.6 0.2 0.5 0.5 0.7 0.9 0.5 0.3 6.5 0.9 2.7 0.4 6.8 0 1 0.2 1.8 0.6 0.4 0.3 1.4-0.3 0.5-0.1 0.4 0.1 0.4 0.2 0.2 0.2-0.1 0.4-0.7 0.3-0.1 0-0.1 0.1-0.1 0.3 0 0.2-0.2 0.6 0 0.5 0.2 1 0.1 0.4 0.5 1 0.5 0.7 0.3 0.8 0.2 0.3 0.7 0.3 0.7-0.3 0.6-0.6 0.4-0.6 0.6-1.5 0.6-0.5 0.7 0.1 0.5 0.7 0.2 1-0.1 2 0.1 1.7 0.2 0.2 0.9 0.4 0.3 0.2 0.6-0.5 0.1-0.2-0.1-0.3-0.1-0.6-0.1-0.3 0-1.1-0.1-0.4-0.1-0.2 0-0.2 0.3-0.4 0.2-0.6 0.2-0.6 0.2-0.5 0.5-0.3 1 0 0.8-0.1 0.3 0 1.2 0.2 0.4 0.1 0.3-0.1 0.7-0.5 0.4-0.2 1.6 0.2 0.2-0.1 0.2-0.1 0.5-0.1 0.9-0.2 1.7 0 0.4 0.2 0.7 0.4 0.3 0 0.5-0.5-0.5-1.5 0.4-0.6 0.5 0.4 0.2 0.4 0.2 0.6 0.2 0.5 0.4 0.3 0.8 0.3 0.6 0.4 0.2 0 0.2 0 0.3-0.2 0.1-0.1 0.1-0.2 0.1-0.1 0.1 0 0.3-0.1 0.1-0.1 0.2-0.4 0.1-0.4 0-1 0.3 0.1 0.2 0.1 0.2 0.2 0.2 0.3 0 0.2 0 0.3 0.1 0.2 0.1 0.3 0.2 0.1 0.2 0 0.2 0 0.2-0.1 0.3-0.2 0.2-0.5 0.1-0.5 0-0.4-0.2-0.4 0-0.2 0.2-0.1 0.1-0.2 0.2-0.2 0.2-0.1 2.6-0.1 0.3 0.1 0.4 0.4 0.5 0.7 0.4 0.2 0.4-0.1 0.3-0.3 0.2-0.3 0.2-0.3 0.5-0.1 0.5-0.1 0.4-0.1 0.5-0.2 0.3-0.2 0.2 0.2 0.4 0.3 0.1 0.1 0.1 0.2 0 0.2-0.1 0.1 0 0.2 0 0.2-0.1 0.1 0 0.1 0.5 0.5 0.3 0.2 0.2 0.1 0.3 0 1.4 1 0.2 0.3 0.8 0.6 0.2 0.5 0.2 0.4 0 0.4 0 0.1 0 0.2-0.1 0.3-0.1 0.2 0 0.1-0.1 0.1-0.3 0.3-0.1 0 0 0.1-0.1 0.2 0 0.4-0.1 1.3-0.1 0.5 0 0.3-0.1 0.2 0 0.1 0 0.2 0.1 0.1 0.5 0.6 0.2 0.2 2 0.9 0.1 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.2 0.5 1.8 0 0.1 0 0.4-0.1 0.2 0 0.2-0.2 0.2-0.1 0.1-0.2 0.1-0.2 0-0.1 0.1-0.1 0.1-0.1 0.5 0 0.2-0.1 0.3-0.2 0.4-0.1 0.1-0.1 0.1-0.3 0.2-0.2 0.4-0.1 1.6-0.2 0.4 0.1 0.2 0 0.1 0.2 0.2 0.1 0.1 0.2 0 0.1 0 0.1 0.1 0.2 0.2 0.2 0.4 0.2 0.2 0.2 0.2 0.1 0.1-0.1 0.1-0.1 0.2 0 0.1 0 0.1 0 0.2 0.4 1.4 0 0.2 0 0.6 0.1 0.1 0.1 0.2 0.9 1.2 0.2 0.1 0.1 0.1 0.2 0 0 0.2 0.2 0.6 0.3 0.9 0.1 0.2 0.1 0.5 0.1 0.2 0.4 0.6 0 0.1 0 0.1 0.1 0.2-0.1 0.1-0.1 0.5 0 0.1 0 0.1 0 0.1 0.2 0.1 0.3 0.1 1.6-0.2 0.1 0 0.1 0 0.1-0.1 0.2-0.1 0.1-0.1 0.1 0 0.2 0 0.1-0.1 0.1 0 0.1-0.1 0.1-0.1 0.1-0.2 0-0.1 0.1 0 0.1-0.1 0.6 0.1 0.2-0.1 0.1 0 0.1 0.1 0.5 0.1 0.5 0.3 0.4 0.3 0.1 0 0.1 0.1 0.1-0.1 0.1 0 0.2-0.3 0.2-0.2 0.1 0 0.1 0 0.1 0 0 0.4 0.1 0.2 0.1 0.1 0.3 0.1 0.1 0 0.1 0.2 0 0.1 0.1 0.2 0.1 0 0.1 0 0.1 0 0.2 0 0.1-0.1 0.1 0 0.2 0 0.2 0.1 0.3 0.1 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1 0.1 1 0.1 0.1 0 0.2 0.1 0 0 0.1-0.1 0.1-0.2 0.2-0.1 0 0 0.1-0.1 0.2-0.1 0.3 0 0.6 0.1 0.1 0 0.1-0.1 0.1-0.2 0.2-0.1 0 0 0.1-0.1 0.1-0.4 1.1-0.1 0.1-0.1 0.1-0.1 0-0.5-0.1-0.1 0-0.1 0.2-0.4 1.7 0 0.3-0.1 0.1-0.4 0.2-0.1 0.2-0.1 0.1-0.1 0.1 0 0.1 0 0.2 0.1 0.3 0.1 0.1 0.1 0.1 0.1 0 0 0.1 0.1 0.1 0 0.1 0 0.1-0.1 0.2-0.2 0.2 0 0.1 0 0.2 0.5 1.2 0.4 0.6 0 0.1-0.1 0.1-0.1 0.2-0.2 0.1-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0.1-0.1 0.2-0.1 0.1 0 0.1 0.1 0.2 0.1 0.1 0 0.1-0.1 0.1-0.1 0.1-0.4 0-0.1 0.1-0.1 0.1 0.1 0.1 0.1 0.2 0.1 0.1 0.1 0.1 0.2 0 0.6 0 0.1 0.1 0.1 0 0.1 0.1 0.5 0.7 0 0.1-0.1 0.2-0.5 0.5-0.3 0.2-0.4 0.6-0.7 1.7-0.1 0.5 0.1 0.2 0.1 0.1 0.7 0.8 0 0.2 0.1 0.1-0.1 0.4 0 0.2 0.2 0.1 0.2 0.2 1 0.4 0.7 0.1 0.1 0 0.1 0.1 0 0.2 0 0.3 0 0.2 0.1 0.1 0.1 0.1 0.4 0 0.4 0.2 0.9 0.6 0.2 0.1 0.4 0.1 0.3 0 0.3 0 0.1 0 0 0.1-0.1 0.2 0 0.1-0.1 0.1-0.2 0.1-0.1 0-0.1 0.2 0 0.1 0 0.3 0.1 0.2 0.1 0.1 0.3 0.4 0 0.1-0.1 0.2-0.1 0.1-0.1 0.1-1 0.3-0.2 0.2-0.1 0 0 0.1-0.1 0.1 0.1 0.2 0 0.1 0.6 0.4 0.3 0.3 1.2 0.7 0.2 0.2 0.1 0.2-0.2 0.3 0 0.1 0 0.1 0 0.5 0 0.2 0 0.3 0.1 0.2 0.1 0.3 0.1 0.1 0.1 0.1 0.1 0 0.2 0.1 0.4 0 0.2 0.1 0.2 0.1 0.2 0 0.2 0 0.1-0.1 0.1-0.1 0.1-0.1 0.1 0 0.1 0.1 0.2 0.1 0.1 0 0.2-0.1 0.2-0.1 0.1-0.1 0.1-0.1 0.1 0 0.1-0.1 0.7-0.1 0.1 0 0.1 0.1 0.1 0.1 0 0.1 0 0.1-0.1 0.1-0.1 0.1 0 0.1 0 0.1 0.1 0.1 0.4 0.1 1.6-0.3 0.5-0.1 0.2-0.1 0.2-0.1 0.2-0.1 0.2-0.2 0-0.1 0.2-0.2 0-0.1 0.2 0 0.2 0 0.2 0.1 0.1 0 0.1-0.1 0.2-0.2 0-0.1 0.1-0.1 0.2 0.1 0 0.1 0.1 0.2 0.1 0.1 0 0.1 0.2 0.1 0.2 0.1 0.2 0.2 0.2 0 0.1-0.2 0.1-0.1 0.2-0.3 0.2-0.1 0.1-0.1 0.2 0 0.1 0.1 0 0.1 0.1 0.1 0 0.1 0.1 0.1 0.1 0 0.1 0 0.1 0 0.2-0.2 0-0.1 0.1-0.2 0-0.1-0.1-0.1 0-0.1 0-0.1-0.1-0.2 0.1-0.1 0-0.1 0.1 0 0.2 0 0.2 0.1 0.1 0.1 0.1-0.1 0.1-0.2 0.1-0.1 0-0.4 0-0.2 0-0.2 0-0.1 0-0.1-0.1-0.1-0.1-0.1-0.1 0-0.1 0-0.3 0-0.5 0-0.1 0-0.1 0-0.1-0.1-0.1 0 0-0.1 0-0.2 0-0.1 0.1 0 1.7-1.1 0.1-0.1 0.1-0.2-0.1-0.1 0-0.1 0-0.1-0.3-0.3-0.1-0.1 0-0.1-0.1-0.1 0.2-0.2 0.4 0 0.8-0.1 0.3 0 0.1 0.1-0.1 0.1-0.1 0.2-0.1 0.2-0.2 0.2-0.1 0.1-0.1 0.1 0 0.1 0 0.2 0.1 0.1 0.1 0 0.1 0.1 0.1 0 0.1 0 0.2 0 0.2-0.1 0.5-0.3 0.4-0.3 0.1 0 0.1 0 0.1 0 0.1 0.1 0 0.1 0 0.1 0.1 0.1 0 0.1 0.1 0.1 0.7 0.1 0.2 0 0.2-0.1 0.4-0.3 0.2-0.1 0.1-0.1 0.3-0.5 0.1-0.1 0.1 0 0.2 0 0.1 0.1 0.1 0 0.2 0.2 0 0.1 0.1 0.1 0 0.1 0 0.3 0 0.1 0.1 0.1 0.1 0.1 0.1 0 0.2-0.1 0.9-0.5 1.5-0.4 0.1-0.1 0.2-0.1 0.1-0.2 0-0.1 0-0.3 0-0.1 0.1 0 0.2 0 0.2 0 0.1-0.1 0.3-0.3 0.4-0.3 0.1-0.1 1.1-0.6 0.2-0.2 1.2-0.5 0.2-0.1 0.4 0.1 0.2 0 0.2-0.1 0.3-0.2 0.2-0.1 0.2 0 0.6 0 0.3 0 0.1 0 0.5-0.2 1.3-0.7 0.3 0 0.3 0 0.6 0.3 0.3 0.2 0.2 0.2 0.1 0.2 0.5 1 0.1 0.2 0.2 0.2 0.3 0.2 0.3 0.4 0.1 0.1 0 0.1 0.1 0.1 0.1 0 0.2 0 0 0.1 0.2 0.7 0 0.1 0.1 0.1 0.1 0.1 0.5 0.2 0.1 0 0.2 0 0.3 0 0.1-0.1 0.2 0 0.1 0 0.3 0.2 0.2 0.1 0.1 0 0.3 0 0.2-0.1 0.1 0 0-0.1 0.1 0 0.1 0 0.9-0.1 0.1 0 0.1-0.1 0.1-0.1 0.2 0 0.4 0 0.2-0.1 0.1 0 0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.1 0.1 0.3 0 0.2-0.1 0.3-0.1 0.5 0 0.7 0.1 0.3 0 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0 0.1 0.3 0.4 0.3 0.5 0.4 0.7 0.1 0.2 0 0.2 0 0.1 0 0.1-0.1 0.1-0.1 0.1-0.2 0.1-0.1 0-0.3 0.1-0.2 0.1-0.2 0.1-0.5 0.6-0.1 0.2 0.1 0.2 0 0.1 0 0.1 0 0.2-0.3 0.6-0.1 0.1-0.1 0.1-0.7 0.2-1 0.6-0.3 0.1-0.1 0-0.2-0.1-0.1-0.1-0.1 0-0.6 0.3-0.2 0-0.2 0.1-0.1-0.1-0.1 0 0-0.1-0.1-0.1 0-0.1-0.1-0.1-0.1 0-1.1 0.7-0.3 0.1-0.1 0-0.3-0.2-0.1 0-0.2 0-0.1 0-0.1 0-0.5 0.3-0.7 0.5-0.4 0.2-0.2 0.1-0.7 0.1-0.1 0-0.1 0.1-0.1 0-0.2 0.2-0.1 0.1-0.2 0.5-0.1 0.1-0.2 0-0.1 0.1-0.4 0-0.1 0.1 0 0.1 0 0.2 0 0.1 0 0.3 0 0.1-0.2 1.2 0 0.4 0 0.3 0 0.2 0 0.2 0 0.2-0.2 0.4-0.2 0.2-0.1 0.1-0.1 0-0.2 0.2-0.4 0.6 0 0.2 0 0.1 0 0.1 0 0.1 0.1 0.2 0.5 0.8 0.3 0.5 0.1 0.1 0.2 0 0.1-0.1 0-0.1 0.1 0 0.2 0.1 0.1 0.2 0.2 0.4 0.2 0.2 0.6 0.4-0.1 0.3-0.3 0.1-0.3 0.1-0.4 0.1-0.3-0.1-0.3 0.1-0.3 0.2-0.3 0-0.1-0.2-0.1-0.2-0.1-0.2-0.2 0-0.2 0-0.1 0-0.3 0.1 0.1-0.5-0.5 0.2-0.7 0.4-0.2 0.2-0.1 0.1-0.2 0.3-0.1 0.1-0.1 0-0.3 0.1-0.1 0-0.4 0.2-0.2 0-0.1-0.2-0.2 0.5 0.3 0.2 0.3 0.2 0.3 0.3-0.5 0-0.4 0.3-0.4 0.9-0.2-0.4-0.2-0.1-0.1 0.1 0.1 0.4-0.2 0-0.2-0.1-0.3-0.2-0.2-0.2-0.2-0.1-0.1 0.3 0 0.3 0.1 0.3-0.4 0.1-0.3-0.1-0.4-0.1-0.3 0.4 0.3 0.4 0 0.3-0.2 0.1-0.2 0-0.6 0.3-0.3-0.1-0.3-0.3-0.2-0.1-0.2 0.1-0.2 0.2-0.2 0.2-0.1 0.1-0.5 0.2-0.4 0.2-0.4 0.2-0.5-0.1 0 0.2-0.3 0.3-0.1 0.2 0 0.3 0.1 0.5 0.1 0.2 0 0.3 0.2 0.1 0.2 0 0.1 0.1 0 0.3-0.1 0.5 0 0.2 0.2 0.4 0 0.4-0.2 0.4-0.4 0.3-0.3 0-0.2-0.1-0.1-0.1-0.2 0-0.3 0.1-0.4 0.2-0.2 0-0.4-0.2-0.5-0.6-0.4-0.1-0.7 0.1-0.2 0-0.1 0-0.1-0.2-0.1 0-0.4-0.1 0 0.1-1.3-0.5-1.3 0-0.2-0.1-0.5-0.2-0.1 0-0.9 0-1.8 0.5-0.7 0.3-0.3 0.2-0.3 0.2-0.1 0.4-0.2 0-0.5-0.1-0.4 0.1-0.4 0.2-0.7 0.3-0.1 0 0-0.1-0.1 0-0.3 0.5-0.4 0.5-0.5 0.3-0.6 0.2 0 0.1 0.4 0 0.3-0.1 0.3-0.2 0.8-0.8 0.3-0.1 0.4 0-0.8 0.9-0.2 0.3-0.1 0.4-0.1 0.4 0 0.4 0.1 0.2-0.2 0.2-0.2 0.1-0.3-0.1 0-0.1-0.2-0.2-0.2 0.1-0.3 0.1-0.4 0.2-0.3 0.3-0.4 0.3-0.6-0.2 0.2-0.3 0.5-0.2 0.1-0.2 0-0.3-0.1-0.3-0.2-0.2-0.1-0.2 0-0.3-0.2-0.2-0.2-0.1-0.6-0.1-0.2-0.1-0.1-0.1 0.1-0.2 0-0.2-0.6-0.1 0 0.3 0 0.4-0.2 0.2-0.2 0-0.1 0.2 0.1 0.2-0.5 0-0.4-0.1 0.1 0.2 0.1 0.2 0.2 0 0.1 0.1 0 0.1 0.2 0.5 0.1 0.1 0.2 0 0.3 0 0.2 0.1 0.1 0.1 0 0.5-0.1 0.2-0.2 0.1 0-0.1-0.1-0.2-0.1 0-0.2-0.1-1.2 0.7-2.5 1.1-3.1 1.9-2.2 1.1-1.7 1-0.6 0.6-0.4 0.7-0.2 0.8-0.2 0.1 0 0.1 0.2 0.5 0 0.2-0.3 0.3-0.4 0.2-0.3-0.1-0.1-0.4-0.4 0.9-0.2 0.1-0.3 0.1-0.5 0.6-0.3 0.1-0.9 1-5.2 3.2-0.3-0.1-0.3 0.1-0.5 0.3-0.5-0.1-0.2 0-0.2 0.3-0.4 0.2-0.5 0.5-1 0.5-3.9 3.1-0.3 0.3-0.5 0.7-0.1 0.1-0.1 0.1-0.2 0.1-0.1 0.2-0.8 1.6-0.6 0.3-1-0.1 0.2-0.4 0.3 0 0.3 0 0.2-0.1 0-0.2-0.2-0.1-0.9 0.1-0.1 0-0.1 0.2 0.1 0.3-0.1 0.2-0.2 0.1-0.2-0.1-0.1-0.2 0 0.4 0.4 0.2 0.5 0.2 0.4 0 0.5 0.2 0.2 0 0.3-0.1 0.2-0.2 0.2-0.2 0.3 0 0.3 0-0.7 2.2-0.6 1-1 0.3-0.4 0.2-0.9 1.2-0.2 0.3-0.1 0.4 0-0.3 0.1-0.2 0.2-0.3 0.5-0.7 0.2-0.3-0.1-0.2-0.1 0-0.1 0-0.2 0 0 0.1-0.1 0-0.1 0.1-0.1 0.1 0 0.1-0.2 0-0.1 0-0.1 0-1.2-0.3-0.1-0.1-0.2-0.1-0.3-0.2-0.1-0.2 0-0.2 0-0.1 0.1-0.2-0.1-0.3 0-0.3-0.4-1.1 0-0.1-0.1-0.5-0.4-1.3-0.7 0.5-0.1 0-0.1 0-0.1-0.2 0-0.1 0-0.1-0.2-0.1-0.2 0-0.4 0.1-0.2-0.1-0.1 0-0.1-0.1 0-0.1 0-0.1 0-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.2 0-0.4-0.1-0.2 0-0.3-0.3-0.1 0-0.1 0 0 0.2-0.1 0.1-0.4 0.2-0.2 0.1 0 0.1-0.1 0.1 0 0.1 0 0.2 0.1 0.3 0 0.2-0.1 0.1 0 0.1-0.1 0.1-0.2 0.1-0.1 0.1 0 0.1-0.1 0.1-0.1 0.2 0 0.1-0.1 0.2-0.1 0-0.2 0-0.6-0.3-0.5-0.3-0.1-0.1 0-0.1-0.3-0.7-0.1-0.2 0-0.1 0-0.1 0.1-0.1 0.4-0.2 0-0.1 0.1-0.1 0.1-0.2 0-0.5-0.1-0.7 0.1-0.3 0-0.1 0.2-0.2 0.2-0.2-0.1-0.2 0-0.2-0.1-0.6 0-0.3 0.1-0.2 0.2-0.1 0.4-0.2 0.1-0.2 0.1-0.2 0.3-0.5 0-0.2 0-0.2-0.1 0-1.1-0.4-0.1-0.1-0.1 0-0.1-0.1-0.1-0.2 0-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.1 0-0.2 0-0.1 0-0.1 0-0.4 0.2-0.2 0.2-0.1 0.1-0.1 0.1-0.2 0-0.1-0.1 0-0.2-0.2-0.4-0.2 0-0.1 0.2-0.3 0.1-0.7 0.1-0.1 0-0.3-0.1-0.1 0-0.1 0.1-0.1 0.1-0.1 0-0.3-0.3-0.3-0.3-0.4-0.2-0.4 0 0 0.1 0.1 0.1-0.5 0-1.6 0.1-0.6-0.1-0.5-0.7-0.5-0.1 0.1 0.7-0.6 0.4-0.7 0.1-1.1-0.2-0.5 0-0.3 0.3-0.3 0-0.4-0.1-1.3-0.4-0.3-0.1 0-0.1-0.1-0.1 0-0.1 0-0.3 0-0.1 0.1-0.7 0-0.1-0.1-0.1-0.3-0.6 0-0.1 0-0.2 0-0.1 0-0.1 0-0.1 0.1-0.2 0.6 0 0.1-0.2 0-0.1 0-0.1 0-0.3 0.1-0.6-0.4-0.3 0-0.1 0-0.1 0-0.1 0.1-0.1 0.1 0 0.6-0.2 0.1-0.1 0.2-0.2 0-0.1 0-0.1-0.2-0.2 0-0.2 0-0.1 0.1-0.1 0.1 0 0.1-0.2 0.2-0.2 0-0.3 0-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.1 0-0.1-0.1-0.1 0-0.2-0.2-0.1 0-0.1-0.1-0.2-0.1-0.1-0.3-0.3-0.9-0.1-0.2 0-0.1-0.2-0.1-0.1 0-0.1-0.1-0.2-0.2 0-0.1 0-0.1 0.1-0.3 0-0.3 0-0.8 0-0.2-0.1-0.2-0.1-0.1-0.2-0.3-0.1-0.1-0.1-0.1-0.2-0.1-0.1 0-0.4-0.2-0.2 0-0.1-0.1-0.1-0.2-0.1-0.2-0.1-0.1-0.1-0.1-0.2-0.1-0.1-0.1-0.1 0-0.2-0.4-0.3-0.4-0.4-0.5-0.1-0.3-0.1-0.2 0-0.2-0.1-0.1-0.1-0.1 0.1-0.3-0.1-0.1-0.1 0-0.1 0.1-0.1 0-0.1 0-0.3-0.2-0.3-0.6-0.1-0.1-0.2 0-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.4 0-0.1 0-0.2 0.1 0 0.3-0.1 0.1 0 0-0.1 0.1-0.2 0.1-0.2 0-0.3 0.1-1 0.2-1.2-0.1-0.2 0-0.1-0.2-0.1-0.2-0.3-0.2-0.2-0.4-0.6-0.3-0.6-0.1-0.4 0-0.9-0.1-0.3 0-0.2-0.1-0.1-0.3-0.2-0.1-0.1 0-0.2 0.1-0.1 0-0.1 0-0.1 0.1-0.1 0.1-0.3 0.5-1.4 0-0.4-0.1-1-0.4-1.9-0.6-1.4-0.5-0.8-0.5-0.4-0.1-0.1 0-0.2 0-0.2-0.1-0.3-0.1-0.1-0.1-0.1-0.1 0-0.3 0-0.1 0.1-0.1-0.1-0.5-0.2-0.1-0.1-0.6-0.3-0.2-0.1-0.6-0.1-0.2 0-0.3-0.2-0.3-0.3-0.1-0.2 0.1-0.6-0.1-0.3-0.3-0.2-0.6-0.3-0.2-0.2 0-0.6 0-0.3-0.2-0.2-0.2-0.1-0.2 0.1 0 0.4-0.4-0.2-0.2 0-1.4 0.4-0.2 0.1-0.4 0.1-1.6 0.2-0.6-0.1-0.2-0.1-0.3-0.1-0.3 0-0.2 0.2-0.1 0.2-0.3 0-0.3-0.2-0.3-0.1-0.4-0.4-0.2-0.1-0.4-0.1-0.3 0.1-0.2 0.2-0.4 0.5-0.2-0.1-1.2 0.1-0.2-0.1-0.1 0-0.1-0.1-0.1 0-0.4-0.2-1.7-0.2-0.5 0-0.4 0.1-0.5 0.3-0.2 0.1-0.3 0.2-0.5 0-0.3 0-0.3-0.1-0.2-0.1-0.1-0.2-0.1-0.2-0.2-0.6-0.2-0.3-0.8-1.1-0.2-0.1-0.3-0.2-2.4-0.6-2.2-0.6-1.4-0.6-1.7-1.1-0.5-0.2-0.5-0.3-0.4-0.2-0.3-0.1-0.1 0-0.2 0-0.1 0-0.2 0.1-0.2 0-0.2 0-0.4 0-0.2 0-0.2 0-0.1 0.1-0.4 0.3-0.1 0-0.1 0.1-0.3 0.1-0.4 0.1-0.8-0.1-0.4 0-0.4-0.2-0.7-0.3-0.4-0.2-0.4 0-0.4 0.2-0.3 0.1-0.4-0.4-0.6-0.6-0.4-0.2-1.3 0.2-0.5-0.1-0.4-0.1-2.2-1.3-0.8-0.4-0.9-0.2-0.4 0-0.6 0.1-0.4 0.3-0.2 0.4-0.1 0.4-0.2 0.6-0.2 0.4-0.4 0.3-0.5 0.1-0.2-0.2-0.1-0.3-0.2-0.2-0.1 0-0.1-0.1-0.2-0.1-0.3-0.1-0.2 0.1-0.5 0.4-0.5 0-0.9-0.3-0.5 0-0.8-0.1-0.3 0.1-0.4 0.1-0.8 0.1-0.6-0.4-0.6-0.5-0.7-0.1-1.1 0.7-0.5 0.1-2-0.4-0.9 0.1-0.3-0.1-0.5-0.3-0.3-0.1-1.1 0-0.4 0.2-0.5 0.3-0.3 0.2-1 0.7-1 1-0.2 0.2-0.7 0.2-0.3 0.1z m113.8 44l0.2 0 0.4 0 0.2-0.1 0.3-0.2 0.2 0 0 0.1-0.9 0.7-0.7 0.2-0.4 0.2-4.7 4-0.8 0.4-0.3 0.4-0.4 0.7-0.4 0.8-0.2 0.3-0.3-0.1 0.1-0.4 0.3-0.8 0.1-0.4 0.1-0.1 0.8-1 2.3-1.9 0.9-0.4 1.2-1.2 1.1-0.4 0.5-0.6 0.4-0.2z m23.9-17.1l0.2 0 0 0.1 0 0.1 0 0.1 0.3 0.4 0.2 0.4 0 0.3-1-0.5-0.2 0-0.3 0.3-0.1-0.1-0.4 0-0.1-0.1-0.1-0.1-0.4-0.5 0.3-0.1 0.1 0 0.2 0.1 0.1-0.1 0-0.1 0-0.2-0.1-0.2 0.2 0 0.7 0.2 0.4 0z m22.4-0.5l-0.2 0.1 0 0.1 0.1 0.3 0 0.3 0.1 0.1 0 0.1-0.2 0.2-0.1 0-0.2 0.2-0.1-0.1-0.1-0.1-0.1 0-0.1 0-0.2-0.3-0.2-0.5-0.2-0.3-0.3 0.2-0.1-0.1-0.7 0.3-0.8 0.2-0.7 0-0.6-0.5-0.1-0.5 0.1-0.3 0.3-0.2 0.3-0.2 1.3-1.3 0.2-0.4 0.1-0.7 0.1-0.1 0.1-0.2 0.1-0.1 0-0.2 0.2-0.1 0.1 0 0.3 0.1 0.2 0.1 1 0.7 0.2 0.3-0.2 1.6-0.6-0.2-0.1 0.7 0.3 0.6 0.7-0.1 0.1 0.2 0 0.1z";

export default MAP;

setOnMap(UF, MAP, 555, 615);