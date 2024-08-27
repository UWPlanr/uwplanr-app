type OperatorFunctionType = (values: boolean[]) => boolean;

const codeRegex = new RegExp("[A-Z]{2,} [0-9]{3}[A-Z]?");
const gradeRegex = new RegExp("{[0-9]{2,}%}");
const codeFullRegex = new RegExp("^[A-Z]{2,} [0-9]{3}[A-Z]?$");
const codeGradeFullRegex = new RegExp("^[A-Z]{2,} [0-9]{3}[A-Z]? {[0-9]{2,}%}$");

const previousCourses = (profile: Term[], index: number): GradeCourse[] => {
    return profile.slice(0, index).map(term => term.courses).reduce((initial, current) => initial.concat(current), []);
};

const emptyObject = (object: Record<any, any>): boolean => Object.keys(object).length === 0;
const OR = (values: boolean[]): boolean => values.some(value => value === true);
const AND = (values: boolean[]): boolean => values.every(value => value === true);
const operatorToFunction = (operator: string): OperatorFunctionType => operator === "&" ? AND : OR;

const prereqChecker = (requirement: Requirement, previousCourses: GradeCourse[], operatorFunction: OperatorFunctionType): boolean => {
    const { operands } = requirement;
    const booleanValues = [];
    for (let operand of operands) {
        if (typeof operand === "string") {
            if (codeFullRegex.test(operand)) {
                booleanValues.push((previousCourses.map(previousCourse => previousCourse.code).includes(operand)));
            } else if (codeGradeFullRegex.test(operand)) {
                // @ts-ignore
                const [code, grade] = [operand.match(codeRegex)[0], parseInt(operand.match(gradeRegex)[0].substring(1, 3))];
                let found = false;
                for (let previousCourse of previousCourses) {
                    if (previousCourse.code === code && parseInt(previousCourse.grade) >= grade) {
                        found = true;
                        break;
                    };
                };
                booleanValues.push(found);
            };
        } else {
            booleanValues.push(prereqChecker(operand, previousCourses, operatorToFunction(operand.operator)));
        };
    };
    return operatorFunction(booleanValues);
};

export const prereqCheckerWrapper = (profile: Term[], course: GradeCourse, index: number): boolean => {
    if (emptyObject(JSON.parse(course.prereqs))) return true;
    const courses = previousCourses(profile, index);
    const prereqs = JSON.parse(course.prereqs) as Requirement;
    return prereqChecker(prereqs, courses, operatorToFunction(prereqs.operator))
};