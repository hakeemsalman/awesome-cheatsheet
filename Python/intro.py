# Run python script
print("Hi Salman")

# Variable 
a = 3
A = 4
print (a)
print (A)

# Conditions
a = 3
b = 9 
if b % a == 0 :
    print ("b is divisible by a")
elif b + 1 == 10:
    print ("Increment in b produces 10")
else:
    print ("You are in else statement")


# Function for checking the divisibility
# Notice the indentation after function declaration
# and if and else statements
def checkDivisibility(a, b):
    if a % b == 0 :
        print ("a is divisible by b")
    else:
        print ("a is not divisible by b")
# Driver program to test the above function
checkDivisibility(4, 2)

x = 2 + 4j

print('type of x->>', type(x))

# Python program to 
# demonstrate numeric value

a = 5
print("Type of a: ", type(a))

b = 5.0
print("\nType of b: ", type(b))

c = 2 + 4j
print("\nType of c: ", type(c))


# Python Program for 
# Creation of String 
  
# Creating a String  
# with single Quotes 
String1 = 'Welcome to the Geeks World'
print("String with the use of Single Quotes: ") 
print(String1) 
  
# Creating a String 
# with double Quotes 
String1 = "I'm a Geek"
print("\nString with the use of Double Quotes: ") 
print(String1) 
print(type(String1))
  
# Creating a String 
# with triple Quotes 
String1 = '''I'm a Geek and I live in a world of "Geeks"'''
print("\nString with the use of Triple Quotes: ") 
print(String1) 
print(type(String1))

# Creating String with triple 
# Quotes allows multiple lines 
String1 = '''Geeks 
            For 
            Life'''
print("\nCreating a multiline String: ") 
print(String1) 


print(len(str(100**100)))