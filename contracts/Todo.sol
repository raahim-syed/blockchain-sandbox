// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract DoctorSignUp {
    struct Doctor {
        string name;
        string email;
    }

    mapping(address => Doctor) public doctors;

    function signUp(string memory name, string memory email) public {
        doctors[msg.sender] = Doctor(name, email);
    }

    function getDoctor(address metamaskAddress) public view returns (string memory, string memory) {
        return (doctors[metamaskAddress].name, doctors[metamaskAddress].email);
    }
}

// contract Todo{
//     //Task Struct
//     struct Task{
//         uint taskId;
//         string taskName;   
//         bool completed;     
//     }

//     //Holds all Tasks
//     mapping(uint => Task)public list;

//     //Count of tasks in list
//     uint public taskCount;

//     ///Events
//     event taskAdded(uint taskCount, string taskName, bool completed);
//     event tasksDone(string taskName, uint count);

//     //Constructor
//     constructor() public {
//         taskCount = 0;
//     }

//     //Modifiers
//     modifier taskLimit(uint id){
//         require(id > taskCount, "This task does not exist");
//         _;
//     }

//     //Adds task to list
//     function addTask(string memory _taskName)public{
//         //Pushing A task to the list
//         list[taskCount] = Task({
//             taskId: taskCount,
//             taskName: _taskName,
//             completed: false 
//         });
//         //Sending event
//         emit taskAdded(taskCount, _taskName, false);
//     }

//     //Function That Marks Tasks
//     function markTask(uint id) public{
//         require(id > taskCount, "This task does not exist");

//         //Setting task as completed
//         list[id].completed = true;

//         //Sending Completed task to frontend
//         emit tasksDone(list[id].taskName, id);
//     }
// }