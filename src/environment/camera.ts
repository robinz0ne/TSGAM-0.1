import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import * as GC from "../global/globalConstatnts";

class Camera {
    constructor(scene: Scene, canvas: any) {
        this.cameraObject = new FreeCamera("FreeCamera", new Vector3(GC.GlobalConstatnts.Camera.InitX, GC.GlobalConstatnts.Camera.InitY, GC.GlobalConstatnts.Camera.InitZ), scene);
        this.cameraObject.setTarget(BABYLON.Vector3.Zero());
        this.cameraObject.attachControl(canvas, false);
    }

    cameraObject: FreeCamera;

}

export { Camera };