// Ми чекаємо, поки ВЕСЬ HTML завантажиться
document.addEventListener('DOMContentLoaded', function() {

    // 1. Знаходимо всі наші елементи
    const subscribeCard = document.getElementById('subscribe-card');
    const successCard = document.getElementById('success-card');
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');
    const userEmailSpan = document.getElementById('user-email');
    const dismissButton = document.getElementById('dismiss-button');

    // 2. Функція для перевірки Email
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // 3. Обробник відправки форми
    if (form) {
        form.addEventListener('submit', function(event) {
            
            event.preventDefault(); // Зупиняємо перезавантаження
            const email = emailInput.value.trim();

            if (isValidEmail(email)) {
                // УСПІХ
                if (userEmailSpan) {
                    userEmailSpan.textContent = email;
                }
                
                // ОСЬ КЛЮЧОВІ РЯДКИ:
                if (subscribeCard) {
                    subscribeCard.style.display = 'none'; // Ховаємо першу картку
                }
                if (successCard) {
                    successCard.style.display = 'flex'; // Показуємо другу картку (як flex, щоб центрувати)
                }

                // Чистимо помилки
                if (emailError) {
                    emailError.style.display = 'none';
                }
                if (emailInput) {
                    emailInput.classList.remove('input-error');
                }

            } else {
                // ПОМИЛКА
                if (emailError) {
                    emailError.style.display = 'block';
                }
                if (emailInput) {
                    emailInput.classList.add('input-error');
                }
            }
        });
    }

    // 4. Обробник для кнопки "Thanks!" (Закриття картки успіху)
    if (dismissButton) {
        dismissButton.addEventListener('click', function() {
            
            // Робимо все навпаки:
            if (successCard) {
                successCard.style.display = 'none'; // Ховаємо картку успіху
            }
            if (subscribeCard) {
                subscribeCard.style.display = 'block'; // Повертаємо картку підписки
            }
            
            // Чистимо поле
            if (emailInput) {
                emailInput.value = ''; 
                emailInput.classList.remove('input-error'); 
            }
            if (emailError) {
                emailError.style.display = 'none'; 
            }
        });
    }

});