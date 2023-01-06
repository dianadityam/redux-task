import store from "../app/store";
import { Provider } from "react-redux";
import Counter from "./Component/Counter";

const Redux = () => {
    return (
        <div>
            <Provider store={store} >
                <Counter />
            </Provider>
        </div>
    )
}

export default Redux;