import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { IntercepterService } from '../shared/intercepter.service';
import { TestserviceService } from '../shared/testservice.service';
import { Test1Component } from './test1.component';
const favoriteMoviesToUse = [
  { title: 'Interstellar' },
  { title: 'The big Lebowski' } ,
  { title: 'Fences' } 
];
describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;
  let authservice:TestserviceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,CommonModule,BrowserModule],
      declarations:[Test1Component],
      providers:[TestserviceService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(Test1Component);
    authservice=TestBed.get(TestserviceService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add two numbers', () => {
    expect(component.sum(50,4543)).toBe(4593)
  });
  it('should sort the letters', () => {
    expect(component.sortStringToLower('AkHil')).toBe('ahikl')
  });
  it('The sttring should be converted to camel case', () => {
    expect(component.camelize('ROshAn aBooBAckER')).toBe('roshanAboobacker')
  });
  it('The sttring should be converted to camel case', () => {
    expect(component.fullname('Akhil','Roshan')).toBe('Akhil Roshan')
  });
  it('should have a title', () => {
    const titleElements = fixture.debugElement.queryAll(By.css('h1'));
    expect(titleElements.length).toBe(1);
    expect(titleElements[0].nativeElement.innerHTML).toBe('Testing page 1');
  });
  // it('getting data',()=>{
  //   spyOn(authservice,'getData').and.callThrough()
  //   expect(authservice.getData).toHaveBeenCalled()
  // })
});