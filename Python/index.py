#Comentario de una sola linea
'''
  Comentario de
  varias lineas
'''

# Variables
numero = 10
nombre = "Juan"
numero_decimal = 10.5
verdadero = True
falso = False
lista = [1,2,3,4,5]
tupla = (1,2,3,4,5) # No se puede modificar los valores de la tupla despues de creada
diccionario = {
  "nombre": "Juan", # clave: Valor 
  "apellido": "Perez" # clave: Valor
}
nulo = None

# Imprimir
print(numero)

# Concatenar
print("Hola " + nombre)
# Interpolacion
print(f"Hola {nombre}")

#print("1"+1) # Error

# Conversion de tipos
print(int("1")+1)
print(str(1)+str(1))

# Operadores de asignacion
numero = 10
numero += 1 # numero = numero + 1
numero -= 1
numero *= 1
numero /= 1
numero %= 1
numero **= 1
numero //= 1

# Operadores de comparacion
# Igualdad: ==
print(10 == 10) # True
# Diferencia: !=
print(10 != 10) # False
print(10 > 10) # False
print(10 < 10) # False
print(10 >= 10) # True
print(10 <= 10) # True

# Operadores logicos
# and
print(True and True) # True

# or
print(True or False) # True

# not
print(not True) # False

#ejercicio
print( not((10 == 10) and (10 != 10)) )

# Input

nombre = input("Ingresa tu nombre: ")

#Condicionales
if nombre == "Juan":
  print("Hola Juan")
elif nombre == "Pedro":
  print("Hola Pedro")
else:
  print("Hola desconocido")

"""
  Realiza:
  1) - Un programa donde puedas jugar piedra, papel o tijera contra la computadora y ver cuantas partidas
  ganaste, perdiste o empataste y despues preguntar si quieres volver a jugar.

  2) - Un programa que genere un numero aleatorio entre 1 y 100 y te de 5 oportunidades para adivinarlo,
  si adivinas en menos de 5 oportunidades imprime "Felicidades ganaste" de lo contrario "Perdiste"

  Fecha de entrega: 05/02/2025
"""