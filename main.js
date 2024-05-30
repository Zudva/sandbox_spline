import "./style.css";

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");

const spline = new Application(canvas);
spline.load("/vaporwave_background_copy.spline");

// TODO: does not work?
spline.setBackgroundColor("red");
