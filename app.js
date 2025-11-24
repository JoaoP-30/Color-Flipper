const hexValues = [
    '0','1','2','3','4','5','6','7','8','9',
    'A','B','C','D','E','F'
];

const newColourBntElement = document.getElementById(
    'new-colour-button'
);

const currentColour = document.getElementById(
    'current-colour'
);

newColourBntElement.addEventListener('click', function(){
    const newColor = '#' + getHexColour();
    
    document.body.style.setProperty('background-color', newColor);

    currentColour.textContent = newColor;
})

function getHexValue(){
    const randomIndex = Math.floor(Math.random() * hexValues.length);
   
    return hexValues[randomIndex];
}

function getHexColour(){
    let colour = '';
    
    for (let i = 0; i < 6; i++){
        colour += getHexValue();
    }

    return colour;
}