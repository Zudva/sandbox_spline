import "./style.css";

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");

const spline = new Application(canvas);
spline.load("/hover_scroll_effect.spline");

// TODO: does not work?
spline.setBackgroundColor("red");
