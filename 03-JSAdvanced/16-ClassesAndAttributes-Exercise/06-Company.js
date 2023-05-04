class Company {
    constructor() {
        this.departments = {}
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw Error("Invalid input!")
        }
        if (!(department in this.departments)) {
            this.departments[department] = {
                "totalSalary": 0,
                "avgSalary": 0,
                "employees": []

            }
        }
        this.departments[department]['employees'].push({name, position, department, salary});
        this.departments[department]['totalSalary'] += salary;
        this.departments[department]['avgSalary'] = this.departments[department]['totalSalary'] / this.departments[department]['employees'].length;
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment(){
        let bestDep = '';
        let bestSal = 0
        for (const key in this.departments) {
            let salary = this.departments[key]['avgSalary'];
            let department = key;
            if (salary > bestSal){
                bestDep = department
                bestSal = salary
            }
        }
        
        let sortedEmployees = this.departments[bestDep]['employees'].sort((a, b) => 
            a.salary === b.salary ? a.name.localeCompare(b.name) : b.salary - a.salary);

        let output = [`Best Department is: ${bestDep}`, `Average salary: ${bestSal.toFixed(2)}`]
        sortedEmployees.forEach(element => {
            output.push(`${element.name} ${element.salary.toFixed(0)} ${element.position}`)
        });
        return output.join("\n")
    }
}


let c = new Company(); 
c.addEmployee("Stanimir", 2000, "engineer", "Construction"); 
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"); 
c.addEmployee("Slavi", 500, "dyer", "Construction"); 
c.addEmployee("Stan", 2000, "architect", "Construction"); 
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"); 
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"); 
c.addEmployee("Gosho", 1350, "HR", "Human resources"); 
console.log(c.bestDepartment());
// console.log(c);