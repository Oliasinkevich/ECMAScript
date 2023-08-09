// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const url = 'https://jsonplaceholder.typicode.com/users';

const body = document.querySelector('body');

const getUsers = async (url) => {
    const response = await fetch (url);
    const json = await response.json();
    return json;
}

try {
    const data = await getUsers (url);
    console.log(data);
    data.forEach(user => {
        body.insertAdjacentHTML('beforeend', `
        <ul class='list'>
            <li class='list__user' id=${user.id}>Name: ${user.name}</li>
            <li class='list__user'}>Email: ${user.email}</li>
            <li class='list__user'}>Address: city ${user.address.city}, street ${user.address.street}, suite ${user.address.suite}, zipcode ${user.address.zipcode}', geo lat ${user.address.geo.lat} lng ${user.address.geo.lng}</li>
            <li class='list__user'}>Phone: ${user.phone}</li>
            <li class='list__user'}>Website: ${user.website}</li>
            <li class='list__user'}>Company: name ${user.company.name}, catch phrase ${user.company.catchPhrase}, bs ${user.company.bs}</li>
            <button class='list__btn'>Delete</button>
        </ul>
        `)
        localStorage.setItem(user.id,JSON.stringify(user));
    });

} catch (error) {
    console.log('Ошибка:', error);
}

document.querySelectorAll('.list__btn').forEach(item => {
    item.addEventListener('click', el => {
      let element = el.target;
        do
          element = element.parentElement;
        while (element.className !== 'list');
        const idEl = element.id;
        element.remove();
        localStorage.removeItem(idEl);
    });
  });

