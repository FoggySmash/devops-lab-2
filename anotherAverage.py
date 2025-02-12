numbers = [4,2,4,4,6]
num = 0
for i in numbers:
    print(i)
    num += i
    
average = num / len(numbers)
print(f"The average of the given numbers is: {average}")