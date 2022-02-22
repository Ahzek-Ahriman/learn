function FirstApp(name, age){
    alert(`Hello m y name is ${name} and its my first app`);
    function SkillApp(){
        let skills = ['html', 'css', 'js'];
        for (let i = 0; i < skills.length; i++){
           alert(`There are my skills in programming ${skills[i]}`);
        }
    }
    SkillApp();
    function checkAge(age){
        if (age > 18){
            alert ("Nice to meet u, buddy");
        } else {
            alert ("This door are closed for u");
        }
    }
    checkAge(22);
}
FirstApp("Ivan",22);
