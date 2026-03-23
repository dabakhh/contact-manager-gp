let contacts = []; // Tableau pour stocker les contacts
const contactForm = document.getElementById('contactForm');
const contactsList = document.getElementById('contactsList')
const monUL = document.createElement('ul')



function displayContacts(contactArray) {
    contactsList.appendChild(monUL)
    contactArray.forEach(element => { // Display contacts one by one
    

    // Prénom
    let li = document.createElement('li')
    monUL.appendChild(li);
    li.innerHTML= "Prénom: " + element.firstName;
    
    // Nom
    let li1 = document.createElement('li')
    monUL.appendChild(li1);
    li1.innerHTML= "Nom: " + element.lastName; 

    // Téléphone
    let li2 = document.createElement('li')
    monUL.appendChild(li2);
    li2.innerHTML= "Téléphone: " + element.phone;

    // Email
    let li3 = document.createElement('li')
    monUL.appendChild(li3);
    li3.innerHTML= "Email: " + element.email;

    // Catégorie
    let li4 = document.createElement('li')
    monUL.appendChild(li4);
    li4.innerHTML= "Catégorie: " + element.category;

    // Statut
    let li5 = document.createElement('li')
    monUL.appendChild(li5);
    li5.innerHTML= "Statut: " + element.status
    li5.style.borderBottom="2px solid black"

    monUL.style.color="blue"


    });
}

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    
    contactsList.style.border="1px solid"


    // Récupérer les valeurs des champs du formulaire
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = +document.getElementById('phone').value;
    const category = document.getElementById('selectCategory').value;
    const statut = document.getElementById('favorite');
    const verified = statut.checked;
    let status
    if (verified){
        status = "Favoris"
    } else status = "Non favoris"
    
    
    
    // Créer un objet contact
    const contact = {
        firstName,
        lastName,
        email,
        phone,
        category,
        status,
    };
    
    
    // // Ajouter le contact au tableau
    contacts.push(contact);


    // Ajouter les contacts dans le localStorage
    localStorage.setItem("mesContacts", JSON.stringify(contacts));
    
    

    
    // contactsList.appendChild(ul);
    
    // // Réinitialiser le formulaire
    // contactForm.reset();
});

const localdata = JSON.parse(localStorage.getItem('mesContacts'))|| ["pas trouvé"];
    
// Afficher les contacts (tu devras créer cette fonction)
displayContacts(localdata);