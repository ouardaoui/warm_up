function player() 
{
  return "im player"
}

player.prototype = {
  fullname : "ayoub dali3", 
  getFullname : function () {
   return this.fullname;
  }
}

const p = new player()

console.log(p.getFullname());
