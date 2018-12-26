import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import * as GC from "../../../global/globalConstatnts";
import { Environment } from "../../environment";

class Cursor {
    constructor(scene: Scene) {
        this._cursorObject = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
        this._cursorObject.position.x = Environment.centerAncor.objectAnchor.position.x;
        this._cursorObject.position.y = Environment.centerAncor.objectAnchor.position.y;
    }

    private _cursorObject: Mesh;

    get cursorObject(): Mesh {
        return this._cursorObject;
    }


    public onMove(e: any){

        // var pickinfo = Environment.scene.pick(Environment.scene.pointerX, Environment.scene.pointerY);
        // console.log(Environment.cursor.cursorObject.position);
        // console.log(pickinfo.ray.direction);
        // console.log( Environment.scene.onPointerMove);

        //   var worldMatrix =  Environment.cursor.cursorObject.getWorldMatrix();
        //   var transformMatrix = Environment.scene.getTransformMatrix();
        //   var position = Environment.cursor.cursorObject.position;
        //   var viewport = Environment.scene.activeCamera.viewport;
        //   var coordinates = BABYLON.Vector3.Project(position, worldMatrix, transformMatrix, viewport);

        //  console.log(worldMatrix);
        //  console.log(transformMatrix);
        //   console.log(position);
        //  console.log(viewport);
        //  console.log(Environment.scen);

       // if (e.movementX != 0) {
            this._cursorObject.position.x += e.movementX / 50;
     //   }
     //   if (e.movementY != 0) {
            this._cursorObject.position.y -= e.movementY / 50;
      //  }
    }
}

export { Cursor };