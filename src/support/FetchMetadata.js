import domino from "domino";
import {getMetadata} from "page-metadata-parser";

class Metadata {

    static fetch = (url, callback) => {
        fetch(url, {
            mode: 'cors',
            // headers: new Headers({
            //     // 'Content-Type': 'text/html',
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            //     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            // })
        })
        .then(response => response.text())
        .then(html => {
            const doc = domino.createWindow(html).document;
            const metadata = getMetadata(doc, url);

            callback(metadata);
        }).catch(reason => {
            console.log('Fetch error:', reason)
        });
    }
}

export default Metadata;