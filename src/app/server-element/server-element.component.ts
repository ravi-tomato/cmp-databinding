import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Server } from "../schemas/serverSchema";

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html'
})
export class ServerElementComponent implements OnInit {
    @Input('element') serverElement: Server;

    ngOnInit(): void {
        console.log(this.serverElement);
    }

}