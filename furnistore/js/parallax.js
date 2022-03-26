let currentX = '';
let currentY = '';
let movementConstant = .015;
$(document).mousemove(function (e) {
    if (currentX == '') currentX = e.pageX;
    let xdiff = e.pageX - currentX;
    currentX = e.pageX;
    if (currentY == '') currentY = e.pageY;
    let ydiff = e.pageY - currentY;
    currentY = e.pageY;
    $('.parallax div').each(function (i, el) {
        let movement = (i + 1) * (xdiff * movementConstant);
        let movementy = (i + 1) * (ydiff * movementConstant);
        let newX = $(el).position().left + movement;
        let newY = $(el).position().top + movementy;
        $(el).css('left', newX + 'px');
        $(el).css('top', newY + 'px');
    });
});