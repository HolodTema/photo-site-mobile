import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";

if( ! ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ) {
    window.location = "http://videoholod.ru/";
}
else {
    const app = ReactDOMClient.createRoot(document.getElementById('app'))

    app.render(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
