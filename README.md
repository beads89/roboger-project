# _The Wonderful World of Mr. Roboger_

#### By _**Brandon Eads**_

---

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Technologies Used

* _HTML5_
* _CSS_
* _JavaScript_
* _Bootstrap library for CSS_
* _jQuery library for JavaScript_



## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? Does it require building packages? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

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
Expected Output: expect(roboTranslate(35)).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"])