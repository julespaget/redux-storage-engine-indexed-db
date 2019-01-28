import idbKeyVal from 'idb-keyval';

const idb = function idb(store) {
    return {
        load: function () {
            return idbKeyVal.get(store);
        },

        save: function (states) {
            return idbKeyVal.set(store, states);
        }
    };
};

export default idb;
