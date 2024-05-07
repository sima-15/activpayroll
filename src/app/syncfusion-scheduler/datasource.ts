/**
 * Schedule datasource
 */

export let resourceData: Object[] = [
    {
        Id: 1,
        Subject: 'Workflow Analysis',
        StartTime: new Date(2024, 4, 1, 0, 0),
        EndTime: new Date(2024, 4, 1, 0, 0),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2,
        CategoryColor: "#7fa900"
    }, {
        Id: 2,
        Subject: 'process',
        StartTime: new Date(2024, 4, 1, 0, 0),
        EndTime: new Date(2024, 4, 1, 0, 0),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 3,
        Subject: 'Data input',
        StartTime: new Date(2024, 4, 2, 0, 0),
        EndTime: new Date(2024, 4, 2, 0, 0),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 4,
        Subject: 'Report',
        StartTime: new Date(2024, 4, 2, 13, 0),
        EndTime: new Date(2024, 4, 2, 15, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 5,
        Subject: 'validate',
        StartTime: new Date(2024, 4, 3, 9, 0),
        EndTime: new Date(2024, 4, 3, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 6,
        Subject: 'Collate',
        StartTime: new Date(2024, 4, 3, 14, 0),
        EndTime: new Date(2024, 4, 3, 16, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 7,
        Subject: 'Project Review',
        StartTime: new Date(2024, 4, 4, 11, 15),
        EndTime: new Date(2024, 4, 4, 13, 0),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 8,
        Subject: 'Manual testing',
        StartTime: new Date(2024, 4, 4, 9, 15),
        EndTime: new Date(2024, 4, 5, 11, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 9,
        Subject: 'Project Preview',
        StartTime: new Date(2024, 4, 5, 9, 30),
        EndTime: new Date(2024, 4, 5, 12, 45),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 10,
        Subject: 'process',
        StartTime: new Date(2024, 4, 5, 13, 45),
        EndTime: new Date(2024, 4, 5, 16, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 11,
        Subject: 'Collate',
        StartTime: new Date(2024, 4, 6, 10, 0),
        EndTime: new Date(2024, 4, 6, 12, 15),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 12,
        Subject: 'Validate',
        StartTime: new Date(2024, 4, 6, 9, 0),
        EndTime: new Date(2024, 4, 6, 11, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 13,
        Subject: 'Report',
        StartTime: new Date(2024, 4, 7, 13, 0),
        EndTime: new Date(2024, 4, 7, 15, 15),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 14,
        Subject: 'Process',
        StartTime: new Date(2024, 4, 7, 9),
        EndTime: new Date(2024, 4, 7, 11),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 15,
        Subject: 'validate',
        StartTime: new Date(2024, 4, 8, 9, 45),
        EndTime: new Date(2024, 4, 8, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 16,
        Subject: 'Run test cases',
        StartTime: new Date(2024, 4, 8, 10, 30),
        EndTime: new Date(2024, 4, 8, 13, 0),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 17,
        Subject: 'Data input',
        StartTime: new Date(2024, 4, 9, 12),
        EndTime: new Date(2024, 4, 9, 15, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 18,
        Subject: 'Debugging',
        StartTime: new Date(2024, 4, 9, 9, 0),
        EndTime: new Date(2024, 4, 9, 11, 15),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 19,
        Subject: 'Pay',
        StartTime: new Date(2024, 4, 10, 10, 10),
        EndTime: new Date(2024, 4, 10, 13, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 20,
        Subject: 'Decoding',
        StartTime: new Date(2024, 4, 10, 10, 30),
        EndTime: new Date(2024, 4, 10, 12, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 21,
        Subject: 'workflow Analysis',
        StartTime: new Date(2024, 4, 11, 9, 30),
        EndTime: new Date(2024, 4, 11, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 22,
        Subject: 'process',
        StartTime: new Date(2024, 4, 11, 12, 30),
        EndTime: new Date(2024, 4, 11, 14, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 23,
        Subject: 'Data input',
        StartTime: new Date(2024, 4, 12, 10),
        EndTime: new Date(2024, 4, 12, 12, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 24,
        Subject: 'Report',
        StartTime: new Date(2024, 4, 12, 13),
        EndTime: new Date(2024, 4, 12, 14, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 25,
        Subject: 'validate',
        StartTime: new Date(2024, 4, 13, 9),
        EndTime: new Date(2024, 4, 13, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 26,
        Subject: 'Collate',
        StartTime: new Date(2024, 4, 13, 14),
        EndTime: new Date(2024, 4, 13, 15, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 27,
        Subject: 'Project Review',
        StartTime: new Date(2024, 4, 14, 11),
        EndTime: new Date(2024, 4, 14, 13),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 28,
        Subject: 'Manual testing',
        StartTime: new Date(2024, 4, 14, 9),
        EndTime: new Date(2024, 4, 14, 11, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 29,
        Subject: 'Project Preview',
        StartTime: new Date(2024, 4, 15, 9, 30),
        EndTime: new Date(2024, 4, 15, 11),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 30,
        Subject: 'process',
        StartTime: new Date(2024, 4, 15, 14),
        EndTime: new Date(2024, 4, 15, 16, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 3
    }, {
        Id: 31,
        Subject: 'Collate',
        StartTime: new Date(2024, 4, 16, 10),
        EndTime: new Date(2024, 4, 16, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 32,
        Subject: 'Validate',
        StartTime: new Date(2024, 4, 16, 9),
        EndTime: new Date(2024, 4, 16, 11, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 33,
        Subject: 'Report',
        StartTime: new Date(2024, 4, 17, 14),
        EndTime: new Date(2024, 4, 17, 15),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 34,
        Subject: 'Process',
        StartTime: new Date(2024, 4, 17, 9),
        EndTime: new Date(2024, 4, 17, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 35,
        Subject: 'validate',
        StartTime: new Date(2024, 4, 18, 10),
        EndTime: new Date(2024, 4, 18, 11, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 36,
        Subject: 'Run test cases',
        StartTime: new Date(2024, 4, 18, 10),
        EndTime: new Date(2024, 4, 18, 10, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 37,
        Subject: 'Data input',
        StartTime: new Date(2024, 4, 9, 10),
        EndTime: new Date(2024, 4, 9, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 38,
        Subject: 'Debugging',
        StartTime: new Date(2024, 4, 19, 9),
        EndTime: new Date(2024, 4, 19, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 39,
        Subject: 'Pay',
        StartTime: new Date(2024, 4, 20, 10),
        EndTime: new Date(2024, 4, 20, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 40,
        Subject: 'Decoding',
        StartTime: new Date(2024, 4, 20, 10, 30),
        EndTime: new Date(2024, 4, 20, 12, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 41,
        Subject: 'workflow Analysis',
        StartTime: new Date(2024, 4, 21, 9, 30),
        EndTime: new Date(2024, 4, 21, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 42,
        Subject: 'process',
        StartTime: new Date(2024, 4, 21, 12, 30),
        EndTime: new Date(2024, 4, 21, 13, 45),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 43,
        Subject: 'Data input',
        StartTime: new Date(2024, 4, 22, 10),
        EndTime: new Date(2024, 4, 22, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 44,
        Subject: 'Report',
        StartTime: new Date(2024, 4, 4, 10),
        EndTime: new Date(2024, 4, 4, 12, 30),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 4
    }, {
        Id: 45,
        Subject: 'validate',
        StartTime: new Date(2024, 4, 4, 9),
        EndTime: new Date(2024, 4, 4, 11),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 4
    }, {
        Id: 46,
        Subject: 'Collate',
        StartTime: new Date(2024, 4, 4, 14, 30),
        EndTime: new Date(2024, 4, 4, 16, 30),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 2
    }, {
        Id: 47,
        Subject: 'Project Review',
        StartTime: new Date(2024, 4, 4, 14),
        EndTime: new Date(2024, 4, 4, 16),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 1
    }, {
        Id: 48,
        Subject: 'Manual testing',
        StartTime: new Date(2024, 4, 4, 17, 30),
        EndTime: new Date(2024, 4, 4, 19, 30),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 2
    }, {
        Id: 49,
        Subject: 'Project Preview',
        StartTime: new Date(2024, 4, 4, 18, 0),
        EndTime: new Date(2024, 4, 4, 20),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 1
    }, {
        Id: 50,
        Subject: 'process',
        StartTime: new Date(2024, 4, 25, 14),
        EndTime: new Date(2024, 4, 25, 15, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 51,
        Subject: 'Collate',
        StartTime: new Date(2024, 4, 26, 10),
        EndTime: new Date(2024, 4, 26, 11),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 52,
        Subject: 'Validate',
        StartTime: new Date(2024, 4, 26, 9),
        EndTime: new Date(2024, 4, 26, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 2
    }, {
        Id: 53,
        Subject: 'Report',
        StartTime: new Date(2024, 4, 27, 14),
        EndTime: new Date(2024, 4, 27, 15),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 54,
        Subject: 'Process',
        StartTime: new Date(2024, 4, 27, 9),
        EndTime: new Date(2024, 4, 27, 11),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 55,
        Subject: 'validate',
        StartTime: new Date(2024, 4, 28, 10),
        EndTime: new Date(2024, 4, 28, 11, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 56,
        Subject: 'Run test cases',
        StartTime: new Date(2024, 4, 28, 10),
        EndTime: new Date(2024, 4, 28, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 57,
        Subject: 'Data input',
        StartTime: new Date(2024, 4, 29, 12),
        EndTime: new Date(2024, 4, 29, 12, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1
    }, {
        Id: 58,
        Subject: 'Debugging',
        StartTime: new Date(2024, 4, 29, 9),
        EndTime: new Date(2024, 4, 29, 10, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }, {
        Id: 59,
        Subject: 'Pay',
        StartTime: new Date(2024, 4, 30, 10),
        EndTime: new Date(2024, 4, 30, 11),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 1
    }, {
        Id: 60,
        Subject: 'Decoding',
        StartTime: new Date(2024, 4, 30, 10, 30),
        EndTime: new Date(2024, 4, 30, 12, 30),
        IsAllDay: false,
        ProjectId: 2,
        TaskId: 2
    }
];
