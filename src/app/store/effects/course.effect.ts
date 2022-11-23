import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CourseService } from './../../services/course.service';
import { catchError, EMPTY, exhaustMap, map, mergeMap } from 'rxjs';
import {
  invokeCoursesAPI,
  coursesFetchAPISuccess,
} from '../actions/course.action';

import { selectCourse } from '../selectors/course.selector';

@Injectable()
export class CourseEffect {
  constructor(
    private actions$: Actions,
    private service: CourseService,
    private store: Store
  ) {}

  loadCourses$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(invokeCoursesAPI),
      mergeMap(() =>
        this.service.get().pipe(
          map((data) => coursesFetchAPISuccess({ allCourses: data })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
