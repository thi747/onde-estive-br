import setOnMap from "../utils.js";

const UF = "AC";
const MAP =
  "M49.7 291.4l0.3 0.1 22.7 9.5 46.2 11.5 11.4 6.1 59.9 28.2 3.7 1.6-0.1 0.2-0.1 0.2-0.1 0.2-0.2 0.1-1.6 0.6-0.4 0.2-2.6 2.1-3.3 3.3-0.9 0.6-0.2 0-0.5 0-0.2 0.1-0.1 0.2-0.1 0.2-0.2 0.2-0.2 0.2-0.4 0-0.8-0.2-0.3-0.1-0.9 0-0.4 0.1-0.3 0.2 0 0.1 0.1 0.5-0.1 0.2-0.1 0.1-0.2 0.1-0.3 0-0.8 0-0.2 0.1-0.2 0.2-0.1 0.1 0 0.2-0.1 0.2-0.3 0.4-0.3 0.3-0.4 0.3-0.9 0.3-0.7 0.3-0.4 0.2-0.3 0.2-0.2 0.3-0.4 0.6-0.3 0.3-0.6 0.6-0.2 0.2-0.2 0.6-0.2 0.7-0.3 0.6-0.7 0.2-0.4-0.2-0.8-0.6-0.4-0.2-0.3-0.1-0.3 0-2.4 0.1-0.5-0.1-0.4 0-0.3 0.1-0.6 0.3-0.5 0.4-0.3 0.3-0.7 1.3-1.1 1.3-0.3 0.4-0.6 1.2-0.2 0.4-0.4 0.4-0.3 0.4-0.5 0.3-0.3 0.2-1 0.1-0.3 0.2-0.7 0.6-0.3 0-0.3 0-0.3 0-0.4 0-0.8 0.3-1.1 0.8-0.5 0.3-2.9 0.6-0.4 0-0.1-0.2-0.1-0.1-0.1-0.9 0.1-0.5 0.3-0.5 0.3-0.5-0.3-0.2-0.6-0.1-0.6 0.1-0.5 0.2-0.5 0.1-0.5-0.1-1-0.2-0.5 0-0.2 0-0.1 0-1.5-0.7-0.3 0-0.7 0.1-0.8-0.2-1.5-0.2-1.2 0-0.7-0.1-0.7-0.2-0.7-0.1-1.3 0.4-0.8 0-1.5 0-0.4 0-2.5 0.2-0.7-0.1-0.7-0.5-0.4-0.1-0.5-0.1-0.8 0.1-0.4 0-0.4-0.1-0.8-0.1-4.9 2.5-0.8 0.3-1 0.2-1.1 0-1-0.1-0.9-0.5-0.5-0.4-0.9-1.1-0.6-0.5-0.4 0.1-1.7 1.4 0-1.7 0-2.6 0-2.6 0-2.6 0-2.6 0-2.6 0-2.6 0-2.6 0-1.7 0-0.9 0-1.2 0.2-0.9 0.1-0.2 0.2-0.2 0.2-0.1 0.2-0.1 0.1 0 0.2 0.1 0.1 0 0.1-0.1 0.1-0.3 0-0.1 0.3-0.3 0.1-0.4 0.1-0.4-0.2-0.4-0.2-0.3-0.6-0.5-0.2-0.3-0.1-0.3-0.2-0.7-0.2-0.4 0.1 0 0.5 0 0.2 0 0.2 0.1 0.2-0.1-0.3-0.5 0.1-0.2 0.1-0.2 0.3-0.1 0-0.1-0.1-0.1 0-0.1 0.3-0.2 0.1-0.2 0.1-0.4 0.2-0.3 0-0.1 0-0.2-0.8 0-0.4 0.1-0.4 0.2-0.4 0.4-0.8 0.9-0.3 0.3-1.4 0.8-0.4 0.3-0.7 0.8-0.4 0.3-1 0.5-0.4 0.4-0.6 0.9-0.2 0.2-0.5 0.3-0.2 0.2-0.2 0.2-0.2 0.5-0.2 0.3-0.4 0.3-1.2 0.3-1.4 0.6-0.3 0.2-0.3 0.5-0.1 0.5-0.3 0.4-1 0.3-0.7 0.5-0.4 0.2-0.3 0.1-0.1-0.1-0.2-0.2-0.2 0-0.3 0-0.1 0.1-0.1 0.2-0.2 0.1-0.3 0.1-0.8 0-3.6 0-3.6 0-3.6 0-3.6 0-1 0 0.2-0.4 0-0.4 0-0.3 0-0.5 0.1-0.2 0.3-0.4 0.1-0.2-0.1-0.2-0.1-0.4-0.1-0.3-0.4-0.8-1.4-0.9-0.3-0.8 0.3-0.7 0-0.4-0.1-0.4-0.5-0.6-0.2-0.4-0.1-0.4 0-0.6 0-0.2-0.1-0.2-0.2 0-0.2 0.1-0.2-0.1-0.4-0.2-0.6-0.5-0.3-0.2-0.5-0.1-1.2 0.1-0.9-0.1-0.4-0.1-0.8-0.4-0.8-0.3-0.4-0.1-0.1 0-0.1 0.2-0.1 0-0.2-0.1-0.1-0.1-0.1-0.1-2.5-0.5-8.1 0 0.5-0.7 1-1 0.5-0.7 0.3-0.6 0.2-0.4 0.3-0.1 0.3 0 0.3-0.1 0.3-0.2 0.1-0.2 0-0.6 0.9-0.7 0.2-0.3 0.2-0.4 0.1-0.6-0.2-1.7-0.2-0.3-0.5-0.9-0.3-0.3-0.7-0.5-0.3-0.2-1.6-2.3-0.3-0.8-0.3-0.4-0.3-0.4-0.4-0.2-1.2-0.2-0.4-0.3-0.3-0.3-0.9-1.1-0.1-0.4 0-0.3 0.2-0.9-0.1-0.5-0.1-0.3-0.3-0.3-0.2-0.1-0.4 0-0.2-0.1-0.2-0.2-0.3-0.4-0.2-0.2-1.6-0.9-0.3-0.3-0.2-0.4-0.1-0.8-0.1-0.6-0.6-0.7-0.3-0.5 0-0.4 0.1-0.7 0-0.4-0.3-0.5-0.6-0.9-0.2-0.5-0.3-0.6-0.8-0.4-0.8-0.4-0.6-0.4-0.1-0.3-0.3-1 0.1-0.4 0.3 0 0.6 0.3 0.7-0.4 0.2-0.8-0.2-0.8-0.6-0.5-0.7-0.2-0.7-0.3-0.5-0.4-2.7-2.7-0.8-0.5-0.1-0.4 0.6-0.3 0.3-0.1 0.3-0.4 0-0.5 0.1-0.3 0.1-0.3-0.1-0.5-0.6-1 0-0.4 0.4 0 0.8 0.3 0.4 0.1 0.4-0.2 0.8-0.4 0.3-0.2 0.5 0 0.8 0 0.4 0 0.4-0.2 0.2-0.4-0.1-0.4-0.1-0.4-0.2-0.8-1.4-2-0.1-0.2z";

export default MAP;

setOnMap(UF, MAP, 136, 353);