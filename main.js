import "./style.css";

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");

const spline = new Application(canvas);
spline.load("/interface_ii.spline");

// TODO: does not work?
spline.setBackgroundColor("red");
