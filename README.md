# _The Wonderful World of Mr. Roboger_

#### By _**Brandon Eads**_

---

## Description

_This application lets a user input a number from 0 to 1,000,000 and let Mr. Destructoid translate it to its own language. Translations replace any digit with '3' with the phrase 'Won't you be my neighbor?
', '2' with 'Boop!' and '1' with 'Beep!'. This rule cascades and will follow a priority of digit containing '3', then '2' and '1'. So while '1' will display 'Beep!', '12' will display 'Boop!'._

## Technologies Used

* _HTML5_
* _CSS_
* _JavaScript_
* _Bootstrap framework for CSS_
* _jQuery library for JavaScript_



## Setup/Installation Requirements

* _Clone or download GitHub repository to machine_
* _If a .zip was downloaded, extract contents into desired location_
* _Navigate to and open "roboger-project" folder_
* _Open index.html_
* _This project is also available for view via gh-pages at https://beads89.github.io/roboger-project/_


## Known Bugs

* _If a high enough number is entered, some output may appear outside the middle container._


## License

MIT

Copyright (c) Brandon Eads

## Contact Information

_Brandon Eads - brandon181989@hotmail.com_


## TDD

Describe: roboTranslate(numInput);

Test: "It should return an array with an index of 0 and counting up to the number that was input."  
Code: roboTranslate(5);  
Expected Output: expect(roboTranslate(5)).toEqual([0, 1, 2, 3, 4, 5])

Test: "It should replace any '3' in the array with 'Won't you be my neighbor?'"  
Code: roboTranslate(5);  
Expected Output: expect(roboTranslate(5)).toEqual([0, 1, 2, "Won't you be my neighbor?", 4, 5])

Test: "It should replace any '3' with 'Won't you be my neighbor?' and any '2' with 'Boop!'"  
Code: roboTranslate(5):  
Expected Output: expect(roboTranslate(5)).toEqual([0, 1, "Boop!", "Won't you be my neighbor?", 4, 5])

Test: "It should replace any '3' with 'Won't you be my neighbor?', any '2' with 'Boop!' and any '1' with 'Beep!'"  
Code: roboTranslate(5):  
Expected Output: expect(roboTranslate(5)).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5])

Test: "It should replace any number containing '3' (ex: 30 or 53) with 'Won't you be my neighbor?', '2' (ex: 22 or 92) with 'Boop!' and '1' (ex: 11 or 81) with 'Beep!', while also following cascading rules of the 'if else' statement. Ex: if a number contains '3' and '2', it will take the rules of '3'. If it contains '2' and '1', it will take the rules of '2'. If it contains '3', '2' and '1', it will take the rules of '3'.  
Code: roboTranslate(35):  
Expected Output: expect(roboTranslate(35)).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"])