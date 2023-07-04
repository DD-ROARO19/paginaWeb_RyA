import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'paginaWeb';
  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/core.js';
    script.src = 'assets/js/script.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
  }
  
}
