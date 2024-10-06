import { useContext } from "react";
import { Edit, Plus } from "lucide-react";

import EditTermModal from "./EditTermModal";
import AddCourseModal from "./AddCourseModal";
import CourseInfoModal from "./CourseInfoModal";

import { ProfileContext } from "../context/useProfileContext";
import { requirementsChecker } from "../utils/checkers";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Props {
    term: Term;
};

const Term = ({ term }: Props) => {
  const { profile, changeProfile } = useContext(ProfileContext);
  const onDelete = () => {
    changeProfile(profile.splice(0, profile.length - 1));
    window.location.reload();
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          {term.season} {term.year}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {term.courses.map((course, index) => {
                const { classes, text } = requirementsChecker(profile, course, term.index);
                return (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{course.code}</TableCell>
                      <TableCell>{course.grade ? course.grade : "TBD"}</TableCell>
                      <TableCell>
                          <Badge className={classes}>{text}</Badge>
                      </TableCell>
                    </TableRow>
                )
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2 mt-auto">
        <Button variant="outline">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <Edit className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Term;
