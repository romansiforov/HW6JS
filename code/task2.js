document.write(`
2. Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.<hr>`);



function MyString(someString) {
    this.someString = someString;

    this.reverse = function () {
        let str = "";

        for (let i = this.someString.length; i >= 0; i--) {
            str = str.concat(this.someString.charAt(i));
        }
        return str;
    }

    this.ucWord = function () {
        let str = "";

        for (let i = 0; i < this.someString.length; i++) {
            if (i == 0) {
                str = str.concat(this.someString.charAt(i).toUpperCase());
                continue;
            }
            str = str.concat(this.someString.charAt(i));
        }
        return str;
    }



    this.ucWords = function () {
        let str = "";
        let flag = false;

        for (let i = 0; i < this.someString.length; i++) {
            if (i == 0) {
                str = str.concat(this.someString.charAt(i).toUpperCase());
                continue;
            }
            if (flag && this.someString.charAt(i) != " ") {
                str = str.concat(this.someString.charAt(i).toUpperCase());
                flag = false;
                continue;
            }
            if (this.someString.charAt(i) == " "){
                flag = true; 
            }
            str = str.concat(this.someString.charAt(i));
        }
        return str;
    }
}

const testStr = new MyString("Roman Siforov");

document.write(`The string - <strong>${testStr.someString}</strong> becomes - <strong>${testStr.reverse()}</strong><hr>`);

const testStr2 = new MyString("super");

document.write(`The word - <strong>${testStr2.someString}</strong> becomes - <strong>${testStr2.ucWord()}</strong><hr>`);

const testStr3 = new MyString("some test string which is going to be updated");

document.write(`So the give text was <strong>${testStr3.someString}</strong> and it becomes <br> <strong>${testStr3.ucWords()}</strong><hr>`);