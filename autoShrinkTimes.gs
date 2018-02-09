function myFunction() {
  var calendar = CalendarApp.getCalendarsByName("To-Do")[0];
  var events = calendar.getEvents(new Date(), getOneYearInTheFuture());
  for (var i in events) {
    var e = events[i];
    if (e.getTag("todo-processed") != true) {
      e.setTime(new Date(), e.getEndTime())
      e.setTag("todo-processed", true)
    }
  }
}

function getOneYearInTheFuture() {
  var MILLIS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
  var now = new Date();
  var future = new Date(now.getTime() + MILLIS_PER_YEAR);
  return future;
}
