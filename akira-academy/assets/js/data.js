// Mock Data for Akira Academy

const academyData = {
    student: {
        id: "AK-9042",
        name: "Yuki",
        alias: "GhostInTheShell",
        level: 42,
        class: "Cyber-Security",
        credits: 15400,
        avatar: "assets/img/student.png",
        skills: [
            { name: "Hacking", level: 85 },
            { name: "Neural Interfaces", level: 70 },
            { name: "AI Ethics", level: 92 },
            { name: "Mecha Piloting", level: 45 }
        ],
        recentActivity: [
            { date: "2077-10-24", action: "System Bypass Exam Passed" },
            { date: "2077-10-23", action: "Uploaded Mod to Neural Net" },
            { date: "2077-10-20", action: "Purchased 'Cyberdeck V4'" }
        ]
    },
    campusLocations: [
        {
            id: "loc-01",
            name: "Main Hub",
            description: "The central gathering point for all students. High-bandwidth connections available.",
            status: "Online",
            coordinates: "X: 45.2, Y: 12.8"
        },
        {
            id: "loc-02",
            name: "Neural Labs",
            description: "Advanced simulation rooms for deep-dive netrunning practice.",
            status: "Restricted",
            coordinates: "X: -12.4, Y: 88.1"
        },
        {
            id: "loc-03",
            name: "Combat Arena",
            description: "Physical and virtual combat training grounds.",
            status: "Maintenance",
            coordinates: "X: 105.0, Y: -4.5"
        }
    ]
};
