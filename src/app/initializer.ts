import { Map } from "../Map/map";
import { Environment } from "../environment/environment";

class Initializer {

    public static init(canvas: any) {
        Environment.init(canvas)
        Map.drawing();
    }

}

export { Initializer };