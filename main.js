window.onload = function() {
    fetchIssue();
}
var issuesArry = [
    {
        "id":1,
        "desc":"Label  not displayed ",
        "severity":"Medium",
        "assignedTo":"abc",
        "status":"open"
    },
    {
        "id":2,
        "desc":"Uncaught Error",
        "severity":"High",
        "assignedTo":"xyz",
        "status":"open"
    }
]
function IsEmpty() {
    var descI = document.getElementById('issueDescInput').value;
    var errorDescId = document.getElementById('errorDesc');
    if(descI == "")
    {
        errorDescId.innerHTML = 'Add description';
        errorDescId.style.display = 'block';
        return false;
    }
    else {
        errorDescId.style.display = 'none';
        return true;
    }

}

function removeError() {
    var errorDescId = document.getElementById('errorDesc');
    errorDescId.style.display = 'none';
}

function saveIssue(e) {

    var valid = IsEmpty();
    if(valid) {
        event.preventDefault();
        var issueDesc = document.getElementById("issueDescInput").value;
        var issueSeverity = document.getElementById("issueSeverityInput").value;
        var issueAssignedTo = document.getElementById("issueAssignedToInput").value;
        var issueId = chance.guid();
        var issueStatus = 'open';

        var issue = {
            id: issueId,
            desc: issueDesc,
            severity: issueSeverity,
            assignedTo: issueAssignedTo,
            status: issueStatus
        }
        this.issuesArry.push(issue);
    }

    fetchIssue();
}
function closeIssue(id) {
    var closeBtnId = document.getElementById("closeBtn");
    for(var i = 0; i< this.issuesArry.length; i++) {

        if(this.issuesArry[i].id == id) {
            this.issuesArry[i].status = 'closed';
            closeBtnId.disabled = true;
            closeBtnId.classList.add('disabled');
        }
    }

    fetchIssue();
}
function deleteIssue(id) {
    for(var i = 0; i< this.issuesArry.length; i++) {

        if(this.issuesArry[i].id == id) {
            this.issuesArry.splice(i,1)
        }
    }
    fetchIssue();

}

function fetchIssue() {
    var issueList = document.getElementById('issueList');

    issueList.innerHTML = '';

    for(var i = 0; i< this.issuesArry.length; i++) {

        //console.log(data[i])
        var id = issuesArry[i].id;
        var desc = issuesArry[i].desc;
        var severity = issuesArry[i].severity;
        var assignedTo = issuesArry[i].assignedTo;
        var status = issuesArry[i].status;


        issueList.innerHTML += '<div class="well">'+'<h6>Issue Id:'+id+'</h6>'+
                        '<p><span class="label label-info">'+status+'<p>'+
                        '<h3>'+desc+'</h3>'+
                        '<p><span><i class="fa fa-clock-o" aria-hidden="true"></i>Severity: '+severity+'</span></p>'+
                        '<p><span><i class="fa fa-user" aria-hidden="true"></i>Assigned To: '+assignedTo+'</span></p>'+
                        '<button class="btn btn-primary mar-right-5" id="closeBtn" onclick="closeIssue(\''+id+'\')">Close</button>'+
                        '<button class="btn btn-primary" onclick="deleteIssue(\''+id+'\')">Delete</button>';

    }

}