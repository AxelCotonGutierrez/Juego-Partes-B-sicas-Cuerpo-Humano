document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable-word');
    const slots = document.querySelectorAll('.word-slot');
    const resultDisplay = document.getElementById('result');
    const checkButton = document.getElementById('check-button');
    const resetButton = document.getElementById('reset-button');
    const wordsArea = document.getElementById('words-area');
    let selectedElement = null;

    // Función para manejar el inicio del arrastre
    function dragStart() {
        selectedElement = this;
        this.classList.add('dragging');
    }

    // Función para manejar el final del arrastre
    function dragEnd() {
        this.classList.remove('dragging');
        selectedElement = null;
    }

    // Añadir eventos para dispositivos con mouse
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
        draggable.addEventListener('dragend', dragEnd);
    });

    // Añadir eventos para dispositivos táctiles
    draggables.forEach(draggable => {
        draggable.addEventListener('touchstart', dragStart);
        draggable.addEventListener('touchend', dragEnd);
    });

    // Manejar la colocación de los elementos arrastrables
    slots.forEach(slot => {
        slot.addEventListener('dragover', e => {
            e.preventDefault();
            if (selectedElement) {
                slot.appendChild(selectedElement);
            }
        });

        slot.addEventListener('touchmove', e => {
            e.preventDefault();
            if (selectedElement) {
                const touchLocation = e.targetTouches[0];
                selectedElement.style.position = 'absolute';
                selectedElement.style.left = touchLocation.pageX + 'px';
                selectedElement.style.top = touchLocation.pageY + 'px';
            }
        });

        slot.addEventListener('touchend', () => {
            if (selectedElement) {
                slot.appendChild(selectedElement);
            }
        });
    });

    // Comprobar respuestas
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

     

    // Reiniciar el juego
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
    });
});
