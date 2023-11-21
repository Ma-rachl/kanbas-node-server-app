import Database from "../Database/index.js";
function CourseRoutes(app) {
    console.log("hi");

    //retrieve a course by thier id
    app.get("/api/courses/:id", (req, res) => {

        const { id } = req.params;
        console.log("ID:",id);
        console.log("courses:",Database.courses);

        const course = Database.courses.find((c) => c._id === id);
        if (!course) {
            console.log("fail");
            res.status(404).send("Course not found");
            return;
        }
        console.log("pass");
        res.send(course);
    });



    app.put("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = req.body;
        Database.courses = Database.courses.map((c) =>
            c._id === id ? { ...c, ...course } : c
        );
        console.log("backend add got called");
        res.sendStatus(204);
    });


    app.delete("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        console.log("backend delete got called");
        Database.courses = Database.courses.filter((c) => c._id !== id);
        res.sendStatus(204);
    });


    app.post("/api/courses", (req, res) => {
        const course = { ...req.body,
            _id: new Date().getTime().toString() };
        Database.courses.push(course);
        res.send(course);
    });


    // app.get("/api/courses", (req, res) => {
    //     const courses = Database.courses;
    //     res.send(courses);
    // });
}
export default CourseRoutes;