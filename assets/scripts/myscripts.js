const places = [
    {name: 'Western Province'},
    {name: 'Central Province'},
    {name: 'Southern Province'},
    {name: 'Uva Province'},
    {name: 'Sabramugauwa Province'},
    {name: 'North Western Province'},
    {name: 'North Central Province'},
    {name: 'Nortern Province'},
    {name: 'Eastern Province'},
    {name: 'Ampara District'},
    {name: 'Badulla District'},
    {name: 'Anuradhapura District'},
    {name: 'Batticalo District'},
    {name: 'Colombo District'},
    {name: 'Galle District'},
    {name: 'Gampaha District'},
    {name: 'Hambantota District'},
    {name: 'Jaffna District'},
    {name: 'Kalutara District'},
    {name: 'Kandy District'},
    {name: 'Kegalle District'},
    {name: 'Kilinochchi District'},
    {name: 'Kurunegala District'},
    {name: 'Mannar District'},
    {name: 'Matale District'},
    {name: 'Matara District'},
    {name: 'Monaragala District'},
    {name: 'Mullaitivu District'},
    {name: 'Nuwara Eliya District'},
    {name: 'Polonnaruwa District'},
    {name: 'Puttalam District'},
    {name: 'Ratnapura District'},
    {name: 'Trincomalee District'},
    {name: 'Vavuniya District'}
];

const list = document.getElementById('list');

function setList(group){
    clearList();
    for (const places of group){
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(places.name);
        item.appendChild(text);
        item.appendChild(item);
    }
    if(group.length === 0){
       setNoResults();
    }
}
function clearList(){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}
function setNoResults(){
    const item = document.createElement('li');
    item.classList.add('txt2-content');
    const text = document.createTextNode('No results found');
    item.appendChild(text);
    item.appendChild(item);
}

function getRelevancy(value, searchTerm){
    if (value === searchTerm){
        return 2;
    } else if(value.startsWith(searchTerm)){
        return 1;
    } else if(value.includes(searchTerm)){
        return 0;
    } else {
        return -1;
    }
}

const searchInput = Document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase();
        setList(places.filter(person => {
            return places.name.includes(value);
        }).sort((personA, personB) =>{
            return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
        }));
    } else{
        clearList();
    }
});