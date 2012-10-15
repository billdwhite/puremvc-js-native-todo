define(
    [
        "dojo/_base/declare",
        "todomvcnative/AppConstants",
        "todomvcnative/view/event/AppEvents",
        "todomvcnative/controller/command/StartupCommand",
        "todomvcnative/controller/command/PrepControllerCommand",
        "todomvcnative/controller/command/PrepModelCommand",
        "todomvcnative/controller/command/PrepViewCommand",
        "todomvcnative/controller/command/TodoCommand",
        "todomvcnative/model/proxy/TodoProxy",
        "todomvcnative/view/component/TodoForm",
        "todomvcnative/view/mediator/RoutesMediator",
        "todomvcnative/view/mediator/TodoFormMediator"
    ],
    function(declare) {
        
        var Application = declare("todomvc.Application", null, {
            
            facade: null,
            
            constructor: function() {
                console.log("todomvc.Application()");
                this.facade = puremvc.Facade.getInstance(todomvc.AppConstants.CORE_NAME);
                this.facade.registerCommand(todomvc.AppConstants.STARTUP, todomvc.controller.command.StartupCommand);
                this.facade.sendNotification(todomvc.AppConstants.STARTUP);
            }
        });

        Application.STARTUP = "startup";

        return Application;
    }
);
