import React, {Fragment}from 'react';

export const About = () => (
    <Fragment>
        <h1>About</h1>
        <p>El juego del Ahorcado VS es un juego en el que dos jugadores compiten para adivinar una palabra antes que el otro. El jugador que adivine primero gana, pero si ambos terminan sus intentos sin adivinar, será un empate. También puedes perder si te rindes y decides no seguir jugando.</p>
        
        <p>Para empezar una partida, uno de los jugadores crea la partida y le da un nombre divertido. Después, el jugador crea una contraseña para proteger la partida y se une a ella. Ahora, la partida es visible en una lista para que el otro jugador pueda unirse.</p>

        <p>Cuando el segundo jugador se conecta al juego y ambos están listos para comenzar, presionan el botón "listo". ¡Y así empieza la diversión!</p>

        <p>El objetivo del juego es adivinar una palabra secreta. Para hacerlo, los jugadores se turnan para decir letras del abecedario. Si la letra está en la palabra, se revela en su posición correcta. Si no está, se dibuja una parte del cuerpo de un personaje llamado el ahorcado.</p>

        <p>Ambos jugadores siguen adivinando letras hasta que alguien descubra la palabra o hasta que ambos hayan usado todos sus intentos.Después de cada partida, los resultados se guardan en un contador que lleva la cuenta de cuántas veces cada jugador ha ganado, perdido o empatado.</p >
        
        <p>¡Diviértete jugando al Ahorcado VS y trata de adivinar las palabras antes que tu oponente!</p>
    </Fragment>
)


