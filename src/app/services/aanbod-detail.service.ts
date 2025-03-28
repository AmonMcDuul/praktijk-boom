import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AanbodDetailService {
  
  treatments = [
    {
      id: 1,
      urlName: 'emdr-enkelvoudig-trauma',
      name: 'EMDR enkelvoudig trauma',
      intro: 'Een effectieve behandeling voor trauma\'s met bewezen resultaten.',
      description: 'EMDR (Eye Movement Desensitization and Reprocessing) is een therapie die helpt om traumatische herinneringen te verwerken. Door middel van oogbewegingen of andere afleidende stimuli wordt het natuurlijke verwerkingssysteem van de hersenen gestimuleerd.',
      targetAudience: 'Deze therapie is geschikt voor mensen die last hebben van een enkelvoudig trauma, zoals een ongeluk, verlies of een schokkende gebeurtenis.',
      expectations: 'Tijdens de sessies werk je samen met de therapeut aan het verwerken van de traumatische herinnering. Je kunt emotionele reacties ervaren, maar deze nemen af naarmate de behandeling vordert.',
      duration: 'Een EMDR-behandeling bestaat meestal uit 3 tot 6 sessies van 60 tot 90 minuten.'
    },
    {
      id: 2,
      urlName: 'cognitieve-gedragstherapie',
      name: 'Cognitieve gedragstherapie',
      intro: 'Doorbreek negatieve gedachten en ontwikkel helpende gedragspatronen.',
      description: 'Cognitieve gedragstherapie (CGT) richt zich op het veranderen van negatieve gedachten en gedragspatronen die problemen veroorzaken. Door middel van oefeningen en gesprekken leer je anders naar situaties te kijken.',
      targetAudience: 'Deze therapie is geschikt voor mensen die last hebben van angst, depressie, stress of andere psychische klachten.',
      expectations: 'Je werkt actief aan het herkennen en uitdagen van negatieve gedachten. Daarnaast krijg je praktische oefeningen om nieuw gedrag uit te proberen.',
      duration: 'Een CGT-behandeling bestaat meestal uit 10 tot 15 sessies van 60 minuten.'
    },
    {
      id: 3,
      urlName: 'adhd-diagnostiek-en-coaching',
      name: 'ADHD Diagnostiek en coaching',
      intro: 'Heb je al langer vermoedens van AD(H)D? Samen onderzoeken we of je inderdaad ADHD hebt.',
      description: 'ADHD-diagnostiek bestaat uit een uitgebreid onderzoek naar je klachten en gedrag. Daarnaast bieden we coaching om beter om te gaan met ADHD-symptomen.',
      targetAudience: 'Deze behandeling is geschikt voor volwassenen die vermoeden dat ze ADHD hebben of al gediagnosticeerd zijn.',
      expectations: 'Je krijgt inzicht in je ADHD-symptomen en leert praktische strategieën om hiermee om te gaan.',
      duration: 'De diagnostiek bestaat uit 2 tot 3 sessies. Coaching kan variëren van 5 tot 10 sessies.'
    },
    {
      id: 4,
      urlName: 'wandelsessies',
      name: 'Wandelsessies',
      intro: 'Al wandelend op weg naar minder stress & meer balans en plezier in je leven.',
      description: 'Tijdens wandelsessies combineren we gesprekken met beweging in de natuur. Dit helpt om stress te verminderen en nieuwe inzichten te krijgen.',
      targetAudience: 'Deze sessies zijn geschikt voor mensen die behoefte hebben aan een actieve en ontspannen vorm van therapie.',
      expectations: 'Je wandelt in een rustig tempo en bespreekt onderweg je vragen of problemen. De natuur helpt om tot rust te komen.',
      duration: 'Een wandelsessie duurt 60 tot 90 minuten. Het aantal sessies is flexibel.'
    },
    {
      id: 5,
      urlName: 'act-acceptance-and-commitment-therapy',
      name: 'Acceptance and Commitment Therapy (ACT)',
      intro: 'Een therapie die helpt om gedachten en emoties te accepteren en waardevolle acties te ondernemen.',
      description: 'Acceptance and Commitment Therapy (ACT) is een vorm van therapie die zich richt op het accepteren van gedachten en emoties in plaats van ertegen te vechten. Het doel is om psychologische flexibiliteit te ontwikkelen, zodat je kunt handelen in lijn met je waarden, zelfs in moeilijke situaties.',
      targetAudience: 'Deze therapie is geschikt voor mensen die vastlopen in negatieve gedachtenpatronen, emotionele pijn ervaren of moeite hebben om hun doelen te bereiken. Het is ook effectief bij angst, depressie en chronische pijn.',
      expectations: 'Tijdens de sessies leer je mindfulness-technieken om gedachten en emoties te observeren zonder erdoor overweldigd te raken. Daarnaast werk je aan het identificeren van je waarden en het ondernemen van acties die hierop zijn afgestemd.',
      duration: 'Een ACT-behandeling bestaat meestal uit 8 tot 12 sessies van 60 minuten.'
    },
    {
      id: 6,
      urlName: 'schematherapie',
      name: 'Schematherapie',
      intro: 'Ontdek en verander diepgewortelde patronen die je dagelijks leven beïnvloeden.',
      description: 'Schematherapie is een integratieve therapie die elementen combineert uit cognitieve gedragstherapie, hechtingstheorie en experiëntiële technieken. Het richt zich op het identificeren en veranderen van disfunctionele schema\'s - diepgewortelde overtuigingspatronen die in de kindertijd zijn ontstaan en die nog steeds invloed hebben op je denken, voelen en handelen.',
      targetAudience: 'Deze therapie is bij uitstek geschikt voor mensen met hardnekkige emotionele problemen, persoonlijkheidsproblematiek of voor wie andere therapieën onvoldoende hebben geholpen. Het is effectief bij onder andere chronische depressie, angststoornissen en relatieproblemen.',
      expectations: 'Je werkt aan het herkennen van je schema\'s en modi (emotionele toestanden), en leert deze te veranderen door middel van gesprekken, imaginatie-oefeningen en ervaringsgerichte technieken. De therapeut biedt hierbij een "corrigerende emotionele ervaring".',
      duration: 'Een schematherapie behandeling duurt gemiddeld 25 tot 50 sessies van 60 minuten, afhankelijk van de complexiteit.'
    },
    {
      id: 7,
      urlName: 'supervisie-gz-opleiding',
      name: 'Supervisie GZ-opleiding',
      intro: 'Begeleiding en ondersteuning tijdens je opleiding tot GZ-psycholoog, gericht op persoonlijke groei en professionele ontwikkeling in je werk.',
      description: 'Supervisie is een essentieel onderdeel van de opleiding tot GZ-psycholoog. Het biedt begeleiding en ondersteuning bij het ontwikkelen van professionele vaardigheden, het reflecteren op je handelen en het omgaan met complexe casussen.',
      targetAudience: 'Deze supervisie is bedoeld voor aankomend GZ-psychologen die hun vaardigheden willen verbeteren en zich willen voorbereiden op de praktijk. Het is ook geschikt voor psychologen die zich verder willen ontwikkelen in hun vakgebied.',
      expectations: 'Tijdens de supervisiesessies bespreek je casussen uit je praktijk, reflecteer je op je handelen en krijg je feedback. Daarnaast werk je aan persoonlijke leerdoelen en professionele groei.',
      duration: 'Supervisie vindt meestal plaats in 10 tot 15 sessies van 60 minuten, afhankelijk van de behoeften en voortgang.'
    }
  ];

  constructor() { }

  getTreatments() {
    return this.treatments;
  }

  getTreatmentById(id: number) {
    return this.treatments.find(treatment => treatment.id === id);
  }

  getTreatmentByUrlName(name: string) {
    return this.treatments.find(treatment => treatment.urlName === name);
  }
}
