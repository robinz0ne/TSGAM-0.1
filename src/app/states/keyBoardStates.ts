import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";

class KeyBoardStates {
    private static _isButtonUpPressed: Boolean;
    private static _isButtonDownPressed: Boolean;
    private static _isButtonLeftPressed: Boolean;
    private static _isButtonRightPressed: Boolean;
    private static _isMovedButtonsPressed: Boolean;

    static get isMovedButtonsPressed(): Boolean {
        return this._isMovedButtonsPressed;
    }
    static set isMovedButtonsPressed(value: Boolean) {
        this._isMovedButtonsPressed = value;
    }

    static get isButtonUpPressed(): Boolean {
        return this._isButtonUpPressed;
    }
    static set isButtonUpPressed(value: Boolean) {
        this._isButtonUpPressed = value;
    }

    static get isButtonDownPressed(): Boolean {
        return this._isButtonDownPressed;
    }
    static set isButtonDownPressed(value: Boolean) {
        this._isButtonDownPressed = value;
    }

    static get isButtonLeftPressed(): Boolean {
        return this._isButtonLeftPressed;
    }
    static set isButtonLeftPressed(value: Boolean) {
        this._isButtonLeftPressed = value;
    }

    static get isButtonRightPressed(): Boolean {
        return this._isButtonRightPressed;
    }
    static set isButtonRightPressed(value: Boolean) {
        this._isButtonRightPressed = value;
    }
}


export { KeyBoardStates };