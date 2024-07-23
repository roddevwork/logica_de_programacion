#01 OPERADORES Y ESTRUCTURAS DE CONTROL
print("Python : #01 OPERADORES Y ESTRUCTURAS DE CONTROL \n")
print("EJECICIOS:\n")
# OPERRADORES:
print("OPERADORES:\n")

# Operadores aritméticos
print("Operadores aritméticos:")

print(f"Suma: 10 + 3 = {10 + 3}")
print(f"Resta: 10 - 3 = {10 - 3}")
print(f"Multiplicación: 10 * 3 = {10 * 3}")
print(f"División: 10 / 3 = {10 / 3}")
print(f"Módulo: 10 % 3 = {10 % 3}")
print(f"Exponente: 10 ** 3 = {10 ** 3}")
print(f"División entera: 10 // 3 = {10 // 3}")

# Operadores de comparación
print("\nOperadores de comparación:")

print(f"Igualdad: 10 == 3 es {10 == 3}")
print(f"Desigualdad: 10 != 3 es {10 != 3}")
print(f"Mayor que: 10 > 3 es {10 > 3}")
print(f"Menor que: 10 < 3 es {10 < 3}")
print(f"Mayor o igual que: 10 >= 10 es {10 >= 10}")
print(f"Menor o igual que: 10 <= 3 es {10 <= 3}")

# Operadores lógicos
print("\nOperadores lógicos:")

print(f"AND &&: 10 + 3 == 13 and 5 - 1 == 4 es {10 + 3 == 13 and 5 - 1 == 4}")
print(f"OR ||: 10 + 3 == 13 or 5 - 1 == 4 es {10 + 3 == 14 or 5 - 1 == 4}")
print(f"NOT !: not 10 + 4 == 14 es {not 10 + 4 == 14}")

# Operadores de asignación
print("\nOperadores de asignación:")

my_number = 10  # asignación
print(my_number)
my_number += 1  # suma y asignación
print(my_number)
my_number -= 1  # resta y asignación
print(my_number)
my_number *= 2  # multiplicación y asignación
print(my_number)
my_number /= 2  # división y asignación
print(my_number)
my_number %= 2  # módulo y asignación
print(my_number)
my_number **= 1  # exponente y asignación
print(my_number)
my_number //= 1  # división entera y asignación
print(my_number)

# Operadores de identidad
print("\nOperadores de identidad:")

my_new_number = my_number
print(f"my_number is my_new_number es {my_number is my_new_number}")
print(f"my_number is not my_new_number es {my_number is not my_new_number}")

# Operadores de pertenencia
print("\nOperadores de pertenencia:")

print(f"'o' in 'contenido' = {'o' in 'contenido'}")
print(f"'r' not in 'contenido' = {'r' not in 'contenido'}")

# Operadores de bit
print("\nOperadores de bit:")

a = 10  # 1010
b = 3  # 0011
print(f"AND: 10 & 3 = {10 & 3}")  # 0010
print(f"OR: 10 | 3 = {10 | 3}")  # 1011
print(f"XOR: 10 ^ 3 = {10 ^ 3}")  # 1001
print(f"NOT: ~10 = {~10}")
print(f"Desplazamiento a la derecha: 10 >> 2 = {10 >> 2}")  # 0010
print(f"Desplazamiento a la izquierda: 10 << 2 = {10 << 2}")  # 101000


# Estructuras de control
print("\nEstructuras de control:")

# Condicionales
print("\nCondicionales:")

my_string = "Contenido principal"

if my_string == "Contenido diferente":
    print("my_string es 'Contenido diferente'")
elif my_string == "Contenido principal": # Aquí es donde entra por ser verdadero
    print("my_string es 'Contenido principal'")
else:
    print("my_string no es 'Contenido principal' ni 'Contenido diferente'")

# Iterativas
print("\nIterativas:")

print("\Bucle For:")

for i in range(5):
    print(f"{i}:{i}")

print("\nBucle While:")

i = 0
while i <= 5:
    print(i)
    i += 1

# Manejo de excepciones
print("\nManejo de excepciones:")

try:
    print(3 / 0)
except:
    print("Se ha producido un error") 
finally:
    print("Ha finalizado el manejo de excepciones")

print("\nDIFICULTAD EXTRA :")
print("Ejercicio:")
print(
	"-Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3."
)

print("\nResultado:")

def my_function():
    for number in range(10, 56):
     if number % 2 == 0 and number != 16 and number % 3 != 0:
        print(number)
    
my_function() # output: 10 14 20 22 26 28 32 34 38 40 44 46 50 52