var city1 = {
    name: "Lviv",
    population: 100000000,
    GetName: function(){console.log(this.name)},
    exportStr: function(){console.log(this.name,this.population)}
};

var city2 = {
    name: "Kyiv",
    population: 10**6,
    GetName: function(){console.log(this.name)},
    exportStr: function(){console.log(this.name,this.population)}
};

city1.test="Lalala";