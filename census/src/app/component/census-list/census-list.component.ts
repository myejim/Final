import { Component } from '@angular/core';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class CensusListComponent {

}

onDelete(id: any): any {
  this.crudService.DeleteCensus(id)
    .subscribe(res => {
      console.log(res)
    })
    location.reload();
}
