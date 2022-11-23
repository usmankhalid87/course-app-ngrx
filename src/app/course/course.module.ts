import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { courseReducer } from '../store/reducers/course.reducer';
import { CourseEffect } from '../store/effects/course.effect';

@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    StoreModule.forFeature('myCourses', courseReducer),
    EffectsModule.forFeature([CourseEffect]),
  ],
})
export class CourseModule {}
