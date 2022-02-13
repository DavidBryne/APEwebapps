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
        //Checking each course for the year
        for(const crs of this.courses){
            //Seeing if the year already exists in year array
            let NewYr = true;
            for(const yr of this.years){
                if((crs.term == "fall" && crs.year == yr.year) || (crs.term != "fall" && crs.year-1 == yr.year)){
                    NewYr = false;
                }
            }
            //Creating new year object if doesn't exist
            if(NewYr){
                this.years.push(new Year(crs.year));
            }
        }
        //Adding courses into proper semester and year
        for(const yr of this.years){
            //Scanning through each course
            for(const crs of this.courses){
                //Placing the course that matches the year
                if((crs.term == "fall" && crs.year == yr.year) || (crs.term != "fall" && crs.year-1 == yr.year)){
                    //Finding the correct semester
                    if(crs.term == "fall"){
                        yr.fall.push(crs);
                    }
                    if(crs.term == "spring"){
                        yr.spring.push(crs);
                    }
                    if(crs.term == "summer"){
                        yr.summer.push(crs);
                    }
                }
            }
        }
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