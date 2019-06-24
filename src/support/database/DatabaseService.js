import { firebaseDatabase } from "./firebaseConfig";
import moment from 'moment';

export default class DatabaseService {

    /**
     * Get all items from database.
     *
     * @param nodePath
     * @param callback
     * @param size
     */
    static getDataList = (nodePath, callback, size = 100) => {
        let query = firebaseDatabase
            .ref(nodePath)
            .orderByChild('seeAt')
            .endAt(moment().unix())
            .limitToLast(size);

        query.on('value', dataSnapshot => {
            let items = [];

            dataSnapshot.forEach(child => {
                let item = child.val();
                item['key'] = child.key;
                items.unshift(item);
            });

            callback(items);
        });
    };

    /**
     * Push new data to database.
     *
     * @param node
     * @param objToSubmit
     * @returns {string}
     */
    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

    /**
     * Remove a specified item from database.
     *
     * @param id
     * @param node
     * @returns {Promise<any>}
     */
    static remove = (id, node) => {
        return firebaseDatabase.ref(node + '/' + id).remove();
    };
}