import { Fragment, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsBasicBlocks from "grapesjs-blocks-basic";


function App() {

    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            plugins: [gjsPresetWebpage, gjsBasicBlocks],
        });

        const blockManager = editor.BlockManager;

        blockManager.add('custom-btn', {
            label: 'Button',
            category: 'Custom',
            content: `
            <div class="custom-btn">
                <div>Click Me</div>
            </div>
            <style>
            .custom-btn{
                width: fit-content;
                background-color: lightgray;
                padding: 10px 10px;
            }
            </style>
            `,
            attributes: {
                title: 'Insert Custom Button',
            }
        })



    }, []);


    return (
        <Fragment>
            <div id="editor"></div>
        </Fragment>
    );
}

export default App;
