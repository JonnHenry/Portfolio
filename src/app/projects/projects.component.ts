import { Component, OnInit } from '@angular/core';
import { PROJECTS } from './project.constants';
import { Project } from './project.interface';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  faSearch = faSearch; 
  teamTravelerIsShown : boolean=false;
  mauticMonitoringIsShown : boolean=false;
  portfolioIsShown : boolean=false;
  pokedexIsShown : boolean=false;
  riddleIsShown: boolean=false;
  venobox:any;
  projects: any = [];

  ngOnInit(): void {
    this.projects = PROJECTS;
    this.putOnMouse();
    this.venobox=$('.venobox');
    this.venobox.venobox(); 
   }

  detailOnClick(actualProject: Project){
    this.projects.forEach((project: Project) => {
      console.log(project)
      if (project.title===actualProject.title){
        if (project.descriptionIsShow){
          project.descriptionIsShow=false;
        }else{
          project.descriptionIsShow=true;
        }
      }else{
        project.descriptionIsShow=false;
      }
    });
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

  putOnMouse(){
    this.projects.forEach((project: Project) => {
      this.onMouse(project.idLink,project.idImage);
    });
  }
  

}
