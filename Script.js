import User from './Class/User.js';
(
    () => {
        let user = new User();
        document.querySelector('#divContainer').appendChild(formUser(user));
        reloadElement(user);
    }
)();
function reloadElement(user) {
    // document.querySelector('#divContainer div').innerHTML = '';
    let card = document.querySelector('#divContainer div');
    card.removeChild(card.firstChild);
    card.appendChild(user.exitElement());
}

function formUser(user) {
    let form = document.createElement('form');
    console.log(user.setFullName)
    let listItems = [
        { label: "Nome completo", type: 'text', key: 'setFullName' },
        { label: "Sexo", type: 'text', key: 'setSex' },
        { label: "Idade", type: 'number', key: 'setAge' }
    ];
    listItems.forEach(item => {
        let label = document.createElement('label');
        label.innerText = item.label;
        form.appendChild(label);

        let input = document.createElement('input');
        input.type = item.type;
        input.addEventListener('keyup', (event) => {
            console.log(event.target.value)
            user[item.key](event.target.value);
            reloadElement(user);
        });
        form.appendChild(input);
    });

    return form
}