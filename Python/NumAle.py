import random  # Importamos la librería random para generar el número aleatorio

numero_secreto = random.randint(1, 100)  
intentos = 5 


print("Bienvenido, tendras 5 intentos para adivinar un número entre 1 y 100.")

for i in range(1, intentos + 1):
    try:
        intento = int(input(f"Intento {i}: Ingresa tu numero: "))

        if intento < 1 or intento > 100:
            print("Ingresa un numero entre 1 y 100.")
            continue

        if intento == numero_secreto:
            print(f"Felicidades, ganaste en {i} intentos")
            break
        elif intento < numero_secreto:
            print("El numero es mayor.")
        else:
            print("El numero es menor.")

    except ValueError:
        print("ingresa un numero valido")

else:
    print(f"Perdiste. El numero era {numero_secreto}")

