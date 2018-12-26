import { Engine, Scene, ArcRotateCamera, UniversalCamera, HemisphericLight, FreeCamera, Vector3, MeshBuilder, Mesh, Space } from "babylonjs";
import { Initializer } from "./app/initializer";
import { Environment } from "./app/environment/environment";

import { CenterAncor } from "./app/environment/entities/general/centerAncor";




Initializer.init(document.getElementById("renderCanvas"));



window.onresize = function () {
    Environment.engine.resize();
};

var pointerlockchange = function () {
    var controlEnabled = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement || false;
    if (!controlEnabled) {
        Environment.camera.cameraObject.detachControl(Environment.display.canvas);
        Environment.scene.isLocked = true;
    } else {
        Environment.camera.cameraObject.attachControl(Environment.display.canvas);
        Environment.scene.isLocked = false;
    }

    console.log(Environment.scene.isLocked);
};

document.addEventListener("pointerlockchange", pointerlockchange, false);
document.addEventListener("mspointerlockchange", pointerlockchange, false);
document.addEventListener("mozpointerlockchange", pointerlockchange, false);
document.addEventListener("webkitpointerlockchange", pointerlockchange, false);

Environment.engine.runRenderLoop(() => {
    Environment.scene.onRender();
});