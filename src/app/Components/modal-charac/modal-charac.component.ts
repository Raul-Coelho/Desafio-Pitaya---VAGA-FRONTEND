import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { People } from 'src/app/Model/People';
import { ConsumePlanetsService } from '../../services/consume-planets.service';
import { ConsumeService } from '../../services/consume-filme.service';
import { ConsumeSpeciesService } from '../../services/consume-species.service';
import { ConsumeCharactersService } from '../../services/consume-characters.service';
import { ConsumeStarshipsService } from '../../services/consume-starships.service';
import { ConsumeVehiclesService } from '../../services/consume-vehicles.service';

@Component({
  selector: 'app-modal-charac',
  templateUrl: './modal-charac.component.html',
  styleUrls: ['./modal-charac.component.scss']
})
export class ModalCharacComponent implements OnInit {

  heading: string;
  people:People[];

  constructor(
    public modalRef: MDBModalRef,
    public serviceFilms:ConsumeService,
    public consumeSpeciesService: ConsumeSpeciesService,
    private consumePlanetsService: ConsumePlanetsService,
    private consumeCharactersService: ConsumeCharactersService,
    private consumeStarshipsService: ConsumeStarshipsService,
    private consumeVehiclesService: ConsumeVehiclesService,
    ) { }

  ngOnInit() {
    this.serviceFilms.getSpecified(this.people['films']).then(res =>{
      this.people['films'] = res;
      console.log(this.people['films'])
    })

    this.consumeSpeciesService.getSpecies(this.people['species']).then(res =>{
      this.people['species'] = res;
      console.log(this.people['species'])
    })

    this.consumeStarshipsService.getStarships(this.people['starships']).then(res =>{
      this.people['starships'] = res;
      console.log(this.people['starships'])
    })


    this.consumeVehiclesService.getVehicles(this.people['vehicles']).then(res =>{
      this.people['vehicles'] = res;
      console.log(this.people['vehicles'])
    }).catch(res =>{
      console.log("Não POssui veiculo")
    })

    this.consumePlanetsService.getSpecified(this.people['homeworld']).then(res =>{
      this.people['homeworld'] = res;
      console.log(this.people['homeworld'])
    })


  }

}
