import random  # Importamos la librería random para generar números aleatorios

op = ["piedra", "papel", "tijera"]
victp = 0
emptp = 0
derp = 0

def play(opp):
    global victp, emptp, derp
    comp = random.randint(0, 2)
    print(f"Computadora: {op[comp]}")
    
    if opp == comp:
        print("Empate")
        emptp += 1
    elif (opp == 0 and comp == 2) or (opp == 1 and comp == 0) or (opp == 2 and comp == 1):
        print("Ganaste")
        victp += 1
    else:
        print("Perdiste")
        derp += 1

while True:
    print("\nElige una opción: \n1) Piedra\n2) Papel\n3) Tijera")
    
    try:
        opp = int(input("Opcion: ")) - 1 
        if opp not in [0, 1, 2]:
            print("Opción inválida")
            continue
    except ValueError:
        print("ingresa un número valido.")
        continue

    play(opp)

    respuesta = input("¿Quiere volver a jugar? (s/n): ").strip().lower()
    if respuesta != "s":
        print(f"\nResultado:\nVictorias: {victp}\nEmpates: {emptp}\nDerrotas: {derp}")
        break
