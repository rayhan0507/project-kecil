# module
import random   

a = ["rayhan", "rayhan", "budi", "budi"]   # remove budi

def list_baru(a):
    new_list = []
    for value in a:
        if value == "rayhan":
            new_list.append(value)
    return new_list

result = list_baru(a)
print(result)

# hello world
def greet():            
    return "hello world"

result = greet()
print(result)

# mengubah boolean ke string
def boolean_to_string(b):
    if b == True:
        return "True"
    elif b == False:
        return "False"
        
result1 = boolean_to_string(True)
result2 = boolean_to_string(False)
print(result1)
print(result2)

def positive_sum(arr):        # sum
    total = 0
    for num in arr:
        if num > 0:
            total += num
    return total

num = [1, -4, 7, 12]
result = positive_sum(num)
print(result)

def bmi(weight, height):                        #bmi
   bmi_value = weight / (height**2)  

   if bmi_value <= 18.5: return "Underweight"
   elif bmi_value <= 25.0: return "Normal"
   elif bmi_value <= 30.0: return "Overweight"
   else:
      return "Obese"
   

value = bmi(40, 1.60 )
value2 = bmi(60, 1.70)
value3 = bmi(70, 1.60)
value4 = bmi(70, 1.50)




num_list = [6, 2, 1, 8, 10]                      # sum wihtout highest and lowers number
num_list2 = [1, 1, 11, 2, 3]

def sum_array(arr):
    if len(arr) > 2:
        arr = [x for x in arr if x != min(arr) and x != max(arr)]
    return sum(arr)

result = sum_array(num_list)
result2 = sum_array(num_list2)

print(result)
print(result2)

def sum_array2(arr):
    if not arr or len(arr) <= 1:
        return 0

    arr.remove(max(arr))
    arr.remove(min(arr))

    result = sum(arr)
    return result

num_list3 = [6, 2, 1, 8, 10]
num_list3 = [x for x in num_list3 if x not in [1, 10]]
print(num_list3)

#Given an array of integers, return a new array with each value doubled.
#For example:
#[1, 2, 3] --> [2, 4, 6]
def maps(a):
    return [2 * x for x in a]

#reverse word
def reverseWords(str):
    return " ".join(str.split(" ")[::-1])

#average number          [1,2,3,4,5,6,7,8,9,10] ----> 5.5
def find_average(numbers):
    if not numbers:
        return 0
    average = sum(numbers) / len(numbers)
    return average
    
#remainder
def remainder(a,b):
    if min(a,b) == 0:
        return None
    elif a > b:
        return a % b
    else: 
        return b % a
    
print(remainder(17,5))

# count by x count_by(1,10) should return [1,2,3,4,5,6,7,8,9,10]
def count_by(x, n):
    return [i * x for i in range(1, n + 1)]

# string to array
def string(kata):
    hasil = kata.split()
    return hasil

#Grade book
def get_grade(s1, s2, s3):
    mean = sum([s1,s2,s3])/3
    if mean>=90: return 'A'
    if mean>=80: return 'B'
    if mean>=70: return 'C'
    if mean>=60: return 'D'
    return "F "

# tebak angka
def guess(x):
   random_number = random.randint(1, x)
   guess = 0
   attempt = 0
   
   while guess != random_number:
      guess = int(input(f"masukan angka 1 sampai {x}: "))
      attempt += 1

      if guess < random_number:
         print("angkanya kekecilan")
      elif guess > random_number:
         print("angkanya kegedean")

      elif attempt == 10:
         print("game over point anda sudah habis")

   if guess == random_number:
      print(f"selamat anda benar, jawabanya {guess} ")
    


guess(10)
