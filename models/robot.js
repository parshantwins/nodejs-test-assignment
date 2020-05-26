function robot() {
}
robot.prototype.place = function (xPosition, yPosition, facing) {
    this.x = parseInt(xPosition);
    this.y = parseInt(yPosition);
    this.facing = facing;
}

robot.prototype.move = function (tableTop) {
   var facing = this.facing;

   switch(facing) {
       case 'NORTH':
           if(this.y < (tableTop.ySize - 1)) {
               this.y += 1;
           }
           break;
        case 'SOUTH':
            if(this.y > 0) {
                this.y -= 1;
            }
            break;

        case 'EAST':
           if(this.x < (tableTop.xSize - 1)) {
               this.x += 1;
           }
           break;
        case 'SOUTH':
            if(this.x > 0) {
                this.x -= 1;
            }
            break;
   }
}

robot.prototype.rotate = function (newFacing) {
    switch(this.facing) {
        case 'NORTH':
           this.facing = (newFacing == 'LEFT')?'WEST' : 'EAST';
            break;
         case 'SOUTH':
            this.facing = (newFacing == 'LEFT')?'EAST' : 'WEST';
             break;
 
         case 'EAST':
            this.facing = (newFacing == 'LEFT')?'NORTH' : 'SOUTH';
            break;
         case 'SOUTH':
            this.facing = (newFacing == 'LEFT')?'SOUTH' : 'NORTH';
             break;
    }
}

module.exports = robot;