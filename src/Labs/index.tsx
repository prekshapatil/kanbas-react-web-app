import { Lab} from "./Labs";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
    return (
        <Provider store={store}>
        <Lab />
        </Provider>
    );
}


export default Labs;