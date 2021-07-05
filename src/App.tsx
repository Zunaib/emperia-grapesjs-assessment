import { Fragment, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsBasicBlocks from "grapesjs-blocks-basic";


function App() {

    useEffect(() => {
        grapesjs.init({
            container: "#editor",
            plugins: [gjsPresetWebpage, gjsBasicBlocks],
        });
    }, []);


    return (
        <Fragment>
            <div id="editor"></div>
        </Fragment>
    );
}

export default App;
