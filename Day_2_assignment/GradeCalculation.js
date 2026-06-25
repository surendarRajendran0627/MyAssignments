 function getgrade(score) {
    let grade

switch (true) {
    case (score >=90):
        grade = "A"
        break;
    case (score >=70):
        grade = "B"
        break;    

    case (score >=50):
        grade = "C"
        break;      

    case (score >=40):
        grade = "D"
        break;

    default:
        grade = "F"
        break;
}
    console.log("score:", score, " grade:", grade);
 }
 getgrade(95)
 getgrade(75)
 getgrade(45)
 getgrade(37)