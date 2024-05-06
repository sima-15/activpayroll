/**
 * Schedule datasource
 */

export let resourceData: Object[] = [
    {
        Id: 1,
        Subject: 'Workflow Analysis',
        StartTime: new Date(2024, 3, 1, 0, 0),
        EndTime: new Date(2024, 3, 1, 0, 0),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2,
        CategoryColor: "#7fa900"
    }, {
        Id: 2,
        Subject: 'process',
        StartTime: new Date(2024, 3, 1, 0, 0),
        EndTime: new Date(2024, 3, 1, 0, 0),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 3,
        Subject: 'Data input',
        StartTime: new Date(2024, 3, 2, 0, 0),
        EndTime: new Date(2024, 3, 2, 0, 0),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 4,
        Subject: 'Report',
        StartTime: new Date(2024, 3, 2, 13, 0),
        EndTime: new Date(2024, 3, 2, 15, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 5,
        Subject: 'validate',
        StartTime: new Date(2024, 3, 3, 9, 0),
        EndTime: new Date(2024, 3, 3, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 6,
        Subject: 'Collate',
        StartTime: new Date(2024, 3, 3, 14, 0),
        EndTime: new Date(2024, 3, 3, 16, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 7,
        Subject: 'Project Review',
        StartTime: new Date(2024, 3, 4, 11, 15),
        EndTime: new Date(2024, 3, 4, 13, 0),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 8,
        Subject: 'Manual testing',
        StartTime: new Date(2024, 3, 4, 9, 15),
        EndTime: new Date(2024, 3, 5, 11, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 9,
        Subject: 'Project Preview',
        StartTime: new Date(2024, 3, 5, 9, 30),
        EndTime: new Date(2024, 3, 5, 12, 45),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 10,
        Subject: 'process',
        StartTime: new Date(2024, 3, 5, 13, 45),
        EndTime: new Date(2024, 3, 5, 16, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 11,
        Subject: 'Collate',
        StartTime: new Date(2024, 3, 6, 10, 0),
        EndTime: new Date(2024, 3, 6, 12, 15),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 12,
        Subject: 'Validate',
        StartTime: new Date(2024, 3, 6, 9, 0),
        EndTime: new Date(2024, 3, 6, 11, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 13,
        Subject: 'Report',
        StartTime: new Date(2024, 3, 7, 13, 0),
        EndTime: new Date(2024, 3, 7, 15, 15),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 14,
        Subject: 'Process',
        StartTime: new Date(2024, 3, 7, 9),
        EndTime: new Date(2024, 3, 7, 11),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 15,
        Subject: 'validate',
        StartTime: new Date(2024, 3, 8, 9, 45),
        EndTime: new Date(2024, 3, 8, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 16,
        Subject: 'Run test cases',
        StartTime: new Date(2024, 3, 8, 10, 30),
        EndTime: new Date(2024, 3, 8, 13, 0),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 17,
        Subject: 'Data input',
        StartTime: new Date(2024, 3, 9, 12),
        EndTime: new Date(2024, 3, 9, 15, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 18,
        Subject: 'Debugging',
        StartTime: new Date(2024, 3, 9, 9, 0),
        EndTime: new Date(2024, 3, 9, 11, 15),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 19,
        Subject: 'Pay',
        StartTime: new Date(2024, 3, 10, 10, 10),
        EndTime: new Date(2024, 3, 10, 13, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 20,
        Subject: 'Decoding',
        StartTime: new Date(2024, 3, 10, 10, 30),
        EndTime: new Date(2024, 3, 10, 12, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 21,
        Subject: 'workflow Analysis',
        StartTime: new Date(2024, 3, 11, 9, 30),
        EndTime: new Date(2024, 3, 11, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 22,
        Subject: 'process',
        StartTime: new Date(2024, 3, 11, 12, 30),
        EndTime: new Date(2024, 3, 11, 14, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 23,
        Subject: 'Data input',
        StartTime: new Date(2024, 3, 12, 10),
        EndTime: new Date(2024, 3, 12, 12, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 24,
        Subject: 'Report',
        StartTime: new Date(2024, 3, 12, 13),
        EndTime: new Date(2024, 3, 12, 14, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 25,
        Subject: 'validate',
        StartTime: new Date(2024, 3, 13, 9),
        EndTime: new Date(2024, 3, 13, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 26,
        Subject: 'Collate',
        StartTime: new Date(2024, 3, 13, 14),
        EndTime: new Date(2024, 3, 13, 15, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 27,
        Subject: 'Project Review',
        StartTime: new Date(2024, 3, 14, 11),
        EndTime: new Date(2024, 3, 14, 13),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 28,
        Subject: 'Manual testing',
        StartTime: new Date(2024, 3, 14, 9),
        EndTime: new Date(2024, 3, 14, 11, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 29,
        Subject: 'Project Preview',
        StartTime: new Date(2024, 3, 15, 9, 30),
        EndTime: new Date(2024, 3, 15, 11),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 30,
        Subject: 'process',
        StartTime: new Date(2024, 3, 15, 14),
        EndTime: new Date(2024, 3, 15, 16, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 3
    }, {
        Id: 31,
        Subject: 'Collate',
        StartTime: new Date(2024, 3, 16, 10),
        EndTime: new Date(2024, 3, 16, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 32,
        Subject: 'Validate',
        StartTime: new Date(2024, 3, 16, 9),
        EndTime: new Date(2024, 3, 16, 11, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 33,
        Subject: 'Report',
        StartTime: new Date(2024, 3, 17, 14),
        EndTime: new Date(2024, 3, 17, 15),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 34,
        Subject: 'Process',
        StartTime: new Date(2024, 3, 17, 9),
        EndTime: new Date(2024, 3, 17, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 35,
        Subject: 'validate',
        StartTime: new Date(2024, 3, 18, 10),
        EndTime: new Date(2024, 3, 18, 11, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 36,
        Subject: 'Run test cases',
        StartTime: new Date(2024, 3, 18, 10),
        EndTime: new Date(2024, 3, 18, 10, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 37,
        Subject: 'Data input',
        StartTime: new Date(2024, 3, 9, 10),
        EndTime: new Date(2024, 3, 9, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 38,
        Subject: 'Debugging',
        StartTime: new Date(2024, 3, 19, 9),
        EndTime: new Date(2024, 3, 19, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 39,
        Subject: 'Pay',
        StartTime: new Date(2024, 3, 20, 10),
        EndTime: new Date(2024, 3, 20, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 40,
        Subject: 'Decoding',
        StartTime: new Date(2024, 3, 20, 10, 30),
        EndTime: new Date(2024, 3, 20, 12, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 41,
        Subject: 'workflow Analysis',
        StartTime: new Date(2024, 3, 21, 9, 30),
        EndTime: new Date(2024, 3, 21, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 42,
        Subject: 'process',
        StartTime: new Date(2024, 3, 21, 12, 30),
        EndTime: new Date(2024, 3, 21, 13, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 43,
        Subject: 'Data input',
        StartTime: new Date(2024, 3, 22, 10),
        EndTime: new Date(2024, 3, 22, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 44,
        Subject: 'Report',
        StartTime: new Date(2024, 3, 4, 10),
        EndTime: new Date(2024, 3, 4, 12, 30),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 4
    }, {
        Id: 45,
        Subject: 'validate',
        StartTime: new Date(2024, 3, 4, 9),
        EndTime: new Date(2024, 3, 4, 11),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 4
    }, {
        Id: 46,
        Subject: 'Collate',
        StartTime: new Date(2024, 3, 4, 14, 30),
        EndTime: new Date(2024, 3, 4, 16, 30),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 2
    }, {
        Id: 47,
        Subject: 'Project Review',
        StartTime: new Date(2024, 3, 4, 14),
        EndTime: new Date(2024, 3, 4, 16),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 1
    }, {
        Id: 48,
        Subject: 'Manual testing',
        StartTime: new Date(2024, 3, 4, 17, 30),
        EndTime: new Date(2024, 3, 4, 19, 30),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 2
    }, {
        Id: 49,
        Subject: 'Project Preview',
        StartTime: new Date(2024, 3, 4, 18, 0),
        EndTime: new Date(2024, 3, 4, 20),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 1
    }, {
        Id: 50,
        Subject: 'process',
        StartTime: new Date(2024, 3, 25, 14),
        EndTime: new Date(2024, 3, 25, 15, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 51,
        Subject: 'Collate',
        StartTime: new Date(2024, 3, 26, 10),
        EndTime: new Date(2024, 3, 26, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 52,
        Subject: 'Validate',
        StartTime: new Date(2024, 3, 26, 9),
        EndTime: new Date(2024, 3, 26, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 53,
        Subject: 'Report',
        StartTime: new Date(2024, 3, 27, 14),
        EndTime: new Date(2024, 3, 27, 15),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 54,
        Subject: 'Process',
        StartTime: new Date(2024, 3, 27, 9),
        EndTime: new Date(2024, 3, 27, 11),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 55,
        Subject: 'validate',
        StartTime: new Date(2024, 3, 28, 10),
        EndTime: new Date(2024, 3, 28, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 56,
        Subject: 'Run test cases',
        StartTime: new Date(2024, 3, 28, 10),
        EndTime: new Date(2024, 3, 28, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 57,
        Subject: 'Data input',
        StartTime: new Date(2024, 3, 29, 12),
        EndTime: new Date(2024, 3, 29, 12, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 58,
        Subject: 'Debugging',
        StartTime: new Date(2024, 3, 29, 9),
        EndTime: new Date(2024, 3, 29, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 59,
        Subject: 'Pay',
        StartTime: new Date(2024, 3, 30, 10),
        EndTime: new Date(2024, 3, 30, 11),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 60,
        Subject: 'Decoding',
        StartTime: new Date(2024, 3, 30, 10, 30),
        EndTime: new Date(2024, 3, 30, 12, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }
];

export let timelineResourceData: Object[] = [
    {
        Id: 61,
        Subject: 'Decoding',
        StartTime: new Date(2024, 3, 4, 9, 30),
        EndTime: new Date(2024, 3, 4, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 62,
        Subject: 'Collate',
        StartTime: new Date(2024, 3, 4, 16, 0),
        EndTime: new Date(2024, 3, 4, 20, 0),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 63,
        Subject: 'Validate',
        StartTime: new Date(2024, 3, 4, 9),
        EndTime: new Date(2024, 3, 4, 10, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1,
        CategoryColor: "#7fa900"
    }, {
        Id: 64,
        Subject: 'Report',
        StartTime: new Date(2024, 3, 4, 12),
        EndTime: new Date(2024, 3, 4, 15, 0),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 4
    }, {
        Id: 65,
        Subject: 'Process',
        StartTime: new Date(2024, 3, 4, 15),
        EndTime: new Date(2024, 3, 4, 18),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 66,
        Subject: 'validate',
        StartTime: new Date(2024, 3, 4, 14),
        EndTime: new Date(2024, 3, 4, 16),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 6
    }, {
        Id: 67,
        Subject: 'Data input',
        StartTime: new Date(2024, 3, 4, 14, 30),
        EndTime: new Date(2024, 3, 4, 18, 30),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 5
    }, {
        Id: 68,
        Subject: 'Run test cases',
        StartTime: new Date(2024, 3, 4, 17, 30),
        EndTime: new Date(2024, 3, 4, 19, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 4
    }, {
        Id: 70,
        Subject: 'Collate',
        StartTime: new Date(2024, 3, 4, 16, 0),
        EndTime: new Date(2024, 3, 5, 20, 0),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 3
    }
];