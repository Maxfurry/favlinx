let newClass = document.getElementById('newClass');
let enterClass = document.getElementById('enterClass');
let form = document.getElementById('form');
let messenger = document.getElementById('messenger');
let videoCalls = document.getElementById('videoCalls');
let conferenceCalls = document.getElementById('conferenceCalls');
//let error = document.getElementById('error');

let response = document.getElementById('response');

newClass.onclick = () => {
    let className = prompt('Please enter name of the class to be created');
    if (className == null || className == '') {

    } else {
        response.value = className;
        response.setAttribute('name', 'classname')
        form.action = '/class/teach';
        form.submit();    
    }
};

enterClass.addEventListener('click',() => {
    let className = prompt('Please enter name of the class you which to join');
    if (className == null || className == '') {

    } else {
        response.value = className;
        response.setAttribute('name', 'classname')
        form.action = '/class/learn';
        form.submit();    
    }
});

messenger.onclick = () => {
    let groupName = prompt('Please enter name of the chat group you which to join');
    if (groupName == null || groupName == '') {

    } else {
        response.value = groupName;
        response.setAttribute('name', 'groupname')
        form.action = '/messenger';
        form.submit();    
    }
};

videoCalls.onclick = () => {
    form.action = '#';
    form.submit();
};

conferenceCalls.onclick = () => {
    form.action = '#';
    form.submit();
};