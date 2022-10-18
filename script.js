var scheduleContainer = $('.container');
var currentTime = $('#currentDay');
currentTime.text(moment())

function generateHourSlots(){
    for(i=9; i<9+13; i++){
        if(i<12){
            var hourSlot = $('<div>');
            var input = $('<input>');
            var button =$('<button>');
            button.attr('data-time', `${i}`+ "am")
                    .text("save")
                    .addClass('saveBtn')
            hourSlot.attr('id', `${i}`+ "am")
                    .addClass('hour-slot')
                    .text([i] + "am")
                    .append(input)
                    .append(button);

            scheduleContainer.append(hourSlot);
        }
        else if(i-12 == 0){
            var hourSlot = $('<div>');
            var input = $('<input>');
            var button =$('<button>');
            
            button.attr('data-time', "12pm")
                    .addClass('saveBtn')
                    .text("save")
            hourSlot.attr('id', "12pm")
                    .addClass('hour-slot')
                    .text( "12pm")
                    .append(input)
                    .append(button);
            scheduleContainer.append(hourSlot);
        }
        else{
            var hourSlot = $('<div>');
            var input = $('<input>');
            var button =$('<button>');
            
            button.attr('data-time', `${i-12}pm`)
                    .addClass('saveBtn')
                    .text("save")
            hourSlot.attr('id', `${i-12}`+ "pm")
                    .addClass('hour-slot')
                    .text([i-12] + "pm")
                    .append(input)
                    .append(button);
            scheduleContainer.append(hourSlot);
            }

    }
}

scheduleContainer.on( "click", '.saveBtn',handleStorage);

function handleStorage(event){
    var timeSlot = event.target.dataset.time;
    var input = $(event.currentTarget).siblings("input").val();
    localStorage.setItem(timeSlot, input);
}

function updateMoment(){
    var interval = setInterval(function(){
    currentTime.text(moment())
}, 1000);
}

updateMoment();
generateHourSlots();

//input to text area

