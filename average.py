numbers = [1,2,3,4,5]
num = 0
for i in numbers:
    print(i)
    num += numbers[i-1]
    
average = num / len(numbers)
print(f"The average of the given numbers is: {average}")