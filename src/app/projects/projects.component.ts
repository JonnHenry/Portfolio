import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  teamTravelerIsShown : boolean=false;
  mauticMonitoringIsShown : boolean=false;
  portfolioIsShown : boolean=false;
  pokedexIsShown : boolean=false;
  riddleIsShown: boolean=false;
  venobox:any;
  constructor() { }
  detailOnClick(project:String){
    if(project=="qr-runner"){
      this.teamTravelerIsShown = !this.teamTravelerIsShown;
      this.mauticMonitoringIsShown=false;
      this.portfolioIsShown =false;
      this.pokedexIsShown=false;
      this.riddleIsShown=false;
    }
    else if(project=="sentimentAnalysis"){
      this.mauticMonitoringIsShown = !this.mauticMonitoringIsShown;
      this.teamTravelerIsShown=false;
      this.portfolioIsShown =false;
      this.pokedexIsShown=false;
      this.riddleIsShown=false;
    }
    else if(project=="text-clustering"){
      this.portfolioIsShown = !this.portfolioIsShown;
      this.teamTravelerIsShown=false;
      this.mauticMonitoringIsShown =false;
      this.pokedexIsShown=false;
      this.riddleIsShown=false;
    }
    else if(project=="Sparkend"){
      this.pokedexIsShown = !this.pokedexIsShown;
      this.teamTravelerIsShown=false;
      this.mauticMonitoringIsShown =false;
      this.portfolioIsShown=false;
      this.riddleIsShown=false;
    }
    else if(project=="booth"){
      this.riddleIsShown = !this.riddleIsShown;
      this.teamTravelerIsShown=false;
      this.mauticMonitoringIsShown =false;
      this.portfolioIsShown=false;
      this.pokedexIsShown=false;

    }
    

  }
  onMouse(idLink:String, idImage:String){
    $( '#' + idLink ).on("mouseenter", function() {
      $('#' + idImage).css( "opacity", "0.3" );
      $('#' + idLink).css( "opacity", "1" );
    }).on('mouseleave', function() {
      $('#' + idImage).css( "opacity", "1" );
      $('#' +idLink).css( "opacity", "0" );
    }
      
    );

    $( '#' + idImage ).on("mouseenter", function() {
      $('#' + idImage).css( "opacity", "0.3" );
      $('#' +idLink).css( "opacity", "1" );
    }).on('mouseleave', function() {
      $('#' + idImage).css( "opacity", "1" );
      $('#' +idLink).css( "opacity", "0" );
    }
    );
  }
  ngOnInit(): void {
   this.onMouse("portfolio-link","portfolio-img");
   this.onMouse("teamTraveler-link","teamTraveler-img");
   this.onMouse("mautic-link","mautic-img");
   this.onMouse("pokedex-link","pokedex-img");
   this.onMouse("riddle-link","riddle-img");
   this.venobox=$('.venobox');
   this.venobox.venobox(); 
   
  }

}
