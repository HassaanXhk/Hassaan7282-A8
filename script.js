
// program practice: add 2 numbers
function p1add() {
    var dom = document
    var num1p1 = dom.getElementById("num1p1")
    var num2p1 = dom.getElementById("num2p1")
    var result1 = dom.getElementById("result1")
    result1.innerHTML = `Output: ${parseInt(num1p1.value) + parseInt(num2p1.value)}`

}
// program # 1, to check max num a,b
function p1max() {
    var dom = document
    var num1p2 = parseInt(dom.getElementById("num1p2").value)
    var num2p2 = parseInt(dom.getElementById("num2p2").value)
    var result2 = dom.getElementById("result2")
    if (num1p2 > num2p2) {
        result2.innerHTML = `Output: ${num1p2} is max number`
    } else {
        result2.innerHTML = `Output: ${num2p2} is max number`
    }
}
// program # 2, to check max num a,b,c
function p3max() {
    var dom = document
    var num1p3 = parseInt(dom.getElementById("num1p3").value)
    var num2p3 = parseInt(dom.getElementById("num2p3").value)
    var num3p3 = parseInt(dom.getElementById("num3p3").value)

    var result3 = dom.getElementById("result3")
    if (num1p3 > num2p3 && num1p3 > num3p3) {
        result3.innerHTML = `Output: ${num1p3} is max number`
    } else if (num2p3 > num1p3 && num2p3 > num3p3) {
        result3.innerHTML = `Output: ${num2p3} is max number`
    }
    else {
        result3.innerHTML = `Output: ${num3p3} is max number`

    }
}
//3. Write a js program to check whether a number is negative, positive or zero.
function p4sign() {
    var dom = document
    var num1p4 = parseInt(dom.getElementById("num1p4").value)
    var result4 = dom.getElementById("result4")
    if (num1p4 > 0) {
        result4.innerHTML = `Output: ${num1p4} is Positive number`
    } else if (num1p4 < 0) {
        result4.innerHTML = `Output: ${num1p4} is negative number`
    }
    else {
        result4.innerHTML = `Output: Number is zero`

    }
}
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
function p5divi() {
    var dom = document
    var num1p5 = parseInt(dom.getElementById("num1p5").value)
    var result5 = dom.getElementById("result5")
    if (num1p5 % 11 == 0 && num1p5 % 5 == 0) {
        result5.innerHTML = `Output: ${num1p5} is divisible by 5 and 11`
    }
    else {
        result5.innerHTML = `Output: ${num1p5} is not divisible of 5 and 11`

    }
}
// 5. Write a js program to check whether a number is even or odd.
function p5divi() {
    var dom = document
    var num1p5 = parseInt(dom.getElementById("num1p5").value)
    var result5 = dom.getElementById("result5")
    if (num1p5 % 11 == 0 && num1p5 % 5 == 0) {
        result5.innerHTML = `Output: ${num1p5} is divisible by 5 and 11`
    }
    else {
        result5.innerHTML = `Output: ${num1p5} is not divisible of 5 and 11`

    }
}

function p6even() {
    var dom = document
    var num1p6 = parseInt(dom.getElementById("num1p6").value)
    var result6 = dom.getElementById("result6")
    if (num1p6 % 2 == 0) {
        result6.innerHTML = `Output: ${num1p6} is Even Number`
    }
    else {
        result6.innerHTML = `Output: ${num1p6} is Odd Number`

    }
}
// 6. Write a js program to check whether a year is leap year or not
function p7leap() {
    var dom = document
    var num1p7 = parseInt(dom.getElementById("num1p7").value)
    var result7 = dom.getElementById("result7")
    if (num1p7 % 4 == 0) {
        result7.innerHTML = `Output: ${num1p7} is Leap Year`
    }
    else {
        result7.innerHTML = `Output: ${num1p7} is not a Leap Year`

    }
}
//7. Write a js program to check whether a character is alphabet or not.
function p8char() {
    var dom = document
    var num1p8 = (dom.getElementById("num1p8").value)
    var result8 = (dom.getElementById("result8"))
    if (num1p8 >= "A" && num1p8 <= "Z" || num1p8 >= "a" && num1p8 <= "z") {
        result8.innerHTML = `Output: ${num1p8} is a Alphabet`
    }
    else {
        result8.innerHTML = `Output: ${num1p8} is not a Alphabet`

    }
}
// <!-- 8. Write a js program to input any alphabet and check whether it is vowel or consonant. -->
// Special treatment required

