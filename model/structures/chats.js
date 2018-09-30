const fs = require('fs');

class Chats {
    constructor (title, owner) {
        this.title = title,
        this.owner = owner
    }

    get save() {
        return this.saveRoom();
    }

    get all() {
        return this.getAllRoom();
    }

    get delete() {
        return this.deleteRoom();
    }

    saveRoom () {
        let group = {
            owner: this.owner
        };

        fs.readFile('model/db/chats.json', 'utf-8', (err, data)=> {
            if (err) {
                console.log(err);
                throw err;
            }
            let arrayOfObjects = JSON.parse(data);

            arrayOfObjects[this.title] = group;
            fs.writeFile('model/db/chats.json', JSON.stringify(arrayOfObjects, null, 2), 'utf-8', (err) => {
                if(err) {
                    console.log(err);
                    throw err;
                } else {
                    console.log('saved');
                }
            })
        })
    }

    getAllRoom () {
        let arrayOfObjects = {};        
        arrayOfObjects = fs.readFileSync('model/db/chats.json', 'utf-8');
        arrayOfObjects = JSON.parse(arrayOfObjects);
        return arrayOfObjects;
    }

    deleteRoom (key) {
        let arrayOfObjects = {};        
        arrayOfObjects = fs.readFileSync('model/db/chats.json', 'utf-8');
        arrayOfObjects = JSON.parse(arrayOfObjects);
        delete arrayOfObjects[key];
    }
}

module.exports = Chats;