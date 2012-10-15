/**
 * @author Mike Britton
 *
 * @class PrepModelCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
        name: 'todomvc.controller.command.PrepModelCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /**
         * Register Proxies with the Model
         * @override
         */
        execute: function(notification) {
            this.facade.registerProxy(new todomvc.model.proxy.TodoProxy());
        }
    }
);
