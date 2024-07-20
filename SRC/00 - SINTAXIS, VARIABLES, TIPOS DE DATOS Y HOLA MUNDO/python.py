# Python
# 00 SINTAXIS, VARIABLES, TIPOS DE DATOS Y HOLA MUNDO

print("Python : #00 SINTAXIS, VARIABLES, TIPOS DE DATOS Y HOLA MUNDO \n")
print("EJECICIOS:\n")


# 1-Crea un comentario en el código y coloca la URL del sitio web oficial
print("1-Crea un comentario en el código y coloca la URL del sitio web oficial:")
print("Sitio Oficial: " + "https://www.python.org/")
print("Tutorial: " + "https://docs.python.org/es/3/tutorial/index.html")


# 2-Representa las diferentes sintaxis que existen de crear comentarios
print("\n2-Representa las diferentes sintaxis que existen de crear comentarios:")

# comentario de una linea
print("# comentario de una linea")


'''
comentario de multiples lineas
comentario de multiples lineas
comentario de multiples lineas
'''
print("'''")
print("comentario de multiples lineas\n"
       "comentario de multiples lineas\n"
       "comentario de multiples lineas")
print("'''")


"""
comentario de multiples lineas
comentario de multiples lineas
comentario de multiples lineas
"""

# 3-Crea una variable (y una constante si el lenguaje lo soporta).
print("\n3-Crea una variable (y una constante si el lenguaje lo soporta):")
my_variable = "valor asignado a mi variable"
print("my_variable = 'valor asignado a mi variable'")

MY_CONSTANT = "un valor"  # por convención usamos mayúsculas, aunque no exista el concepto de constante, es decir que si se puede modificar el valor.

# 4-Crea variables representando todos los tipos de datos primitivos del lenguaje
print("\n4-Crea variables representando todos los tipos de datos primitivos del lenguaje:")
# Existen 4 tipos de datos primitivos:
print("Integer:")
my_number = 10
print("my_number = ",my_number)

print("\nFloat:")
my_float = 10.5
print("my_float = ",my_float)

print("\nString:")
my_string = "'Soy un string, una cadena de caracteres'"
print("my_string = ",my_string)

print("\nBoolean:")
my_boolean = True
my_boolean_2 = False
print("my_bolean True = ",my_boolean)
print("my_bolean False = ",my_boolean_2)


print("\n5-Imprime por terminal el texto: '¡Hola, [y el nombre de tu lenguaje]!':")
print("¡Hola, Python!")








