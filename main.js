const montantTotal = 102470;

function menu() {
  alert("Choisissez une option :\n" +
    "1. Solde de mon compte\n" +
    "2. Transfert d'argent\n" +
    "3. Paiement de facture\n" +
    "4. Achats de crédit\n" +
    "5. quitter");
}

function isNumber(value) {
  return /^\d+$/.test(value);
}

function balance() {
  alert(`Bienvenu dans le service orange. Votre solde actuel est : ${montantTotal} FCFA`);
}

function transfere() {
  let montantTransfere = prompt("Saisissez le montant à transférer : ");
  let phone = prompt("Entrez le numéro de téléphone : ");

  if (!isNumber(montantTransfere) || parseInt(montantTransfere) <= 0) {
    return alert('Veuillez saisir un montant positif et un numéro valide');
  }

  if (parseInt(montantTransfere) > montantTotal) {
    return alert('Votre solde est insuffisant pour effectuer cette transaction. Merci de recharger votre compte.');
  }

  alert(`Vous avez transféré un montant de ${montantTransfere} FCFA au ${phone}. Votre nouveau solde : ${montantTotal} FCFA Ref:MP2566278.62822.C8282Merci.OFMS`);

  montantTotal -= parseInt(montantTransfere);
}

function payer() {
  let choice = prompt("Choisissez le type de paiement :\n" +
    "1. Liquide\n" +
    "2. Chèque\n" +
    "3. Quitter");

  switch (choice) {
    case '1':
      let amount = prompt("Saisissez le montant en entier : ");

      alert(`Vous avez payé ${amount} FCFA en liquide.`);
      break;
    case '2':
      let chequeAmount = prompt("Saisissez le montant en chèque : ");

      alert(`Vous avez payé ${chequeAmount} FCFA par chèque.`);
      break;
    case '3':
      break;
    default:
      alert("Veillez choisir une option valide s'il vous plaît !");
      payer();
  }
}

function credit() {
  let phoneNumber = prompt("Entrez le numéro de téléphone : ");
  let montantCredit = prompt("Entrez le montant du crédit : ");

  if (!isNumber(montantCredit) || parseInt(montantCredit) <= 0) {
    return alert('Veuillez saisir un montant positif et un numéro valide');
  }

  if (parseInt(montantCredit) > montantTotal) {
    return alert('Votre solde est insuffisant pour effectuer cette transaction. Merci de recharger votre compte.');
  }

  alert(`Vous avez acheté ${montantCredit} FCFA de crédit pour ${phoneNumber}. Votre nouveau solde : ${montantTotal} FCFA Ref:MP2566278.628282.C8282Merci.OFMS`);

  montantTotal -= parseInt(montantCredit);

}

function quitter() {
  alert("Orange vous remercie de votre fidélité, à bientôt !");
}

menu();

let choice = prompt("Choix : ");
switch (choice) {
  case '1':
    balance();
    break;
  case '2':
    transfere();
    break;
  case '3':
    payer();
    break;
  case '4':
    credit();
    break;
  case '5':
    quitter();
    break;
  default:
    alert("Veillez choisir une option valide s'il vous plaît !");
}