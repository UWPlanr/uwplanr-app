import { compareTerms } from "./helpers";

const codeRegex = new RegExp("[A-Z]{2,} [0-9]{3}[A-Z]?");
const gradeRegex = new RegExp("{[0-9]{2,}%}");
const termRegex = new RegExp("\\[(F|W|S)[0-9]{2}\\]");

const codeFullRegex = new RegExp("^[A-Z]{2,} [0-9]{3}[A-Z]?$");

const emptyObject = (object: Record<any, any>): boolean => Object.keys(object).length === 0;
const operatorToFunction = (operator: string) => operator === "&" ? prereqCheckerAND : prereqCheckerOR;

const previousCourses = (profile: Term[], index: number): GradeCourse[] => {
    return profile.slice(0, index).map(term => term.courses).reduce((initial, current) => initial.concat(current), []);
};

const previousTerms = (profile: Term[], index: number): Term[] => {
    return profile.slice(0, index);
};

const prereqCheckerAND = (requirement: Requirement, previousCourses: GradeCourse[]): boolean => {
    const { operands } = requirement;
    let final: boolean = true;
    for (let operand of operands) {
        if (typeof operand === "string") {
            // ABC 123
            if (codeFullRegex.test(operand)) {
                if (previousCourses.map(previousCourse => previousCourse.code).includes(operand)) {
                    previousCourses.splice(previousCourses.findIndex(course => course.code === operand), 1);
                } else {
                    return false;
                };
            // ABC 123 {XY%}
            } else if ((new RegExp("^[A-Z]{2,} [0-9]{3}[A-Z]? {[0-9]{2,}%}$")).test(operand)) {
                // @ts-ignore
                const [code, grade] = [operand.match(codeRegex)[0], parseInt(operand.match(gradeRegex)[0].substring(1, 3))];
                let found = false;
                for (let previousCourse of previousCourses) {
                    if (previousCourse.code === code && parseInt(previousCourse.grade) >= grade) {
                        found = true;
                        break;
                    };
                };
                final = final && found;
            // ABC XXX
            } else if ((new RegExp("^[A-Z]{2,} XXX$")).test(operand)) {
                if (previousCourses.map(course => course.code.split(" ")[0]).includes(operand.split(" ")[0])) {
                    previousCourses.splice(previousCourses.findIndex(course => course.code.split(" ")[0] === operand.split(" ")[0]), 1);
                } else {
                    return false;
                };
            // ABC 1XX
            } else if ((new RegExp("^[A-Z]{2,} [0-9]XX$")).test(operand)) {
                // @ts-ignore
                if (previousCourses.map(course => course.code.match("[A-Z]{2,} [0-9]")[0]).includes(operand.match("[A-Z]{2,} [0-9]")[0])) {
                    // @ts-ignore
                    previousCourses.splice(previousCourses.findIndex(course => course.code.match("[A-Z]{2,} [0-9]")[0].includes(operand.match("[A-Z]{2,} [0-9]")[0])), 1);
                } else {
                    return false;
                };
            // ABC 1XX+
            } else if ((new RegExp("[A-Z]{2,} [0-9]XX\\+")).test(operand)) {
                // @ts-ignore
                const [operandSubjectCode, operandNumber] = [operand.match("[A-Z]{2,}")[0], operand.match("[0-9]")[0]];
                let found = false;
                // @ts-ignore
                for (let previousCourse of previousCourses) {
                    // @ts-ignore
                    const [subjectCode, number] = [previousCourse.code.match("[A-Z]{2,}")[0], previousCourse.code.match("[0-9]")[0]];
                    if (subjectCode === operandSubjectCode && parseInt(number) >= parseInt(operandNumber)) {
                        found = true;
                        break;
                    };
                };
                final = final && found;
            };
        } else {
            final = final && operatorToFunction(operand.operator)(operand, previousCourses);
        };
        if (!final) return false;
    };
    return final;
};

const prereqCheckerOR = (requirement: Requirement, previousCourses: GradeCourse[]): boolean => {
    const { operands } = requirement;
    let final: boolean = false;
    for (let operand of operands) {
        if (typeof operand === "string") {
            // ABC 123
            if (codeFullRegex.test(operand)) {
                if (previousCourses.map(previousCourse => previousCourse.code).includes(operand)) {
                    previousCourses.splice(previousCourses.findIndex(course => course.code === operand), 1);
                    return true;
                };
            // ABC 123 {XY%}
            } else if ((new RegExp("^[A-Z]{2,} [0-9]{3}[A-Z]? {[0-9]{2,}%}$")).test(operand)) {
                // @ts-ignore
                const [code, grade] = [operand.match(codeRegex)[0], parseInt(operand.match(gradeRegex)[0].substring(1, 3))];
                let found = false;
                for (let previousCourse of previousCourses) {
                    if (previousCourse.code === code && parseInt(previousCourse.grade) >= grade) {
                        found = true;
                        break;
                    };
                };
                final = final || found;
            // ABC XXX
            } else if ((new RegExp("^[A-Z]{2,} XXX$")).test(operand)) {
                if (previousCourses.map(course => course.code.split(" ")[0]).includes(operand.split(" ")[0])) {
                    previousCourses.splice(previousCourses.findIndex(course => course.code.split(" ")[0] === operand.split(" ")[0]), 1);
                    return true;
                };
            // ABC 1XX
            } else if ((new RegExp("^[A-Z]{2,} [0-9]XX$")).test(operand)) {
                // @ts-ignore
                if (previousCourses.map(course => course.code.match("[A-Z]{2,} [0-9]")[0]).includes(operand.match("[A-Z]{2,} [0-9]")[0])) {
                    // @ts-ignore
                    previousCourses.splice(previousCourses.findIndex(course => course.code.match("[A-Z]{2,} [0-9]")[0].includes(operand.match("[A-Z]{2,} [0-9]")[0])), 1);
                    return true;
                };
            // ABC 1XX+
            } else if ((new RegExp("[A-Z]{2,} [0-9]XX\\+")).test(operand)) {
                // @ts-ignore
                const [operandSubjectCode, operandNumber] = [operand.match("[A-Z]{2,}")[0], operand.match("[0-9]")[0]];
                let found = false;
                // @ts-ignore
                for (let previousCourse of previousCourses) {
                    // @ts-ignore
                    const [subjectCode, number] = [previousCourse.code.match("[A-Z]{2,}")[0], previousCourse.code.match("[0-9]")[0]];
                    if (subjectCode === operandSubjectCode && parseInt(number) >= parseInt(operandNumber)) {
                        found = true;
                        break;
                    };
                };
                final = final || found;
            };
        } else {
            final = final || operatorToFunction(operand.operator)(operand, previousCourses);
        };
        if (final) return true;
    };
    return final;
};

