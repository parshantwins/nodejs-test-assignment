var args = process.argv.slice(2);
var robot = require('./models/robot');
var input = require('./models/input');
var tableTop = require('./models/tableTop');


var table = new tableTop(5,5);
var robot = new robot();

if(args.length > 0) {
    var commandFileUrl = args[0];
    var input = new input(commandFileUrl);
    if(input.commands && input.isValidFileCommand()) {
        for(i=0; i<input.commands.length; i++) {
            var command = input.commands[0];
            switch(input.getCommandWithoutArguments(command)) {
                case 'PLACE': 
                var placeArguments = input.getCommandArguments(command);
                var xPosition = placeArguments[0];
                var yPosition = placeArguments[1];
                var facing  = placeArguments[2];

                if((xPosition >= table.xSize) && (yPosition >= table.ySize)) {
                    console.log('Robot position is out of table top');
                    return;
                }

                robot.place(xPosition, yPosition, facing);
                break;

                case 'MOVE':
                    robot.move(table);
                    break;
                case 'LEFT':
                case 'RIGHT':
                    robot.rotate(command);
                    break;
                case 'REPORT':
                    console.log("output: " + robot.x + "," + robot.y + "," + robot.facing + " ");
                    break;
                default:
            }
        }
    } else {
        console.log("Error: First command command should be place command...");
    }
} else {
    console.log("Error: Missing command file path");
}