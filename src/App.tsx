import { Fragment, useEffect } from "react";
import grapesjs from "grapesjs";
import artworkPresenter from './blocks/ArtworkPresenter';
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsBasicBlocks from "grapesjs-blocks-basic";
import customButton from './components/CustomButton';


function App() {

    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            plugins: [gjsPresetWebpage, gjsBasicBlocks],
        });

        const blockManager = editor.BlockManager;
        blockManager.add('custom-btn', customButton)
        blockManager.add('art-board', artworkPresenter)

    }, []);


    return (
        <Fragment>
            <div id="editor"></div>
        </Fragment>
    );
}

export default App;
