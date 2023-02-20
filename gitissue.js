
const issue = document.getElementById("issue");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const page_no = document.getElementById("page_no");

let cur_page = 1;

function Issue(pageNumber) {
    fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then(response => response.json())
    .then(data => {
        const listIssue = document.querySelector("#issue ol");
        listIssue.innerHTML = "";
        data.forEach(issue =>
            {
            const issueItem = document.createElement("li");
            const issueName = issue.title;
            issueItem.innerText = issueName;
            listIssue.appendChild(issueItem);
            page_no.innerText = "Page Number " +pageNumber;
    })
    })
    .catch(console.error())
}

Issue(cur_page);

next.addEventListener("click",() => {
    cur_page++;
    Issue(cur_page);
});

prev.addEventListener("click",() => {
    cur_page--;
    Issue(cur_page);
});


