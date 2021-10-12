from datetime import datetime, timedelta, date
ass = open("time.txt","r")
arse = ass.read()
x = arse[:arse.find(" ")]
bex = x[0:3]
mix = str(int(x[3:5]) - 1)
afx = x[5:]
f = bex + mix + afx
today = date.today()
ass.close()
print("\n\n\n\nTime get from git        : {}\nCurrent Time             : {}".format(x,today.strftime("%m/%d/%Y")))
if(f == today.strftime("%m/%d/%Y")):
    date_1 = datetime.strptime(x, "%m/%d/%Y")
    EndDate = date_1+timedelta(weeks=6)
    print("time processed by python : {}    \ntime after 6 weeks       : {}\n\n\n\n".format(date_1.strftime("%m/%d/%Y"),EndDate.strftime("%m/%d/%Y")))
    a = open("time.txt","w")
    a.write(EndDate.strftime("%m/%d/%Y")+" 04:00:00")
    a.close()
else:
    print("\nNo time change needed\n\n\n\n")
