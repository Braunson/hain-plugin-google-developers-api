'use strict';

module.exports = (pluginContext) = > {
    const shell = pluginContext.shell;

    function search(query, res) {
        const query_trim = query.trim();
        
        if (query_trim.length == 0) {
            return;
        }
        
        res.add({
            id: query_trim,
            payload: 'open',
            title: 'Search ' + query_trim,
            desc: 'Search in the Google Developers API'
        });
    }

    function execute(id, payload) {
        if (payload !== 'open') {
            return;
        }
        shell.openExternal(`https: //developers.google.com/s/results/?q=${id}}`);
    }

    return {
        search, execute
    };
};