function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 1000,
        bonus: 100,
        getSalary: function () {
            return this.salary + this.bonus;
        },
        setSalary: function (value) {
            this.salary = value;
        },
        getSkills: function () {
            return this.skills.join(', ');
        },
        setSkills: function (value) {
            this.skills = value.split(', ');
        }
    };
    console.log(member.getSalary());
    member.setSalary(2000);
    console.log(member.getSalary());
    console.log(member.getSkills());
    member.setSkills('js, html, css, php');
    console.log(member.getSkills());
}