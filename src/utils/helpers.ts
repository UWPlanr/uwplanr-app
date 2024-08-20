// Assumes the array is sorted in terms of the term.
export const nextTerm = (terms: Term[]): string => {
    if (terms.length === 0) return "1A";
    const latestTerm = terms[terms.length - 1];
    return latestTerm.term[1] === "A" ? `${latestTerm.term[0]}B` : `${parseInt(latestTerm.term[0]) + 1}A`; 
};

// Assumes the array is sorted in terms of the term.
export const nextSeasonYear = (terms: Term[]): { season: "Winter" | "Fall" | "Spring"; year: string } => {
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

// Assumes the array is sorted in terms of the term.
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