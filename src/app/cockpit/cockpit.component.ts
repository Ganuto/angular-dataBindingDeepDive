import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // newServerName = '';
  //newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(svrNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: svrNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(svrNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: svrNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
