export default class GradeSchool {

    roster: Map<string, Array<string>>;
    
    constructor() {
        this.roster = new Map();        
    }

    addStudent(name: string, grade: number) {
     let studentsWithGrade = this.roster.get(`${grade}`);
     if(studentsWithGrade) {
         studentsWithGrade.push(name)
         studentsWithGrade.sort();
     } else {
         studentsWithGrade = new Array(name);
     }
     this.roster.set(`${grade}`, studentsWithGrade);
    }

    studentRoster(): Map<string, Array<string>> {
        let mapCopy = new Map<string, Array<string>>();
        for(let [grade, students] of this.roster.entries()) {
            mapCopy.set(grade, [...students]);
        }       
        return mapCopy;
    }

    studentsInGrade(grade: number): string[] {
        let result = this.roster.get(`${grade}`);
        return result != undefined ? [...result] : [];        
    }
}