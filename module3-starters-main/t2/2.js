let listElement = document.getElementById('target');

let firstItem = document.createElement('li');
firstItem.textContent = 'First Item';
listElement.appendChild(firstItem);

let secondItem = document.createElement('li');
secondItem.textContent = 'Second Item';
secondItem.classList.add('my-item');
listElement.appendChild(secondItem);

let thirdItem = document.createElement('li');
thirdItem.textContent = 'Third Item';
listElement.appendChild(thirdItem);