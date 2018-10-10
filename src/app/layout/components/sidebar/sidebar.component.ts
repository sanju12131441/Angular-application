import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean = false;
    change: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    active:boolean = false;
    isClicked:boolean = false;
    Clicked:boolean = false;
    yesClicked:boolean = false;

    triangle:boolean = false;
role:string;
    @Output() collapsedEvent = new EventEmitter<boolean>();
    
    constructor(private translate: TranslateService, public router: Router) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any,classList) {
       
        if (element === this.showMenu) {
            this.showMenu = '0'; 
            this.isClicked = !this.isClicked;       
        } else {
            this.showMenu = element;
            this.isClicked = !this.isClicked;
        }
       
    }
    arrow(){
        this.isClicked = !this.isClicked;
    }
    addExpand(element: any,classList) {
       
        if (element === this.showMenu) {
            this.showMenu = '0'; 
            this.yesClicked = !this.yesClicked;       
        } else {
            this.showMenu = element;
            this.yesClicked = !this.yesClicked;
        }
       
    }
    expand(){
        this.active = !this.active
        this.triangle = ! this.triangle
    }
    toggleCollapsed() {
        this.change = !this.change;
        this.Clicked = !this.Clicked; 
        this.collapsedEvent.emit(this.change);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
   
    ngOnInit(){
this.role = localStorage.getItem('role');
    }
}
