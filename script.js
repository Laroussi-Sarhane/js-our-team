/**
 1. creiamo un array con gli oggetti
 2.ogni oggetto ha 3 proprietà nome, ruolo e foto.
 3.Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
 4.Stampare le stesse informazioni su DOM sotto forma di stringhe
 5.Trasformare la stringa foto in una immagine effettiva
 6.
  DATI:

    Wayne Barnett	  Founder & CEO			     wayne-barnett-founder-ceo.jpg
    Angela Caroll	  Chief Editor			       angela-caroll-chief-editor.jpg
    Walter Gordon	  Office Manager		       walter-gordon-office-manager.jpg
    Angela Lopez	   Social Media Manager	   angela-lopez-social-media-manager.jpg
    Scott Estrada	  Developer				       scott-estrada-developer.jpg
    Barbara Ramos	  Graphic Designer		     barbara-ramos-graphic-designer.jpg

 */

  const team = [
    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
      nome: 'Angela Caroll ',
      ruolo: 'Chief Editor',
      foto: 'angela-caroll-chief-editor.jpg'
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: 'walter-gordon-office-manager.jpg'
    },
    {
      nome: 'Angela Lopez	',
      ruolo: 'Social Media Manager',
      foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: 'scott-estrada-developer.jpg'
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: 'barbara-ramos-graphic-designer.jpg'
    }
  ]
  console.log(team);

  for(let teamMember of team){
    console.log(teamMember.nome);
    console.log(teamMember.ruolo);
    console.log(teamMember.foto);

  }

 