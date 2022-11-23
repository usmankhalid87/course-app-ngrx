import { CourseItem } from '../models/courseItem.model';
import { createReducer, on } from '@ngrx/store';
import { coursesFetchAPISuccess } from '../actions/course.action';

export const initialState: ReadonlyArray<CourseItem> = [];

export const courseReducer = createReducer(
  initialState,
  on(coursesFetchAPISuccess, (state, { allCourses }) => {
    return allCourses;
  })
);
