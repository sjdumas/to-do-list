import {
	cleanForm,
	setNumberOfTaskInButton,
	dynamicallyIncreaseHeightTextArea,
	getRandomMixedString,
	createDisablerButton,
} from "../utils/domUtils";
import { Task } from "../objects/Task";

import audio from "../audio/task2.wav";

export function task(data) {
	const setNumberOfTasks = (type) => {
		const numberTask = document.querySelector(".number-task");
		numberTask.textContent = `${
			type === "today" ? data.getTodayTask() : data.getProjectTasks(type)
		} ${data.getTodayTask().length > 1 ? "tasks" : "task"}`;
	};

	const replaceForCleanTasksElements = (classOfTasks) => {
		const main = document.querySelector("main");
		const mainAddTaskButton = document.querySelector(".main-add-task");

		const mainTasks = document.querySelector(classOfTasks);
		mainTasks.remove();

		const newMainTasks = document.createElement("div");
		newMainTasks.classList = classOfTasks.replace(".", "");

		main.insertBefore(newMainTasks, mainAddTaskButton);
	};

	const createTaskElement = (task, mainClass) => {
		const mainTasks = document.querySelector(mainClass);
		const taskDiv = document.createElement("div");
		taskDiv.classList = `task ${task.id}`;
		taskDiv.textContent = task.title;

		const taskButton = document.createElement("button");
		taskButton.classList = "complete-button";

		const completeSvg = document.createElement("img");
		completeSvg.classList.add("material-icons"); completeSvg.textContent = "check_circle";
		completeSvg.classList = "complete-svg not-display";

		taskButton.appendChild(completeSvg);
		taskDiv.prepend(taskButton);
		mainTasks.appendChild(taskDiv);
		taskDiv.addEventListener("click", showTask);
		taskButton.addEventListener("click", completeTask);
	};

	const completeTask = (event) => {
		event.stopPropagation();

		const taskAudio = new Audio(audio);
		taskAudio.play();

		const task = document.querySelector(
			`.${event.currentTarget.parentNode.classList[1]}`
		);

		const projectName =
			event.currentTarget.parentNode.parentNode.parentNode.querySelector(
				".page-title"
			).textContent;

		task.style.textDecoration = "line-through";
		task.style.border = "1px solid white";
		event.currentTarget.style.width = "18px";
		event.currentTarget.style.height = "18px";
		event.currentTarget.firstChild.style.display = "block";
		event.currentTarget.style.backgroundColor = "#252525";

		const messageTask = document.querySelector(".message-task");
		messageTask.classList.add("active");

		setTimeout(() => {
			removeTaskByIdAndProjectName(
				task.classList[1],
				projectName === "Today" ? "My Tasks" : projectName
			);
			messageTask.classList.remove("active");
		}, 2000);

		task.removeEventListener("click", showTask);
		event.currentTarget.removeEventListener("click", completeTask);
	};

	const createTasksElements = (type) => {
		if (type === "today") {
			replaceForCleanTasksElements(".main-tasks-today");
			data.projects.forEach((p) =>
				p.tasks.forEach((t) => {
					if (t.date === data.getToday()) {
						createTaskElement(t, ".main-tasks-today");
					}
				})
			);
		} else {
			replaceForCleanTasksElements(".main-tasks-project");
			data.projects.forEach((p) => {
				if (p.name === type) {
					return p.tasks.forEach((t) =>
						createTaskElement(t, ".main-tasks-project")
					);
				}
			});
		}
	};

	const displayFormTaskMain = (event) => {
		createDisablerButton(".main-add-task-button-send", ".title-input");

		const projectInput = document.querySelector(".title-input");
		projectInput.dispatchEvent(new Event("input")); //

		cleanForm(".main-add-task-form");
		dynamicallyIncreaseHeightTextArea(".title-input");
		dynamicallyIncreaseHeightTextArea(".description-input");

		document
			.querySelector(".main-add-task")
			.classList.toggle("not-display");
		document
			.querySelector(".main-add-task-form")
			.classList.toggle("not-display");
	};

	const clickOnCrossButton = () => {
		const addTaskCrossButton = document.querySelector(
			".main-add-task-button-cross"
		);

		addTaskCrossButton.addEventListener("click", displayFormTaskMain);
	};

	const addTaskToBoard = (
		titleInput,
		descriptionInput,
		prioritySelect,
		dateSelect,
		project
	) => {
		if (project === "Today") {
			const newTask = new Task(
				getRandomMixedString(10),
				titleInput.value,
				descriptionInput.value,
				data.getToday(),
				prioritySelect.value,
				""
			);

			data.addTask(newTask, "My Tasks");
			setNumberOfTasks("today");
			setNumberOfTaskInButton(
				".num-tasks-in-button.today",
				data.getTodayTask()
			);

			setNumberOfTaskInButton(
				".num-tasks-in-button.MyTasks",
				data.getProjectTasks("My Tasks")
			);

			createTaskElement(newTask, ".main-tasks-today");
		} else {
			const newTask = new Task(
				getRandomMixedString(10),
				titleInput.value,
				descriptionInput.value,
				data.getFormattedDate(dateSelect.value),
				prioritySelect.value,
				""
			);

			data.addTask(newTask, project);
			setNumberOfTasks(project);
			createTaskElement(newTask, ".main-tasks-project");
			setNumberOfTaskInButton(
				".num-tasks-in-button.today",
				data.getTodayTask()
			);

			setNumberOfTaskInButton(
				`.num-tasks-in-button.${project.replaceAll(" ", "")}`,
				data.getProjectTasks(project)
			);
		}
	};

	const submitAddTaskForm = () => {
		const addTaskForm = document.querySelector(".main-add-task-form");
		const titleInput = document.querySelector(".title-input");
		const descriptionInput = document.querySelector(".description-input");
		const prioritySelect = document.querySelector(".select-main-add-task");
		const dateSelect = document.querySelector(".date-main-add-task");

		addTaskForm.addEventListener("submit", (event) => {
			event.preventDefault();
			const typeOfForm =
				document.querySelector(".page-title").textContent;
			addTaskToBoard(
				titleInput,
				descriptionInput,
				prioritySelect,
				dateSelect,
				typeOfForm
			);
			displayFormTaskMain();
		});
	};

	const showTask = (event) => {
		const taskId = event.currentTarget.classList[1];
		const task = data.getTaskById(taskId);
		const taskDialog = document.querySelector(".task-dialog");
		taskDialog.showModal();

		const taskDiv = document.querySelector(".task-div");
		taskDiv.classList.add(taskId);

		const breadcrumb = document.querySelector(".breadcrumb");

		let breadcrumbText = "";
		if (breadcrumb.classList.length === 1) {
			breadcrumbText = breadcrumb.textContent;
		}
		const taskParent = document.querySelector(".task-parent");
		taskParent.textContent = `${breadcrumbText} ${
			document.querySelector(".page-title").textContent
		} /`;

		const taskTitle = document.querySelector(".task-title");
		taskTitle.textContent = task.title;

		const taskDescription = document.querySelector(".task-description");
		taskDescription.textContent = task.description
			? task.description
			: "Description";

		const taskPriority = document.querySelector(".task-priority-value");
		taskPriority.textContent = task.priority.toUpperCase();

		const taskDate = document.querySelector(".task-date");
		taskDate.textContent = task.date;

		const taskDialogMark = document.querySelector(".task-dialog-mark");
		taskDialogMark.addEventListener("click", closeTask);

		const taskDialogTrash = document.querySelector(".task-dialog-trash");
		taskDialogTrash.addEventListener("click", removeTask);

		const taskMainInfo = document.querySelector(".task-main-info");
		taskMainInfo.addEventListener("click", setUpFormEdit);
	};

	const setUpFormEdit = () => {
		displayFormEdit();
		dynamicallyIncreaseHeightTextArea(".task-title-edit");
		dynamicallyIncreaseHeightTextArea(".task-description-edit");

		const taskTitle = document.querySelector(".task-title");
		const taskDescription = document.querySelector(".task-description");
		const taskTitleEdit = document.querySelector(".task-title-edit");
		taskTitleEdit.textContent = taskTitle.textContent;

		const taskDescriptionEdit = document.querySelector(
			".task-description-edit"
		);

		taskDescriptionEdit.textContent =
			taskDescription.textContent === "Description"
				? ""
				: taskDescription.textContent;

		const taskFormEdit = document.querySelector(".task-form-edit");
		taskFormEdit.addEventListener("submit", submitEditForm);

		createDisablerButton(".save-edit", ".task-title-edit");

		const cancelEditButton = document.querySelector(".cancel-edit");
		cancelEditButton.addEventListener("click", displayFormEdit);
	};

	const submitEditForm = (event) => {
		event.preventDefault();

		const taskId =
			event.currentTarget.parentNode.parentNode.parentNode.classList[1];
		const oldTask = data.getTaskById(taskId);
		const taskTitleEdit = document.querySelector(".task-title-edit");
		const taskDescriptionEdit = document.querySelector(
			".task-description-edit"
		);

		oldTask.title = taskTitleEdit.value;
		oldTask.description = taskDescriptionEdit.value;
		data.editTask(taskId, oldTask);

		const taskTitle = document.querySelector(".task-title");
		const taskDescription = document.querySelector(".task-description");
		taskTitle.textContent = taskTitleEdit.value;
		taskDescription.textContent = taskDescriptionEdit.value;

		const taskMainDiv = document.querySelector(`.task.${taskId}`);
		const completeButton = document.querySelector(".complete-button");
		taskMainDiv.textContent = taskTitleEdit.value;
		taskMainDiv.prepend(completeButton);

		displayFormEdit();
	};

	const displayFormEdit = () => {
		cleanForm(".task-form-edit");

		const taskFormInfo = document.querySelector(".task-form-info");
		taskFormInfo.classList.toggle("not-display");

		const taskMainInfo = document.querySelector(".task-main-info");
		taskMainInfo.classList.toggle("not-display");

		if (taskFormInfo.classList.length === 2) {
			const cancelEditButton = document.querySelector(".cancel-edit");
			cancelEditButton.removeEventListener("click", displayFormEdit);

			const taskFormEdit = document.querySelector(".task-form-edit");
			taskFormEdit.removeEventListener("submit", submitEditForm);
		}
	};

	const closeTask = () => {
		const taskDialog = document.querySelector(".task-dialog");
		const taskDiv = document.querySelector(".task-div");
		const taskDialogMark = document.querySelector(".task-dialog-mark");
		const taskDialogTrash = document.querySelector(".task-dialog-trash");
		const taskMainInfo = document.querySelector(".task-main-info");
		taskDialogMark.removeEventListener("click", closeTask);
		taskDialogTrash.removeEventListener("click", removeTask);

		if (taskMainInfo.classList.length === 2) {
			displayFormEdit();
		}

		taskMainInfo.removeEventListener("click", setUpFormEdit);
		taskDiv.classList.remove(taskDiv.classList[1]);
		taskDialog.close();
	};

	const removeTask = (event) => {
		const parentText =
			event.currentTarget.parentNode.parentNode.querySelector(
				".task-parent"
			).textContent;

		let projectName = "";
		if (parentText.includes("Today")) {
			projectName = "My Tasks";
		} else {
			const words = parentText.split("/");
			projectName = words[1].trim();
		}

		const taskId =
			event.currentTarget.parentNode.parentNode.parentNode.classList[1];

		removeTaskByIdAndProjectName(taskId, projectName);
		closeTask();
	};

	const removeTaskByIdAndProjectName = (taskId, projectName) => {
		data.removeTask(taskId, projectName);

		const taskInDiv = document.querySelector(`.task.${taskId}`);
		taskInDiv.remove();

		setNumberOfTasks(projectName === "My Tasks" ? "today" : projectName);
		setNumberOfTaskInButton(
			".num-tasks-in-button.today",
			data.getTodayTask()
		);

		setNumberOfTaskInButton(
			`.num-tasks-in-button.${projectName.replaceAll(" ", "")}`,
			data.getProjectTasks(projectName)
		);
	};

	const clickOnAddTaskInPage = () => {
		const addTaskButton = document.querySelector(".main-add-task");
		addTaskButton.addEventListener("click", displayFormTaskMain);

		submitAddTaskForm();
		clickOnCrossButton();
	};

	const closeCreateTaskGeneral = (event) => {
		event.preventDefault();
		const generalTaskDialog = document.querySelector(".general-task");

		const cancelGeneralButton = document.querySelector(
			".cancel-general-button"
		);

		cancelGeneralButton.removeEventListener(
			"click",
			closeCreateTaskGeneral
		);

		generalTaskDialog.close();
	};

	const showProjectsInSelect = () => {
		const projectsSelect = document.querySelector(".general-task-project");
		projectsSelect.innerHTML = "";
		data.projects.forEach((p) => {
			const option = document.createElement("option");
			option.textContent = p.name;
			option.value = p.name;
			projectsSelect.appendChild(option);
		});
	};

	const displayCreateTaskGeneral = () => {
		const generalTaskDialog = document.querySelector(".general-task");
		const addTaskGeneralButton =
			document.querySelector(".add-task-general");
		const cancelGeneralButton = document.querySelector(
			".cancel-general-button"
		);
		const generalTaskForm = document.querySelector(".general-task-form");
		addTaskGeneralButton.addEventListener("click", () => {
			dynamicallyIncreaseHeightTextArea(".general-task-name");
			dynamicallyIncreaseHeightTextArea(".general-description");
			showProjectsInSelect();
			generalTaskDialog.showModal();
			generalTaskForm.addEventListener("submit", (event) => {
				event.preventDefault();
				const generalTaskName =
					document.querySelector(".general-task-name");
				const generalDescription = document.querySelector(
					".general-description"
				);
				const generalTaskPriority = document.querySelector(
					".general-task-priority"
				);
				const generalTaskDate =
					document.querySelector(".general-task-date");

				const generalTaskProject = document.querySelector(
					".general-task-project"
				);

				addTaskToBoard(
					generalTaskName,
					generalDescription,
					generalTaskPriority,
					generalTaskDate,
					generalTaskProject.value
				);
				generalTaskDialog.close();
			});
			cancelGeneralButton.addEventListener(
				"click",
				closeCreateTaskGeneral
			);
		});
	};

	const init = (type) => {
		createTasksElements(type),
			setNumberOfTasks(type),
			displayCreateTaskGeneral(),
			clickOnAddTaskInPage();
	};

	return { init, createTasksElements, setNumberOfTasks };
}
