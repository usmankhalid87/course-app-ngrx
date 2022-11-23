import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeCoursesAPI } from 'src/app/store/actions/course.action';
import { selectCourse } from './../../store/selectors/course.selector';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  constructor(private store: Store) {}
  courses$ = this.store.pipe(select(selectCourse));

  ngOnInit(): void {
    this.store.dispatch(invokeCoursesAPI());
  }
}
