// script.js

document.addEventListener('DOMContentLoaded', () => {
    const flashcardContainer = document.getElementById('flashcard-container');

    // Dados de exemplo para os flashcards
    const flashcardsData = [
        {
            question: "O que é Python?",
            category: "Programação",
            answer: "Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, com tipagem dinâmica e forte."
        },
        {
            question: "Qual a capital da França?",
            category: "Geografia",
            answer: "A capital da França é Paris."
        },
        {
            question: "Quem escreveu 'Dom Quixote'?",
            category: "Literatura",
            answer: "Miguel de Cervantes."
        },
        {
            question: "Qual o maior oceano do mundo?",
            category: "Geografia",
            answer: "O Oceano Pacífico."
        }
    ];

    function createFlashcard(data) {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');

        const flashcardInner = document.createElement('div');
        flashcardInner.classList.add('flashcard-inner');

        const flashcardFront = document.createElement('div');
        flashcardFront.classList.add('flashcard-front');
        const frontCategory = document.createElement('div');
        frontCategory.classList.add('flashcard-category');
        frontCategory.textContent = data.category;
        const frontQuestion = document.createElement('div');
        frontQuestion.classList.add('flashcard-question');
        frontQuestion.textContent = data.question;
        flashcardFront.appendChild(frontCategory);
        flashcardFront.appendChild(frontQuestion);

        const flashcardBack = document.createElement('div');
        flashcardBack.classList.add('flashcard-back');
        const backAnswer = document.createElement('div');
        backAnswer.classList.add('flashcard-answer');
        backAnswer.textContent = data.answer;
        flashcardBack.appendChild(backAnswer);

        flashcardInner.appendChild(flashcardFront);
        flashcardInner.appendChild(flashcardBack);
        flashcard.appendChild(flashcardInner);

        // Adiciona o evento de clique para virar o flashcard
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });

        return flashcard;
    }

    // Adiciona os flashcards ao container
    flashcardsData.forEach(data => {
        flashcardContainer.appendChild(createFlashcard(data));
    });

    // Funcionalidade de Compartilhamento (futura implementação)
    // Para o compartilhamento, podemos pensar em:
    // 1. Gerar um link único para um flashcard específico.
    // 2. Permitir que o usuário copie a pergunta e resposta para a área de transferência.
    // 3. Integração com APIs de compartilhamento de redes sociais (mais complexo).

    // Por enquanto, vamos adicionar um botão de exemplo em cada flashcard para pensar na lógica:
    // Você pode adicionar um botão "Compartilhar" dentro de cada flashcard (ou em uma nova seção)
    // e implementar a lógica para copiar o texto ou gerar um link.

    // Exemplo de como adicionar um botão de compartilhamento (apenas para demonstração)
    /*
    flashcardContainer.querySelectorAll('.flashcard').forEach(card => {
        const shareButton = document.createElement('button');
        shareButton.textContent = 'Compartilhar';
        shareButton.style.marginTop = '10px'; // Apenas para posicionamento
        card.querySelector('.flashcard-back').appendChild(shareButton);

        shareButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que o clique no botão vire o flashcard
            const question = card.querySelector('.flashcard-question').textContent;
            const answer = card.querySelector('.flashcard-answer').textContent;
            const textToShare = `Flashcard: ${question}\nResposta: ${answer}`;

            if (navigator.share) {
                navigator.share({
                    title: 'Flashcard Divertido',
                    text: textToShare,
                    url: window.location.href // Ou um URL específico do flashcard
                })
                .then(() => console.log('Conteúdo compartilhado com sucesso!'))
                .catch((error) => console.error('Erro ao compartilhar:', error));
            } else {
                // Fallback para navegadores que não suportam a API Web Share
                navigator.clipboard.writeText(textToShare)
                    .then(() => alert('Pergunta e resposta copiadas para a área de transferência!'))
                    .catch((err) => console.error('Erro ao copiar:', err));
            }
        });
    });
    */
});