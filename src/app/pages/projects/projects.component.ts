import { Component, OnInit, OnChanges } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnChanges {

  private projects: Project[];
  private newProject: Project;

  public projectForm = this.fb.group({
    name: [""],
    budget: [0],
    owner: [""]
  });

  constructor(private projectService: ProjectService, public fb: FormBuilder) { }

  ngOnInit() {
    console.log(`ProjectComponent: ngOnInit()`);
    this.getAllProjects();
  }

  ngOnChanges() {
    console.log(`ProjectComponent: ngChanges()`);
    this.getAllProjects();
  }

  getAllProjects() {
    console.log(`ProjectsComponent: getAllProjects()`);
    this.projectService.getAllProjects().subscribe( data => {
      this.projects = data;
    });
  }

  addProject() {
    console.log(`this.projectForm.value = ${JSON.stringify(this.projectForm.value)}`);
    this.projectService.createProject(this.projectForm.value);
  }

}