const prereqChecker = (profile: Term[], course: GradeCourse, index: number): boolean => {
    if (emptyObject(JSON.parse(course.prereqs))) return true;
    const courses = previousCourses(profile, index);
    const prereqs = JSON.parse(course.prereqs) as Requirement;
    return operatorToFunction(prereqs.operator)(prereqs, courses);
};

const antireqChecker = (profile: Term[], course: GradeCourse, index: number): boolean => {
    if (!course.antireqs) return true;
    const courses = previousCourses(profile, index);
    const antireqs = course.antireqs.split(",");
    for (let antireq of antireqs) {
        if (codeFullRegex.test(antireq)) {
            if (courses.map(course => course.code).includes(antireq)) {
                return false;
            } else {
                continue;
            };
        } else if ((new RegExp("[A-Z]{2,} [0-9]{3}[A-Z]? \\[(F|W|S)[0-9]{2}\\]")).test(antireq)) {
            // @ts-ignore
            const [code, term] = [antireq.match(codeRegex)[0], antireq.match(termRegex)[0].substring(1, 4)];
            const sameSeasonYearTerms = previousTerms(profile, index).filter(profileTerm => profileTerm.season[0] == term[0] && profileTerm.year.substring(2, 4) == term.substring(1, 3));
            if (sameSeasonYearTerms.length == 0) {
                continue;
            } else {
                const sameSeasonYearTerm = sameSeasonYearTerms[0];
                if (sameSeasonYearTerm.courses.map(course => course.code).includes(code)) {
                    return false;
                } else {
                    continue;
                };
            };
        } else if ((new RegExp("[A-Z]{2,} [0-9]{3}[A-Z]? \\[(F|W|S)[0-9]{2}-\\]")).test(antireq)) {
            // @ts-ignore
            const [code, term] = [antireq.match(codeRegex)[0], antireq.match("(F|W|S)[0-9]{2}")[0]];
            const previousSeasonYearTerms = previousTerms(profile, index).filter(profileTerm => `${profileTerm.season[0]}${profileTerm.year.substring(2, 4)}` === term ? false : compareTerms(term, `${profileTerm.season[0]}${profileTerm.year.substring(2, 4)}`));
            if (previousSeasonYearTerms.map(profileTerm => profileTerm.courses).flat().map(course => course.code).includes(code)) {
                return false;
            } else {
                continue;
            };
        } else if ((new RegExp("[A-Z]{2,} [0-9]{3}[A-Z]? \\[(F|W|S)[0-9]{2}\\+\\]")).test(antireq)) {
            // @ts-ignore
            const [code, term] = [antireq.match(codeRegex)[0], antireq.match("(F|W|S)[0-9]{2}")[0]];
            const afterSeasonYearTerms = previousTerms(profile, index).filter(profileTerm => `${profileTerm.season[0]}${profileTerm.year.substring(2, 4)}` === term ? false : compareTerms(`${profileTerm.season[0]}${profileTerm.year.substring(2, 4)}`, term));
            if (afterSeasonYearTerms.map(profileTerm => profileTerm.courses).flat().map(course => course.code).includes(code)) {
                return false;
            } else {
                continue;
            };
        };
    };
    return true;
};

const minLevelChecker = (profile: Term[], course: GradeCourse, index: number): boolean => {
    if (!course.minLevel) return true;
    const minLevelIndex = profile.findIndex(term => term.code === course.minLevel);
    if (minLevelIndex == -1) return false;
    return index >= minLevelIndex;
};

const termsOfferedChecker = (profile: Term[], course: GradeCourse, index: number) => {
    if (!course.termsOffered || course.termsOffered.length === 0) return true;
    return course.termsOffered.includes(profile[index].season[0]);
};

export const requirementsChecker = (profile: Term[], course: GradeCourse, index: number): string => {
    let classes = "btn btn-xs btn-circle ";
    if (!minLevelChecker(profile, course, index)) {
        classes += "bg-indigo-500 hover:bg-indigo-500";
    } else if (!termsOfferedChecker(profile, course, index)) {
        classes += "bg-cyan-500 hover:bg-cyan-500";
    } else if (!antireqChecker(profile, course, index)) {
        classes += "bg-orange-500 hover:bg-orange-500"
    } else if (!prereqChecker(profile, course, index)) {
        classes += "bg-red-500 hover:bg-red-500";
    } else {
        classes += "bg-green-500 hover:bg-green-500";
    };
    return classes;
};