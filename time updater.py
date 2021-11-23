from datetime import datetime, timedelta, date
import tweepy
ass = open("time.txt","r")
arse = ass.read()
x = arse[:arse.find(" ")]
today = date.today()
ass.close()
print("\n\n\n\nTime get from git        : {}\nCurrent Time             : {}".format(x,today.strftime("%m/%d/%Y")))
if(x == today.strftime("%m/%d/%Y")):
    date_1 = datetime.strptime(x, "%m/%d/%Y")
    EndDate = date_1+timedelta(weeks=6)
    print("time processed by python : {}    \ntime after 6 weeks       : {}\n\n\n\n".format(date_1.strftime("%m/%d/%Y"),EndDate.strftime("%m/%d/%Y")))
    a = open("time.txt","w")
    a.write(EndDate.strftime("%m/%d/%Y")+" 20:00:00 +00:00")
    a.close()
    CONSUMER_KEY="CZnOJfgZkw0j5bUNjjqEnTK1E"
    CONSUMER_SECRET="ooAG74oYg1wG3n5o2YqseDKQw6j9K1dtlTMLeI216fXuYt7YaM"
    access_token = "1452561192711385089-7JZ0TPZ9CUgIljRGgEOzNbCeUv6Ovf"
    access_token_secret = "Hfwklwva0DN6onpGb5EYsVHEGr5FyxykG99gcOhEtGzTg"
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)
    msg = '''
--- Time update report ---
Current time (UTC): {}
Last update date  : {}
Processed time    : {}
Next update time  : {}
--------------------------
'''.format(today.strftime("%m/%d/%Y"),x,date_1.strftime("%m/%d/%Y"),EndDate.strftime("%m/%d/%Y"),)
    msg_sim = "Time updated\nFrom: {}\nTo: {}".format(date_1.strftime("%m/%d/%Y"),EndDate.strftime("%m/%d/%Y"))
    api.send_direct_message(876283042863632384, msg)
    api.send_direct_message(876283042863632384, msg_sim)
    api.send_direct_message(2212073618, msg_sim)
else:
    print("\nNo time change needed\n\n\n\n")
