import "./style.css";

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");

const spline = new Application(canvas);
spline.load("/bunny_cube_scene.splinecode");

// TODO: does not work?
spline.setBackgroundColor("red");
