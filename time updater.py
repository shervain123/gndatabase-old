from datetime import datetime, timedelta
from sys import argv
x = str(argv[1])
date_1 = datetime.strptime(x, "%m/%d/%Y")
EndDate = date_1.today()+timedelta(weeks=6)
print("\n\n\n\nTime get from git        : {}    \ntime processed by python : {}    \ntime after 6 weeks       : {}\n\n\n\n".format(x,date_1.strftime("%m/%d/%Y"),EndDate.strftime("%m/%d/%Y")))
a = open("time.txt","a")
a.write(EndDate.strftime("%m/%d/%Y")+" 04:00:00")
a.close()