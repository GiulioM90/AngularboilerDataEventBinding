import { Component, OnInit, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-inputcontroller',
  templateUrl: './inputcontroller.component.html',
  styleUrls: ['./inputcontroller.component.css']
})
export class InputcontrollerComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{serverName:string, serverContent:string}>();

  newServerName= '';
  newServerContent= '';
  constructor() { }

  ngOnInit(): void {

  }
  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
