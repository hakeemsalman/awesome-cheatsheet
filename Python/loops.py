# # Stop the loop when the fruit is 'banana'
# fruits = ['apple', 'banana', 'cherry']
# for fruit in fruits:
#     if fruit == 'banana':
#         break
#     print(fruit)

# # Using enumerate to get index and value
# fruits = ['apple', 'banana', 'cherry']
# for index, fruit in enumerate(fruits):
#     print(index, fruit)

# Using zip to iterate over two lists
names = ['John', 'Jane', 'Doe']
ages = [30, 25, 22]
print(type(zip(names, ages)))
# for name, age in zip(names, ages):
#     print(name, age)