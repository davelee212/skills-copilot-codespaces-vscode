function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 1000,
        bonus: 200,
        getSalary: function () {
            return this.salary + this.bonus;
        }
    };

    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.salary);
    console.log(member.bonus);
    console.log(member.getSalary());
}