function p9vowel() {
    var dom = document
    var num1p9 = (dom.getElementById("num1p9").value)
    var result9 = (dom.getElementById("result9"))
    var vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
    // document.write=(vowel[i])
    for (let i = 0; i < vowel.length; i++) {
        if (num1p9 == vowel[i]) {
            result9.innerHTML = `Output: ${num1p9} is a vowel`
            break
        }
        else {
            result9.innerHTML = `Output: ${num1p9} is a Consonant`
        }
    }

}
//  9. Write a js program to input any character and check whether it is alphabet, digit or special character.
function p10char() {
    var dom = document
    var num1p10 = (dom.getElementById("num1p10").value)
    var result10 = (dom.getElementById("result10"))
    if (num1p10 >= "A" && num1p10 <= "Z" || num1p10 >= "a" && num1p10 <= "z") {
        result10.innerHTML = `Output: ${num1p10} is a Alphabet`
    }
    else if (num1p10 >= 0 && num1p10 <= 9) {
        result10.innerHTML = `Output: ${num1p10} is a Number`
    }
    else {
        result10.innerHTML = `Output: ${num1p10} is a Special Chracter`

    }
}
// 10. a character is uppercase or lowercase alphabet
function p11alpha() {
    var dom = document
    var num1p11 = (dom.getElementById("num1p11").value)
    var result11 = (dom.getElementById("result11"))
    if (num1p11 >= "A" && num1p11 <= "Z" || num1p11 >= "a" && num1p11 <= "z") {
        result11.innerHTML = `Output: ${num1p11} is a Alphabet`
        if (num1p11 >= "A" && num1p11 <= "Z") {
            result11.innerHTML = `Output: ${num1p11} is a Uppercase Alphabet`

        }
        else {
            result11.innerHTML = `Output: ${num1p11} is a Lowercase Alphabet`

        }
    }

    else {
        result11.innerHTML = `Output: ${num1p11} is a not a Alphabet`


    }
}

// 11. Write a js program to input week number and print week day.
function p12day() {
    var dom = document
    var num1p12 = (dom.getElementById("num1p12").value)
    var result12 = (dom.getElementById("result12"))
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if (num1p12 >= 1 && num1p12 <= 7) {
        result12.innerHTML = `Output: ${days[num1p12 - 1]}  `
    }
    else {
        result12.innerHTML = `Output: ${num1p12} is not a Valid Week No.`

    }

}
// 11. Write a js program to input month number and print number of days in that month.

function p13month() {
    var dom = document
    var num1p13 = (dom.getElementById("num1p13").value)
    var result13 = (dom.getElementById("result13"))
    var ml = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    // var d31=["January","March","May","July","August","October","December"]
    // var d30=["February","April","June","September","November","October","December"]

    if (num1p13 >= 1 && num1p13 <= 12) {
        if (num1p13 == 1 || num1p13 == 3 || num1p13 == 5 || num1p13 == 7 || num1p13 == 8 || num1p13 == 10 || num1p13 == 12) {
            result13.innerHTML = `Output: ${ml[num1p13]} has 31 Days`


        }
        else if (num1p13 == 2) {
            result13.innerHTML = `Output: ${ml[num1p13]} has 28 Days`

        }
        else {
            result13.innerHTML = `Output: ${ml[num1p13]} has 30 Days`

        }


    }
}
////////////////////////////////////////////////


// 13. Write a js program to count total number of notes in given amount.
function p14note() {
    var dom = document
    var num1p14 = (dom.getElementById("num1p14").value)
    var result14 = (dom.getElementById("result14"))

   
    if (num1p14 >= 5000) {
       var a=num1p14/5000
       var note5=parseInt(a)
       var b=Math.round((a-note5)*5000)
        if (b>=1000) {
           var c = b/1000
           var note1000=parseInt(c)
           var d=(c-note1000)*1000
           console.log(d);  
            if (d>=500) {
                e=d/500
                
            }
        }
        result14.innerHTML = `Output: ${note5} , ${note1000} `
    }
    else {
        result14.innerHTML = `Output: ${num1p14} is not a Valid Week No.`

    }

}