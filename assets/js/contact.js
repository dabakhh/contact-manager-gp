let contacts = []; // Tableau pour stocker les contacts
const contactForm = document.getElementById('contactForm');
const contactsList = document.getElementById('contactsList')
const monUL = document.createElement('ul')
// function displayContacts(contactArray) {

//     contactArray.forEach(element => { // Display contacts one by one
    
//     let li = document.createElement('li')
    
//     li= element;
//     monUL.appendChild(li);

//     });
// }

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    
    // Récupérer les valeurs des champs du formulaire
    // const firstName = document.getElementById('firstName').value;
    // const lastName = document.getElementById('lastName').value;
    // const email = document.getElementById('email').value;
    // const phone = +document.getElementById('phone').value;
    // const selectElement = document.getElementById('selectCategory').value
    const statut = document.getElementById('favorite');
    const verified = statut.checked;
    
    
    
    // Créer un objet contact
    const contact = {
        // firstName,
        // lastName,
        // email,
        // phone,
        // selectElement,
        verified,
    };
    
    
    // // Ajouter le contact au tableau
    contacts.push(contact);
    console.log(contacts)


    // Afficher les contacts (tu devras créer cette fonction)
    // displayContacts(contacts);
    // contactsList.appendChild(ul);
    
    // // Réinitialiser le formulaire
    // contactForm.reset();
});
