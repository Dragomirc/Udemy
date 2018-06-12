// var people = [];
// var template = $('#people-template').html();


// $('#peopleModule').find('button').on('click',function() {
//     people.push($('#peopleModule').find('input').val());

//     $('#peopleModule').find('input').val('');
//     //data for mustach template
//     var data = {
//         people : people
//     };
//     $('#peopleModule').find('ul').html(Mustache.render(template,data));
// });

// $('#peopleModule').find('ul').delegate('i.del', 'click', function(e){
//     var $remove = $(e.target).closest('li');
//     var i =  $('#peoleModule').find('ul').find('li').index($remove);

//     $remove.remove();

//     people.splice(i,1);
// });

//OBJECT LITERAL PATTERN
var myModule = {
    name: "Will",
    age: 34,
    sayName: function(){
       alert(this.name);
    },
    setName: function(newName) {
        this.name = newName;
    }
}

myModule.sayName();
myModule.setName("Dragomir");
myModule.sayName();