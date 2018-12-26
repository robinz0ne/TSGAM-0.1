import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh, AbstractMesh } from "babylonjs";
import { GlobalMap } from "../../../map/globalMap";
import { KeyBoardStates } from "../../../states/keyBoardStates";
import { Environment } from "../../environment";


class CenterAncor {
    constructor(scene: Scene) {
        this._objectAnchor = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
        let centerCoords = GlobalMap.HexCoords;

        this._objectAnchor.position.x = centerCoords["15,15"].x;
        this._objectAnchor.position.y = centerCoords["15,15"].y;
    }

    private _objectAnchor: Mesh;

    public get objectAnchor(): Mesh {
        return this._objectAnchor;
    }

    onMoved() {

        if (KeyBoardStates.isButtonUpPressed) {
            this.objectAnchor.position.y += 0.2;
        }
        if (KeyBoardStates.isButtonDownPressed) {
            this.objectAnchor.position.y -= 0.2;
        }
        if (KeyBoardStates.isButtonLeftPressed) {
            this.objectAnchor.position.x -= 0.2;
        }
        if (KeyBoardStates.isButtonRightPressed) {
            this.objectAnchor.position.x += 0.2;
        }
        
        Environment.camera.onMoved();
    }





}

export { CenterAncor };