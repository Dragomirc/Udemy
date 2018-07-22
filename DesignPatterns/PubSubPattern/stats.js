var stats = (function(){
    var people = 0;
    

    //cache DOM
    var $stats = $('#stats-module');
    var template = $('#stats-template').html();
    // Bind events
    events.on('peopleChanged',setPeople);

    render();

    function render() {
        $stats.html(Mustache.render(template, { peopleCount : people }));
    }

    function setPeople(newPeople) {
        people = newPeople;
        render();
    }

    function destroy() {
        $stats.remove();
        events.off('peopleChanged', setPeople);
    }

    return {
        destroy: destroy
    }

})()