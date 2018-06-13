// Prototypal inheritance

var human = {
    species: "human",
    create: function (values){
        var instance = Object.create(this);
        for(var property in values){
            instance[property] = values[property]
        }
        return instance;
    },
    saySpecies: function(){
        console.log(this.species);
    },
    sayName: function() {
        console.log(this.name);
    }
}

var musician = human.create({species: "musician", playInstrument: function() {
    console.log('plays ' + this.instrument)
    }
});

var will = musician.create({instrument: "trambone", name: "Will"})
will.sayName();
will.saySpecies();
will.playInstrument();
