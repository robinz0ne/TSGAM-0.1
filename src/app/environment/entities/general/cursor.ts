import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import * as GC from "../../../global/globalConstatnts";
import { Environment } from "../../environment";
import { CenterAncor } from "./centerAncor";
import { WorldScene } from "./worldScene";

class Cursor {
    constructor(scene: Scene) {
        this._cursorObject = BABYLON.MeshBuilder.CreateSphere("cursor", {}, scene);
        this._cursorObject.scaling.x = 0.2;
        this._cursorObject.scaling.y = 0.2;
        this._cursorObject.scaling.z = 0.2;        
        this._cursorObject.position.x = Environment.centerAncor.objectAnchor.position.x;
        this._cursorObject.position.y = Environment.centerAncor.objectAnchor.position.y;
    }

    private _cursorObject: Mesh;

    get cursorObject(): Mesh {
        return this._cursorObject;
    }


    public onMove(e: any) {

        if (!Environment.scene.isLocked) {

            var p = BABYLON.Vector3.Project(this.cursorObject.position,
                BABYLON.Matrix.Identity(),
                Environment.scene.sceneObject.getTransformMatrix(),
                Environment.scene.sceneObject.activeCamera.viewport.toGlobal(Environment.engine.getRenderWidth(), Environment.engine.getRenderHeight()));

            if (e.movementX > 0 && p.x < Environment.display.canvas.width) {
                this._cursorObject.position.x += e.movementX / 50;
            }
            if (e.movementX < 0 && p.x > 0) {
                this._cursorObject.position.x += e.movementX / 50;
            }
            if (e.movementY > 0 && p.y < Environment.display.canvas.width) {
                this._cursorObject.position.y -= e.movementY / 50;
            }
            if (e.movementY < 0 && p.y > 0) {
                this._cursorObject.position.y -= e.movementY / 50;
            }
        }
    }
}

export { Cursor };