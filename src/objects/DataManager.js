import { Project } from "./Project";
import { Task } from "./Task";
import { User } from "../User";

export class DataManager {
  constructor(projects, user) {
    this.projects = projects;
    this.user = user;
  }

  pushNewDataManager() {
    const newDataManager = new DataManager(this.projects, this.user);
    localStorage.setItem(
      "DataManagerEasyTasks",
      JSON.stringify(newDataManager)
    );
  }

  addProject(project, color) {
    if (!this.projects.find((p) => p.name === project) && project !== "") {
      const newProject = new Project(project, color, []);
      this.projects.push(newProject);
      this.pushNewDataManager();
    }
  }

  removeProject(projectName) {
    this.projects = this.projects.filter((p) => p.name !== projectName);
    this.pushNewDataManager();
  }

  addUser(user) {
    this.user = new User(user);
    this.projects = [new Project("My Tasks", "red", [])];
    this.pushNewDataManager();
  }

  addTask(newTask, project) {
    const projectToModify = this.projects.find((p) => p.name === project);
    projectToModify.tasks.push(newTask);
    this.projects = this.projects.map((p) =>
      p.name === project ? projectToModify : p
    );
    this.pushNewDataManager();
  }

  removeTask(taskId, projectName) {
    const projectOfTheTask = this.projects.find((p) => p.name === projectName);
    projectOfTheTask.tasks = projectOfTheTask.tasks.filter(
      (t) => t.id !== taskId
    );
    this.projects.map((p) => (p.name === projectName ? projectOfTheTask : p));
    this.pushNewDataManager();
  }

  editTask(taskId, newTask) {
    this.projects.map((pr) =>
      pr.tasks.map((t) => (t.id === taskId ? newTask : t))
    );
    this.pushNewDataManager();
  }

  getFormattedDate(date) {
    const dateToFormat = new Date(date);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return dateToFormat.toLocaleDateString("en-GB", options);
  }

  getToday() {
    const today = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return today.toLocaleDateString("en-GB", options);
  }

  getTodayTask() {
    let count = 0;
    const today = this.getToday();
    this.projects.forEach((pr) => {
      pr.tasks.forEach((t) => {
        t.date === today ? count++ : count;
      });
    });
    return count;
  }

  getProjectTasks(project) {
    let count = 0;
    this.projects
      .find((pr) => pr.name === project)
      .tasks.forEach((t) => count++);
    return count;
  }

  getTaskById(id) {
    for (const project of this.projects) {
      for (const task of project.tasks) {
        if (task.id === id) {
          return task;
        }
      }
    }
    return null;
  }
}
