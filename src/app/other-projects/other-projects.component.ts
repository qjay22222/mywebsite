import { Component, OnInit } from '@angular/core';
import {Project} from './project.model';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.css']
})
export class OtherProjectsComponent implements OnInit {

  private projectList: Project[]= [];

  constructor() { }

  ngOnInit() {
    this.projectList.push(new Project('playsLinker', 'Für Lol ein Webservice der automatisiert die besten Plays von den besten Spielern wiedergibt ', 'http://www.blablabal.com '));
    this.projectList.push(new Project('Webcrawler', 'ein Script, das diverse ImmobilienPlattformen automatisch nach angeboten durchsucht und die günstigsten Projekte ausgibt ', 'asd '));
    this.projectList.push(new Project('MachineLearning D&D', 'Ein Computerprogramm das mittels MachineLearning die Regeln und die Welt von D&D erlernt und mit mehr Samples mehr Wissen generiert und für Spieler einen soliden Gameleader darstellt ', ' asdasd'));
    this.projectList.push(new Project('Automatisierter Service für chinesische Immigraten nach Österreich', 'Ein Webportal auf chinesisch, dass automatisiert Daten für diese einreicht um somit den Immigrationsprozess zu erleichtern ', ' asdasd'));
    this.projectList.push(new Project('AllInOneGame', 'Ein RPG basierend auf Sammelsucht ähnlich wie bei Pokemon, details ... ', 'asd '));
    this.projectList.push(new Project('Chatbot', 'automatisierter Chatbot für diverse Zwecke ', ' '));
  }

}
