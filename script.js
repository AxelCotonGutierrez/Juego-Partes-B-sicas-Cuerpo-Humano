document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable-word');
    const slots = document.querySelectorAll('.word-slot');
    const resultDisplay = document.getElementById('result');
    const checkButton = document.getElementById('check-button'); 
    const resetButton = document.getElementById('reset-button'); 
    const wordsArea = document.getElementById('words-area');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    slots.forEach(slot => {
        slot.addEventListener('dragover', e => {
            e.preventDefault();
            const dragging = document.querySelector('.dragging');
            slot.appendChild(dragging);
        });
    });

    checkButton.addEventListener('click', () => {
        let correctCount = 0;

        // Verificar cada slot
        if (document.getElementById('head-slot').querySelector('[alt="Cabeza"]')) {
            correctCount++;
        }
        if (document.getElementById('cuello-slot').querySelector('[alt="Cuello"]')) {
            correctCount++;
        }
        if (document.getElementById('pecho-slot').querySelector('[alt="Pecho"]')) {
            correctCount++;
        }
        if (document.getElementById('tronco-slot').querySelector('[alt="Tronco"]')) {
            correctCount++;
        }
        if (document.getElementById('codo-slot').querySelector('[alt="Codo"]')) {
            correctCount++;
        }
        if (document.getElementById('brazo-slot').querySelector('[alt="Brazo"]')) {
            correctCount++;
        }
        if (document.getElementById('mano-slot').querySelector('[alt="Mano"]')) {
            correctCount++;
        }
        if (document.getElementById('pierna-slot').querySelector('[alt="Pierna"]')) {
            correctCount++;
        }
        if (document.getElementById('rodilla-slot').querySelector('[alt="Rodilla"]')) {
            correctCount++;
        }
        if (document.getElementById('pie-slot').querySelector('[alt="Pie"]')) {
            correctCount++;
        }

        // Actualizar el mensaje de resultado
        if (correctCount === draggables.length) {
            resultDisplay.textContent = '¡Correcto! Todas las palabras están en el lugar adecuado.';
            resultDisplay.style.color = 'green';
        } else {
            resultDisplay.textContent = 'Algunas palabras están en el lugar incorrecto. Intenta de nuevo.';
            resultDisplay.style.color = 'red';
        }
    });

    resetButton.addEventListener('click', () => {
        // Mover las imágenes arrastrables de vuelta a su área original
        draggables.forEach(draggable => {
            wordsArea.appendChild(draggable);
        });

        // Limpiar el mensaje de resultado
        resultDisplay.textContent = '';

        // Reiniciar los slots
        slots.forEach(slot => {
            if (slot.firstChild) {
                wordsArea.appendChild(slot.firstChild);
            }
        });

        // Opcional: reiniciar cualquier otro estado del juego si es necesario
    });
});
