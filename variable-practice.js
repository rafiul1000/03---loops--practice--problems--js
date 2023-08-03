// ===============
// VARIABLE
// ===============

1. What is javaScript ?

    JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

2. How does JS works ?

    JavaScript is a client-side scripting language and one of the most efficient, commonly used scripting languages. The term .client-side scripting language means that it runs at the client-side( or on the client machine) inside the web-browsers, but one important thing to remember is that clients web-browser also needs to support the JavaScript or it must be JavaScript enabled. Nowadays, most of the modern web browsers support JavaScript and have their JavaScript engines. For example, Google Chrome has its own JavaScript engine called V8.

3. What is variable ?

    A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data. 


4. Declare a Variable

    var x = 10;


5. Types of a variable? How can you find out type of a variable?


    JavaScript allows you to work with two data types −
    1. primitive Data Types & 
    2. non primitive Data Types.
    


6. primitive Data Types & non primitive Data Types.

    1. primitive Data Types

        In JavaScript, There are 7 primitive data types:

        1. string
        2. number
        3. bigint
        4. boolean
        5. undefined
        6. symbol
        7. null
    2. Non primitive Data Types:

        1. Object	represents instance through which we can access members
        2. Array	represents group of similar values
        3. RegExp	represents regular expression

    
7. naming convention javascript variables:
    
    While naming your variables in JavaScript, keep some rules in mind. The following are the variable naming conventions in JavaScript −

    You should not use any of the JavaScript reserved keywords as a variable name. These keywords are mentioned in the next section. For example, break or boolean variable names are not valid.
    JavaScript variable names should not start with a numeral (0-9). They must begin with a letter or an underscore character. For example, 123test is an invalid variable name but _123test is a valid one.
    JavaScript variable names are case-sensitive. For example, Name and name are two different variables.



8. Math operation + -
    var onionPrice = 20 ;
    var eggPrice = 10 ;

    var totalPrice = onionPrice + eggPrice ;

    // console.log(totalPrice) ;

    var priceDifference = onionPrice - eggPrice ;

     // console.log(priceDifference) ;

8. Math operation * /


    var orangePrice = 20 ;
    var quantity = 7 ;

    var totalCost = orangePrice * quantity ;

    // console.log(totalCost) ;

    
    var money = 500 ;
    var player = 10 ;

    var eachPlayer = money / player ;


    // console.log(eachPlayer) ;



8.  Math operation %


    var mangoes = 19;
    var person = 4;

    var remainder = mangoes % person;

    // console.log(remainder);



9. Short hand  +=, -=, *=, /=

    Short hand  +=

    var pen = 20 ;
    pen += 10 ;
    // console.log(pen) ;


    Short hand  -=

    var pen = 20 ;
    pen -= 20 ;
    // console.log(pen) ;


    var pen = 20 ;
    pen *= 10
    // console.log(pen) ;

    var pen = 20 ;
    pen /= 10 ;
    // console.log(pen) ;


    var hate = 99;
    hate++;
    // console.log(hate);
    
    var hate = 99;
    hate--;
    // console.log(hate);
