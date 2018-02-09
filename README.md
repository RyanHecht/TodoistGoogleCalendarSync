# Ryan's Todoist/Google Calendar synchronization

I was unhappy with Todoist's Google Calendar integration, and IFTTT didn't support what I wanted to do either. So, I made my own integration.

## Background

I keep track of my tasks for my classes with Todoist. However, when planning my day, I turn to Google Calendar. While Todoist
natively supports a way to have my tasks appear in Google Calendar, the tasks only show up as fixed-lengthed events. I'd much
rather have the task start at the time I created it, and end at the due date.

I had a primitive version of this working using IFTTT, but it didn't support auto-deleting completed tasks.

So, this project was born.


## Usage
_Note: this was mostly intended for personal use, so this usage documentation is DEFINITELY not complete. If you want some help setting this up, feel free to reach out to me_

In  `secrets.yml`, fill in the `todoist` field with the API key for your Todoist account.
Then, fill in the `calendarId` field with the ID of the Google Calendar you wish to sync events with
 (I recommend having a dedicated calendar for this purpose).

Next, we need to populate the two placeholder fields in `client_secrets.json`, the "client_id" and "client_secret", with
values provided by Google. To generate these, follow step one of this guide: https://auth0.com/docs/connections/social/google#1-generate-the-google-client-id-and-client-secret

Once that's all set up, try creating a task (with a due date/time) in Todoist, then run `./sync-task`

Head to https://calendar.google.com ...you should see your event!

Try checking off your task in Todoist, and run `./sync-task` again...the calendar event should be deleted!

I would recommend setting `./sync-task` to run on a cron job once per minute or so, for up to the minute syncing!

### Optional: Google App Script

By installing the Google App Script in `autoShrinkTimes.gs` to run once a minute, you can have your task events
decrease their duration in real time. This is helpful to me, but I can see why others may wish to preserve the initial
task creation time.
