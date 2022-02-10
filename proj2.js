class Plan{
    constructor(name, catalogYear, major, studentName, currTerm, currYear){
        //this constructor might need to be changed
        this.name = name;
        this.catalogYear = catalogYear;
        this.major = major;
        this.studentName = studentName;
        this.currTerm = currTerm;
        this.currYear = currYear;
        this.courses = {};
        this.years = {};
    }

    addCourse(courseId, name, term, year){
        this.courses.push(new Course(courseId, name, term, year));
    }

    sortCourses(){
        //code for sorting courses by year/term
    }

    genHtml(){
        //parse years into string that can be put into the html doc
        
    }
}

class Course{
    constructor(courseId, name, term, year) {
        this.courseId = courseId;
        this.name = name;
        this.term = term;
        this.year = year;
    }

}

class Year{
    constructor(year){
        this.year = year;
        this.fall = {};
        this.spring = {};
        this.summer = {};
    }
}

function createPlan(){

    let thePlan = new Plan(demo, 2020, "Comp. Sci.", "Patrick", "spring", 2022);

    thePlan.addCourse("CS-1000", "Computer stuff", "fall", 2020);
    thePlan.addCourse("CS-1000", "Computer stuff", "spring", 2021);
    thePlan.addCourse("CS-1000", "Computer stuff", "fall", 2021);
    thePlan.addCourse("CS-1000", "Computer stuff", "spring", 2022);

    thePlan.addCourse("CS-1000", "Computer stuff", "fall", 2022);
    thePlan.addCourse("CS-1000", "Computer stuff", "spring", 2023);
    thePlan.addCourse("CS-1000", "Computer stuff", "fall", 2023);
    thePlan.addCourse("CS-1000", "Computer stuff", "spring", 2024);

}