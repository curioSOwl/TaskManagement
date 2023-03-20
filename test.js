const task_container=document.querySelector(".task_container");
const globalstorage=[];

const generateNewCard = (taskData) => `

<div class="card-header d-flex justify-content-end gap-2">
                        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
                        <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="card-body">
                        <img src="${taskData.imageUrl}" class="card-img-top" alt="...">
                        
                      <h5 class="card-title mt-3">${taskData.taskTitle}</h5>
                      <h4 class="card-text">${taskData.taskType}</h4>
                      <p class="card-text">${taskData.taskDescription}</p>
                    </div>

`;

const loadInitialCardData=()=>{
    const getCardData=localStorage.getItem("ids");
    const {cards}=JSON.parse(getCardData);
    cards.map((cardObject) =>{
        task_container.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
        globalstorage.push(cardObject);
    }
    )
};
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}` ,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    };
    

    task_container.insertAdjacentHTML("beforeend",generateNewCard(taskData));

    globalstorage.push(taskData);
    localStorage.setItem("ids",JSON.stringify({cards:globalstorage}));
};

