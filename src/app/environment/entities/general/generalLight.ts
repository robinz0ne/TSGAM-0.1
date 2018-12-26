import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import * as GC from "../../../global/globalConstatnts";

class GeneralLight {
    constructor(scene: Scene) {
        this._lightObject = new HemisphericLight("light", new Vector3(1, 1, -10), scene);
    }

    private _lightObject: HemisphericLight;

    get lightObject(): HemisphericLight {
        return this._lightObject;
    }
}

export { GeneralLight };