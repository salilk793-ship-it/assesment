const dummyStudents = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        rollNo: "CS101",
        gpa: 3.8
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        rollNo: "CS102",
        gpa: 3.5
    },
    {
        id: 3,
        name: "Carol White",
        email: "carol@example.com",
        rollNo: "CS103",
        gpa: 3.9
    },
    {
        id: 4,
        name: "David Brown",
        email: "david@example.com",
        rollNo: "CS104",
        gpa: 3.2
    }
];

const getAllStudents = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Students retrieved successfully",
            data: dummyStudents,
            count: dummyStudents.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving students",
            error: error.message
        });
    }
};

const getStudentById = (req, res) => {
    try {
        const studentId = parseInt(req.params.id);
        const student = dummyStudents.find(s => s.id === studentId);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: `Student with ID ${studentId} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: "Student retrieved successfully",
            data: student
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving student",
            error: error.message
        });
    }
};

module.exports = {
    getAllStudents,
    getStudentById
};
