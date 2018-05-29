const elizabethSanger = {
    congressionalDistrict: "2nd",
    statements:
        {
            taxes: "My view on taxes",
            jobs: "My view on jobs",
            infrastructure: "My view on infrastructure" ,
            healthCare: "My view on healthcare",
            crimeAndEnforcement: "My view on crime and enforcment"    
        },
    donationFormURL: "https://www.votetulsi.com/",
    eventsCalendar: "Lorem ipsum dolor sit amet.",
    volunteerInfo: 
        {
            name: "Marcus Mariota",
            address: "123 Hawaii St",
            email: "marcusmariota@gmail.com",
            phoneNumber: 6151234567,
            availability: "All day err day",
            activities: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
    biography: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imageGallery:
        {
            headShot: "images/tulsigabbard.jpg",
            family: "images/family.jpg",
            constituents: "images/constituents.jpg"
        },
    missionStatement: "To inspire lifelong learning, advance knowledge, and strengthen our communities." ,
    votingRegistrationURL: "https://en.wikipedia.org/wiki/Tulsi_Gabbard"
}

// Challenge: Functions

const changeTwo = (prop, value) => {
    return elizabethSanger[prop] = value;
}

const changeThree = (mainObject, prop, value) => {
    return elizabethSanger[mainObject][prop] = value;
}

// Advanced Challenge

const parentDiv = document.querySelector("#main-div");

let article = document.createElement('article');
article.setAttribute("id", "2nd");

const addText = () => {
    for (let i in elizabethSanger.statements) {
        let appendText = document.createElement('h4');
        appendText.textContent = elizabethSanger.statements[i];
        article.appendChild(appendText);
    }
    
}

parentDiv.appendChild(article);
addText();


