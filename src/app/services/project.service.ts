import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/map';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Project } from '../models/project';

@Injectable()
export class ProjectService {

  path: string = 'projects';
  // project: FirebaseObjectObservable<Project>;
  projects: FirebaseListObservable<Project[]>;

  constructor(public db: AngularFireDatabase) { 
    this.projects = db.list(this.path);
  }

  getAllProjects(): Observable<Project[]> {
    console.log(`ProjectService: getAllProjects()`);
    // return this.af.database.list(this.path);
    return this.projects = this.db.list(this.path);
                  // .map(Project.fromJson)
  }

  createProject(project: Project):void {
    this.projects.push( project );
  }

  getProjectById(projectId: string): Observable<Project> {
   return this.db.object(this.path + `/${projectId}`);
  }

}
