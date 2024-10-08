// Returns true if term1 comes after term2 and false otherwise.
// Assumes term1 and term2 are in the following format: (F|W|S)[0-9]{2}
export const compareTerms = (term1: string, term2: string): boolean => {
    const [term1Season, term2Season] = [term1[0], term2[0]];
    const [term1Year, term2Year] = [term1.substring(1, 3), term2.substring(1, 3)];
    if (term1Year > term2Year) {
        return true;
    } else if (term1Year < term2Year) {
        return false;
    } else {
        const seasons = ["Winter", "Spring", "Fall"];
        return seasons.findIndex(season => season[0] == term1Season) > seasons.findIndex(season => season[0] == term2Season);
    };
};

// Assumes the array is sorted in terms of the index.
const nextIndex = (terms: Term[]): number => {
    return terms.length;
};

// Assumes the array is sorted in terms of the index.
const nextCode = (terms: Term[]): string => {
    if (terms.length === 0) return "1A";
    const latestTerm = terms[terms.length - 1];
    if ((new RegExp("[0-9](A|B)")).test(latestTerm.code)) {
        return latestTerm.code[1] === "A" ? `${latestTerm.code[0]}B` : `${parseInt(latestTerm.code[0]) + 1}A`;
    } else {
        return `COOP${parseInt(latestTerm.code[4]) + 1}`;
    };
};

// Assumes the array is sorted in terms of the index.
export const nextCodes = (terms: Term[]): { study: string, coop: string } => {
    const returnObj = { study: "", coop: "" };
    for (let i = terms.length - 1; i >= 0; i--) {
        if (returnObj.study && returnObj.coop) break;
        if (terms[i].code.match("[0-9](A|B)") && !returnObj.study) {
            returnObj.study = terms[i].code[1] === "A" ? `${terms[i].code[0]}B` : `${parseInt(terms[i].code[0]) + 1}A`;
        } else if (terms[i].code.match("COOP[0-9]") && !returnObj.coop) {
            returnObj.coop = `COOP${parseInt(terms[i].code[4]) + 1}`;
        };
    };
    if (!returnObj.study) returnObj.study = "1A";
    if (!returnObj.coop) returnObj.coop = "COOP1";
    return returnObj;
};

// Assumes the array is sorted in terms of the index.
const nextSeasonYear = (terms: Term[]): { season: "Winter" | "Fall" | "Spring"; year: string } => {
    if (terms.length === 0) {
        const response = { season: "", year: "" };
        const currentDate = new Date();
        response.year = String(currentDate.getFullYear());
        if (currentDate.getMonth() <= 3) {
            response.season = "Winter";
        } else if (currentDate.getMonth() <= 7) {
            response.season = "Fall";
        } else {
            response.season = "Fall";
        }
        // @ts-ignore
        return response;
    };
    const latestTerm = terms[terms.length - 1];
    if (latestTerm.season === "Fall") {
        return { season: "Winter", year: `${parseInt(latestTerm.year) + 1}` };
    } else if (latestTerm.season === "Winter") {
        return { season: "Spring", year: latestTerm.year };
    } else {
        return { season: "Fall", year: latestTerm.year };
    };
};

// Assumes the array is sorted in terms of the index.
export const nextTerm = (terms: Term[]): Term => {
    return { index: nextIndex(terms), code: nextCode(terms), ...(nextSeasonYear(terms)), courses: [] };
};

// Assumes the array is sorted in terms of the index.
export const validNextTerm = (terms: Term[], nextTerm: Term): boolean => {
    if (terms.length === 0) {
        return true;
    };
    const seasons = ["Winter", "Spring", "Fall"];
    const latestTerm = terms[terms.length - 1];
    if (parseInt(latestTerm.year) > parseInt(nextTerm.year)) {
        return false;
    } else if (parseInt(latestTerm.year) == parseInt(nextTerm.year)) {
        return seasons.indexOf(latestTerm.season) < seasons.indexOf(nextTerm.season);
    } else {
        return true;
    };
};

export const statisticsColors = (statistic: string): string => {
    let classes = "radial-progress font-bold "
    if (statistic === "N/A") {
        classes += "text-error";
    } else if (Number(statistic) <= 40) {
        classes += "text-error";
    } else if (Number(statistic) <= 70) {
        classes += "text-warning";
    } else {
        classes += "text-success";
    };
    return classes;
};