{
    // * 设置hero日期
    const month = document.querySelector('.date .month');
    const day = document.querySelector('.date .day');

    const currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    currentMonth = (currentMonth > 9) ? currentMonth : ('0' + currentMonth);
    currentDay = (currentDay > 9) ? currentDay : ('0' + currentDay);
    month.innerHTML = currentMonth;
    day.innerHTML = currentDay;
}


// {
//     $(function () {
//         document.addEventListener('wheel', zoomIn, {
//             passive: false,
//             useCapture: false
//         });

//         function zoomIn(event) {

//             event.preventDefault();

//         }
//         var page = 0;
//         // jquery 兼容的滚轮事件
//         $('body').on("mousewheel DOMMouseScroll", function (e) {
//             var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
//                 (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
//             page = $("html,body").scrollTop()


//             if (delta > 0) {
//                 // 向上滚
//                 if (page > 0) page -= 200;
//                 $("html,body").stop().animate({
//                     scrollTop: page + 'px'
//                 }, 500, 'swing');

//                 // var sc = $('html,body')
//                 // console.log(sc[0])
//                 // TweenLite.to(sc[0], 1, {
//                 //     scrollTop: page + 'px',
//                 //     ease: Power1.easeOut
//                 // });



//             } else if (delta < 0) {
//                 // 向下滚
//                 $("html,body").stop(true)
//                 page += 200;
//                 $("html,body").stop().animate({
//                     scrollTop: page + 'px'
//                 }, 500, 'swing');
//                 // TweenLite.to($("html,body")[0], 1, {
//                 //     scrollTop: 200 + 'px',
//                 //     ease: Power1.easeOut
//                 // });


//             }
//         });
//     })
// }