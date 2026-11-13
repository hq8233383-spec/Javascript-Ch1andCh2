    
       // 1. Declare 3 variables in one statement
       let name, age, city;

        // 2. Five legal variable names
        let studentName;
        let marks;
        let _total;
        let $price;
        let student1;

        // 3. Five illegal variable names
        // let 1student;
        // let student-name;
        // let let;
        // let first name;
        // let @marks;

        document.write("<h3>Legal Variable Names:</h3>");
        document.write("studentName, marks, _total, $price, student1");

        document.write("<h3>Illegal Variable Names:</h3>");
        document.write("1student, student-name, let, first name, @marks");

        document.write("<h3>Rules for naming JS variables</h3>");

        document.write("Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable.<br><br>");

        document.write("Variables must begin with a letter, $ or _. For example $name, _name or name.<br><br>");

        document.write("Variable names are case sensitive.<br><br>");

        document.write("Variable names should not be JS keywords.");