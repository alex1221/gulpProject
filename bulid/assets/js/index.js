define([
    'viewTpl/indexTpl'
], function (indexTpl) {
    'use strict';
    var app = {
        init() {
            let data = 'test';

            $('#test').html(indexTpl(data))
        }
    }

    return app;
});