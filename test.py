    #rock paper skissor
import random
import time


games = ["kertas", "gunting", "batu"]
choice_games = random.choice(games)

attempt = 0
score = 0
while attempt != 4:

    user = input("masukan (kertas/gunting/batu): ")
    if user in games:
       

        if user == choice_games:
           time.sleep(1)
           print("bot menebak")
           time.sleep(1)
           print(".")
           time.sleep(1)
           print("..")
           time.sleep(1)
           print("...")
           time.sleep(1)
           print(f"user({user}) vs musuh({choice_games})")
           print("seri")
           attempt += 1

           
           
        elif (user == "kertas" and choice_games == "gunting") or \
            (user == "batu" and choice_games == "kertas") or \
            (user == "gunting" and choice_games == "batu"):
            time.sleep(1)
            print("bot menebak")
            time.sleep(1)
            print(".")
            time.sleep(1)
            print("..")
            time.sleep(1)
            print("...")
            time.sleep(1)
            print(f"user({user}) vs musuh({choice_games})")
            print("anda kalah")
            attempt += 1
            score -= 1

        else:
            time.sleep(1)
            print("bot menebak")
            time.sleep(1)
            print(".")
            time.sleep(1)
            print("..")
            time.sleep(1)
            print("...")
            time.sleep(1)
            print(f"user({user}) vs musuh({choice_games})")
            print("anda menang")
            attempt += 1
            score += 1
           
    else:
        print("mohon ketik kertas gunting batu")
    
    print(" ")
    if score < 0:
       print(f"total score: 0 dari 4")
    elif score > 0:
        print(f"total score: {score} dari 4")
    print(" ")
