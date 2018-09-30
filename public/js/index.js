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
    if (className) {
        response.value = className;
        response.setAttribute('name', 'classname')
        form.action = '/class/teach';
        form.submit();
    } 
};

enterClass.addEventListener('click',() => {
    let radios = document.getElementsByName('chooseClass');
    let radvalue = '';

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let radvalue = radios[i].value;
            console.log(radvalue);
            response.value = radvalue;
            break;
        }
    }
    
    console.log(radvalue);
    response.setAttribute('name', 'classname')
    form.action = '/class/learn';
    form.submit();
});

radMsg.onclick = () => {
    let messenger = document.getElementById('messenger');
    messenger.childNodes[0].nodeValue = 'Join Group';
}



messenger.onclick = () => {
    // let radios = document.getElementsByName('chooseGroup');
    // let radvalue = '';

    // for (let i = 0; i < radios.length; i++) {
    //     if (radios[i].checked) {
    //         let radvalue = radios[i].value;
    //         console.log(radvalue);
    //         response.value = radvalue;
    //         response.setAttribute('name', 'groupname')
    //         form.action = '/messenger';
    //         form.submit();
    //         break;
    //     } else {
            let groupName = prompt('Please enter name of the chat group you which to join');
            if (groupName) {
                response.value = groupName;
                response.setAttribute('name', 'groupname')
                form.action = '/messenger';
                form.submit();    
                //break;
            } 
    //     }
    // }

    
};

videoCalls.onclick = () => {
    form.action = '#';
    form.submit();
};

conferenceCalls.onclick = () => {
    form.action = '#';
    form.submit();
};