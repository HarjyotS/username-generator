import requests
import time

lsit = []
for i in range(1, 10000):
    try:
        url = "http://localhost:5000/username"
        c = requests.get(url)
        lsit.append(c.text)
        print("success")
    except Exception as e:
        time.sleep(1)
        print("error")
        pass

print(len(lsit))
