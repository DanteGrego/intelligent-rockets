# Intelligent rockets

Simulación de un algoritmo evolutivo hecho con JavaScript y p5.js. Una población de 50 cohetes aprende, generación tras generación, a llegar a un objetivo esquivando obstáculos.

## Cómo funciona

- Cada cohete tiene una secuencia de genes: un impulso (arriba, abajo, izquierda o derecha) por cada paso de tiempo.
- Al terminar una generación se elige el cohete que no chocó y quedó más cerca del objetivo. La siguiente copia sus genes, con un 0,8 % de probabilidad de mutación por gen.
- El tiempo límite es adaptativo: se acorta cuando el mejor llega y se alarga después de varias generaciones fallidas.
- Las generaciones se calculan todas juntas y después se recorren en un visor.

## Uso

Abrir `index.html` en un navegador. No requiere instalación: p5.js está incluido en `libraries/`.

1. Arrastrar el mouse sobre el lienzo para dibujar obstáculos. Las teclas `W` y `S` mueven el objetivo y el punto de partida a la posición del mouse.
2. Escribir la cantidad de generaciones y presionar **Empezar**.
3. Recorrer las generaciones con los botones o escribiendo su número, y ajustar la velocidad con el control deslizante.

**Mostrar Promedios** dibuja la trayectoria promedio de la generación, con la velocidad codificada en color.
