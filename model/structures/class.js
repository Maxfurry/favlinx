const fs = require('fs');

class Course {
    constructor (title, owner) {
        this.title = title,
        this.owner = owner
    }

    get save() {
        return this.saveCourse();
    }

    get all() {
        return this.getAllCourse();
    }

    get delete() {
        return this.deleteCourse();
    }

    saveCourse () {
        let course = {
            owner: this.owner
        };

        fs.readFile('model/db/class.json', 'utf-8', (err, data)=> {
            if (err) {
                console.log(err);
                throw err;
            }
            let arrayOfObjects = JSON.parse(data);
            //arrayOfObjects.courses.push(course);

            arrayOfObjects[this.title] = course;
            fs.writeFile('model/db/class.json', JSON.stringify(arrayOfObjects, null, 2), 'utf-8', (err) => {
                if(err) {
                    console.log(err);
                    throw err;
                } else {
                    console.log('saved');
                }
            })
        })
    }

    getAllCourse () {
        let arrayOfObjects = {};        
        arrayOfObjects = fs.readFileSync('model/db/class.json', 'utf-8');
        arrayOfObjects = JSON.parse(arrayOfObjects);
        return arrayOfObjects;
    }

    deleteCourse (key) {
        let arrayOfObjects = {};        
        arrayOfObjects = fs.readFileSync('model/db/class.json', 'utf-8');
        arrayOfObjects = JSON.parse(arrayOfObjects);
        delete arrayOfObjects[key];
    }
}

module.exports = Course;