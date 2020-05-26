/**
 * Created by GMKJ on 2016/5/30.
 */
require.config({
    baseUrl: '/',
    paths: {
        'jquery': '/statics/js/jquery.min',
        'jquery-ui': '/statics/gm/jquery-ui.min',
        'jquery-zclip':'/statics/gm/jquery.zclip.min',
        'app':'/statics/gm/app.min',
        'b':'/statics/gm/b.min'
    },
    shim: {
        'jquery':{exports: 'jquery'},
        'jquery-ui':['jquery'],
        'jquery-zclip':['jquery']
    },
    //urlArgs: "bust=" +  (new Date()).getTime()
    urlArgs: "bust=1.0.1"
});
require(['app'], function () {

});
