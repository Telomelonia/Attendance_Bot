from data import *
from driver import login
for i in range(len(usernames)):
    login(usernames[i], passwords[i])