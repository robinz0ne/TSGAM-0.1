import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import { ActionsKeyboard } from "../../../actions/actionsKeyboard";
import { KeyBoardStates } from "../../../states/keyBoardStates";
import { Environment } from "../../../environment/environment";

class WorldScene {
    constructor(engine: Engine) {
        this._sceneObject = new Scene(engine);
        this._sceneObject.clearColor = new BABYLON.Color4(0, 0, 0);
        this._sceneObject.actionManager = new BABYLON.ActionManager(this._sceneObject);

        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonUpOnDown);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonUpOnUp);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonDownOnDown);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonDownOnUp);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonLeftOnDown);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonLeftOnUp);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonRightOnDown);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonRightOnUp);

        //костыль, для глобальной обработки нажатия клавиш, потому что через ActionManager работает плохо
        this._sceneObject.registerBeforeRender(function() {
            if (KeyBoardStates.isMovedButtonsPressed){
                //Если нажата хотя бы одна клавиша отвечающая за управление - запускаем событие движения центр-якоря
                Environment.centerAncor.onMoved();
            }
        });

    }

    private _sceneObject: Scene;

    get sceneObject(): Scene {
        return this._sceneObject;
    }



    onRender() {

        this._sceneObject.render();
    }
}

export { WorldScene };