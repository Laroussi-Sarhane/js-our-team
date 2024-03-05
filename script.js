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
  const output = document.querySelector('.output');
  const team = [

    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      foto: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
      nome: 'Angela Caroll ',
      ruolo: 'Chief Editor',
      foto: "img/angela-caroll-chief-editor.jpg"
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: "img/angela-lopez-social-media-manager.jpg"
    },
    {
      nome: 'Angela Lopez	',
      ruolo: 'Social Media Manager',
      foto: "img/angela-caroll-chief-editor.jpg"
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: "img/scott-estrada-developer.jpg"
    },
    {  
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: "img/barbara-ramos-graphic-designer.jpg"
    }
  ]
  console.log(team);


  //cosi vado a prendere ogni membro oggetto allinterno dell'array con tutte le loro caratteristiche nome ruolo e foto  

  for(let teamMember of team){
    console.log(teamMember.nome);
    console.log(teamMember.ruolo);
    console.log(teamMember.foto);

    output.innerHTML += `

      <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="${teamMember.foto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${teamMember.nome}</h5>
          <p class="card-text">${teamMember.ruolo}</p>
        </div>
      </div>
    </div>
    
    
    `



  }


 