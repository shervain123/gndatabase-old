from datetime import datetime, timedelta
ass = open("time.txt","r")
arse = ass.read()
x = arse[:arse.find(" ")]
ass.close()
print(x)
date_1 = datetime.strptime(x, "%m/%d/%Y")
EndDate = date_1+timedelta(weeks=6)
print("\n\n\n\nTime get from git        : {}    \ntime processed by python : {}    \ntime after 6 weeks       : {}\n\n\n\n".format(x,date_1.strftime("%m/%d/%Y"),EndDate.strftime("%m/%d/%Y")))
a = open("time.txt","w")
a.write(EndDate.strftime("%m/%d/%Y")+" 04:00:00")
a.close()