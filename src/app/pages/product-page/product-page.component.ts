import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  films: any[] = [{
    id: 1,
    nom: "La cité de la peur",
    real: "Alain Berbérian",
    descriptif: "Odile Deray, attachée de presse, vient au Festival de Cannes pour présenter le film `Red is Dead'. Malheureusement, celui-ci est d'une telle faiblesse que personne ne souhaite en faire l'écho. Cependant, lorsque les projectionnistes du long-métrage en question meurent chacun leur tour dans d'étranges circonstances, `Red is dead' bénéficie d'une incroyable publicité.Serge Karamazov est alors chargé de protéger le nouveau projectionniste du film.",
    annee: 1994,
    img: "https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg",
    details: ""
    },
    {
    id: 2,
    nom: "Le parrain",
    real: "Francis Ford Coppola",
    descriptif: "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un bookmaker. Sollozz `parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe.",
    annee: 1972,
    img: "https://img-4.linternaute.com/U33Gfhf2Daop0ZFmMqbgjsFlbnc=/1500x/smart/85466d7eebed4f248a6c2d4c7f9d436a/ccmcms-linternaute/11411700.jpg",
    details: ""
    },
    {
    id: 3,
    nom: "Fight Club",
    real: "David Fincher",
    descriptif: "Pourvu d'une situation des plus enviable, un jeune homme à bout de nerfs retrouve un équilibre relatif en compagnie de Marla, rencontrée dans un groupe d'entraide. Il fait également la connaissance de Tyler Durden, personnage enthousiaste et charismatique. Ensemble, ils fondent le Fight Club, où ils organisent des combats clandestins et violents, destinés à évacuer l'énergie négative de chacun.",
    annee: 1999,
    img: "https://m.media-amazon.com/images/I/71zEIB3ekZL._AC_SY606_.jpg",
    details: ""
    }
    ]

    albums: any[] = [
      {
      id: 4,
      nom: "The Dark Side of the Moon",
      artiste: "Pink Floyd",
      annee: 1973,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Dark_Side_of_the_Moon_Cover.svg/1200px-The_Dark_Side_of_the_Moon_Cover.svg.png",
      descriptif: "The Dark Side of the Moon (litt. « la face sombre de la Lune ») est le huitième album studio du groupe britannique de rock progressif Pink Floyd, sorti le 1er mars 1973 chez Harvest Records. Le groupe présente une première version de l'album, principalement développée lors de prestations en public, plusieurs mois avant le début de l'enregistrement. Le concept de l'album repose sur les pressions subies par le groupe au cours de leur vie et traite des problèmes apparents de santé mentale dont souffrait l'ancien membre du groupe, Syd Barrett, ayant quitté la formation en 1968. The Dark Side of the Moon est enregistré en deux sessions en 1972 et 1973 aux studios Abbey Road à Londres."
    },
    {
    id: 5,
    nom: "Space Oddity",
    artiste: "David Bowie",
    annee: 1969,
    img: "https://m.media-amazon.com/images/I/81GaOhfPyFL._SL1300_.jpg",
    descriptif: "Space Oddity est le deuxième album studio de David Bowie. Il est sorti en novembre 1969 chez Philips Records au Royaume-Uni sous le titre David Bowie et chez Mercury Records aux États-Unis sous le titre Man of Words / Man of Music. Il est plus connu sous le titre Space Oddity qui est utilisé à partir de sa réédition chez RCA Records en 1972."
    }
    ]



  constructor() { }

  ngOnInit(): void {
  }

}
