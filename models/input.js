var fs = require('fs');

function input(filename) {
    try {
        this.commands = fs.readFileSync(filename).toString().split("\n");
    } catch (ex) {
        throw ex;
    }
}

input.prototype.isValidFileCommand = function () {
    var firstCommand = this.commands[0];
    var firstCommandUpperCase = firstCommand.toUpperCase();

    var commandDetsils = firstCommandUpperCase.split(" ");
    if(commandDetsils[0] == "PLACE") {
        return true;
    }
    return false;
}

input.prototype.getCommandWithoutArguments = function(command) {
    if(command.indexOf(" ")== -1) {
        return command;
    }

    return command.slice(0, command.indexOf(" "));
}

input.prototype.getCommandArguments = function(command) {
    var spacePlace = command.indexOf(" ");
    var argumentString = command.slice(spacePlace);
    var argumentArray = argumentString.split(",");
    var argumentArrayWithoutSpace = argumentArray.map(function(s) {
        return s.trim();
    });

    return argumentArrayWithoutSpace;
}

module.exports = input;