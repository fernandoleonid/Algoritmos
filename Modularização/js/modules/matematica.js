define( () => {
   return {
      soma: (...n) => n.reduce( ( acc, num) => (num|0) + (acc|0) , 0),
      subtracao: (...n) => n.reduce( ( acc, num )  => num - acc , 0)
   }
});