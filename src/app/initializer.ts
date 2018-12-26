import { GlobalMap } from "./map/globalMap";
import { Environment } from "./environment/environment";

class Initializer {

    public static init(canvas: any) {
        Environment.init(canvas);
    }

}

export { Initializer };