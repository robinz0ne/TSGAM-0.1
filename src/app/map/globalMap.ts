import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import { Hex } from "./hex";
import * as GC from "../global/globalConstatnts";

class GlobalMap {

    static HexCollection: Hex[] = [];
    static HexCoords: { [id: string]: IHexCoords; } = {};


    static drawing() {
        let height = GC.GlobalConstatnts.Hex.Size * 2;
        let width = 0;
        let vert = 0;
        let horiz = 0;



        for (let iy = 0; iy < GC.GlobalConstatnts.Map.HexCountVertical; iy++) {
            for (let ih = 0; ih < GC.GlobalConstatnts.Map.HexCountHorizontal; ih++) {

                let hex = new Hex(horiz, vert);
                hex.posX = ih;
                hex.posY = iy;

                this.HexCoords[ih.toString() + "," + iy] = { x: horiz, y: vert };

                hex.drawing();

                this.HexCollection.push(hex);

                width = Math.sqrt(3) / 2 * height;

                horiz += width;
            }

            if (iy % 2 == 0) {
                horiz = Math.sqrt(3) / 2;
            } else {
                horiz = 0;
            }
            vert += height * 3 / 4;
        }
    }
}
interface IHexCoords {

    x: number;
    y: number;

}
export { GlobalMap };