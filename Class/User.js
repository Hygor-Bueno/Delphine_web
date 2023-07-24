export default class User{
    #fullName;
    #sex;
    #age;

    constructor(fullname,sex,age){
        this.#fullName = fullname || '';
        this.#age=age || '';
        this.#sex=sex || '';
    }

    getFullName(){
        return this.#fullName;
    }
    setFullName(fullname){
        this.#fullName = fullname;
    }

    getSex(){
        return this.#sex;
    }
    setSex(sex){
        this.#sex = sex;
    }

    getAge(){
        return this.#age;
    }
    setAge(age){
        this.#age = age;
    }

    exitElement(){
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = `${this.#fullName} - ${this.#age} anos. Sexo:${this.#sex}`
        div.appendChild(p);

        return div;
    }
}