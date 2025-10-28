
document.addEventListener('DOMContentLoaded', function() {

    
    const subscribeCard = document.getElementById('subscribe-card');
    const successCard = document.getElementById('success-card');
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');
    const userEmailSpan = document.getElementById('user-email');
    const dismissButton = document.getElementById('dismiss-button');

    
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

 
    if (form) {
        form.addEventListener('submit', function(event) {
            
            event.preventDefault(); 
            const email = emailInput.value.trim();

            if (isValidEmail(email)) {
                
                if (userEmailSpan) {
                    userEmailSpan.textContent = email;
                }
                
               
                if (subscribeCard) {
                    subscribeCard.style.display = 'none'; 
                }
                if (successCard) {
                    successCard.style.display = 'flex';
                }

           
                if (emailError) {
                    emailError.style.display = 'none';
                }
                if (emailInput) {
                    emailInput.classList.remove('input-error');
                }

            } else {
           
                if (emailError) {
                    emailError.style.display = 'block';
                }
                if (emailInput) {
                    emailInput.classList.add('input-error');
                }
            }
        });
    }

    
    if (dismissButton) {
        dismissButton.addEventListener('click', function() {
            
          
            if (successCard) {
                successCard.style.display = 'none'; 
            }
            if (subscribeCard) {
                subscribeCard.style.display = 'block'; 
            }
            
          
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