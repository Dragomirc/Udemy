// // OBJECT REVEALING PATTERN
var people = (function() {
    var people =  ["Will", "Laura"];
  
        //Cache DOM
        var $el = $('#peopleModule');
        var $button = $el.find('button');
        var $input = $el.find('input');
        var $ul = $el.find('ul');
        var $icon = $el.find('i');
        var template = $el.find('#people-template').html();
    
        //bind events
        $button.on('click', addPerson);
        $ul.delegate('i.del','click', deletePerson);
    render();

    function render() {
      $ul.html(Mustache.render(template,{people:people}));
    };
    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
         people.push(name);
         render();
         $input.val('');
    };
    function deletePerson(event) {
        var i;
        if(typeof event === "string"){
           i = people.indexOf(event);
        }else{
         var $remove=  $(event.target).closest('li');
           i = $ul.find('li').index($remove);
        }
        people.splice(i,1);
         render();
    };


    return {
       addPerson: addPerson,
       deletePerson: deletePerson
    }
})()

//     $('#peopleModule').find('button').on('click',function() {
//         people.push($('#peopleModule').find('input').val());
    
//         $('#peopleModule').find('input').val('');
//         //data for mustach template
//         var data = {
//             people : people
//         };
//         $('#peopleModule').find('ul').html(Mustache.render(template,data));
//     });
    
//     $('#peopleModule').find('ul').delegate('i.del', 'click', function(e){
//         var $remove = $(e.target).closest('li');
//         var i =  $('#peoleModule').find('ul').find('li').index($remove);
    
//         $remove.remove();
    
//         people.splice(i,1);
//     });

