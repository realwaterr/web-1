var Body = {
    SetColor : function (color) {
        // document.querySelector('body').style.color=color;
        $('body').css('color', color)
    },
    SetBackgroundColor : function (color) {
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color)
    }
}
function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor=color;
}
    var target = document.querySelector('body');
function BodySetColor(color){
    document.querySelector('body').style.color=color;
}
var Links = {
    setColor : function (color) {
        $('a').css('color', color)
    }
}
function nightDayhandler(self){
    var target = document.querySelector('body');
    if (self.value==='night'){
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        Links.setColor('powderblue');
        self.value = 'day';
    } else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        Links.setColor('blue');
        self.value = 'night';
    }
}