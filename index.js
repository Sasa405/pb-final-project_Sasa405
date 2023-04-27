
/* **
 * Das Modul prompt-sync ist hier erforderlich!!!
 * Installieren von prompt-sync mit "npm install prompt-sync".
 */
              /**
               * Diese Zeile importiert die prompt-sync-Bibliothek, die es dem Code ermöglicht, den Benutzer zur Eingabe in    der Befehlszeile aufzufordern.
               */
const prompt = require('prompt-sync')();



/**
 *Dieser JavaScript-Code simuliert einen Kampf zwischen dem Team des Spielers und einem Gegner aus dem Anime "One Piece".
 
 Das Team des SPIELERS hat sechs   Mitglieder:
jedes mit einem   Namen, 
                  Lebenspunkten (hp) und 
                  Angriffskraft (attack). 



Der FEIND hat ebenfalls einen     Namen,
                                  Lebenspunkte und eine 
                                  Angriffskraft (attack).

Das Spiel besteht aus einer Kampfschleife, in der der Spieler einen Charakter auswählt, der den Feind angreift oder wegläuft,
und dann greift der Feind einen zufälligen Spieler an.
 */





/** 
 * [ ... ]: Diese Zeile definiert ein Array von Objekten, die das Team des Spielers darstellen.
 *         Jedes Objekt hat einen Namen, eine Stärke (HP) und ein Angriffsattribut (attack).
 */
const players = [
  { name: 'Monkey D. Luffy', hp: 100, attack: 20 },
  { name: 'Roronoa Zoro', hp: 100, attack: 25 },
  { name: 'Sanji', hp: 100, attack: 22 },
  { name: 'Nami', hp: 100, attack: 15 },
  { name: 'Usopp', hp: 100, attack: 18 },
  { name: 'Tony Tony Chopper', hp: 100, attack: 19 }
];




/**
 * { ... }: Diese Zeile definiert ein Objekt, das den Feind darstellt, mit einem Namen, Stärke (HP) und Angriffsattribut (attack).
 */
const enemy = {
  name: 'Akainu',
  hp: 150,
  attack: 30
};






/**
 *  Diese Zeile gibt eine Nachricht aus, die den Benutzer im Spiel willkommen heißt.
 */
console.log('Welcome to the One Piece battle!?\n');

//Diese Zeile gibt eine Meldung aus, die die Anzahl der Charaktere im Team des Spielers und den Namen des Gegners angibt.
console.log(`You have ${players.length} characters and your opponent is ${enemy.name}.`);









//Erstellen eines Loops
while (players.length > 0 && enemy.hp > 0) {    /**
                                                * Diese Zeile startet eine while-Schleife, die so lange läuft, wie noch Spieler im Team sind und der Gegner noch HP hat.
                                                */



  // Auswahl eines zufälligen Spielers für den Angriff
  const playerIndex = Math.floor(Math.random() * players.length); /**
                                                                  *generiert eine zufällige Ganzzahl zwischen 0 und der Länge des Spieler-Arrays, die  verwendet wird, um einen zufälligen Spieler aus der Mannschaft für den Angriff auszuwählen.
                                                                  */


  const player = players[playerIndex];     //wählt das player-objekt aus dem players-Array anhand des zufällig generierten Index aus.




  // Aufforderung an den Benutzer, zu handeln ("fight" or "run").     Implementierung der prompt-sync-funktion !!!
  const action = prompt(`${player.name}, do you want to fight (f) or run (r)? \n`);
  //In dieser Zeile wird der Benutzer aufgefordert, eine Aktion für den ausgewählten Spieler einzugeben, entweder 'f' für kämpfen oder 'r' für weglaufen.







  if (action === 'f') {                   //Diese Zeile prüft, ob der Benutzer 'f' zum Kämpfen ausgewählt hat.

    // Berechnen des Schaden für den Feind
    const damage = player.attack;         /*
                                          Diese Zeile berechnet die Menge an "damage", die der Spieler dem Gegner zufügt, indem das Angriffsattribut "attack" des Spielers verwendet wird.
                                          */
                                          
    enemy.hp -= damage;              //Hier wird die HP des Gegners (enemy) reduziert um den vom Spieler zugefügten Schaden (damage).





    if (enemy.hp <= 0) {             //Hier wird geprüft,ob die HP des Gegners kleiner oder gleich 0 ist,
                                    //was bedeutet,dass der Spieler gewonnen hat.            



      console.log(`${player.name} did ${damage} damage to ${enemy.name}.\n`); /*
                                                                            *Diese Zeile gibt eine Meldung aus, die den Angriff des Spielers und die Höhe des dem Feind zugefügten Schadens angibt.
                                                                             */



      console.log(`${enemy.name} fainted. You win!`);                     /*
                                                                          *Diese Zeile gibt eine Meldung aus, die besagt, dass der Gegner besiegt wurde und der Spieler gewonnen hat.
                                                                          */


      break;      //Falls der Spieler oder Feind besiegt wurde! Wird die while-schleife verlassen da das spiel beendet ist!


    } 


    else {        //Wird der Feind nicht besiegt, geht es hier mit der nächsten Runde weiter!


      console.log(`${player.name} did ${damage} damage to ${enemy.name}.`); /*
                                                                            *Diese Zeile gibt eine Meldung aus, die den Angriff des Spielers und die Höhe des dem Feind zugefügten Schadens angibt.
                                                                            */




      console.log(`${enemy.name} has ${enemy.hp} HP remaining.`);          /*
                                                                            *Diese Zeile gibt eine Meldung aus, die den Namen des Feindes und seine verbleibende Lebensenergie angibt.
                                                                            Da der Name des Gegners "Akainu" lautet und er noch 15 Lebenspunkte hat, würde die Meldung lauten: "Akainu hat noch 15 Lebenspunkte."
                                                                            "Akainu has 15 HP remaining"
                                                                            */




      // Berechnen des Schaden für den Spieler
      const enemyDamage = enemy.attack;                     /*
                                                            *Diese Zeile berechnet die Menge an "damage", die der Gegner dem Spieler zufügt, indem das Angriffsattribut "attack" des Gegners verwendet wird.
                                                            */



      player.hp -= enemyDamage;    //Hier wird die HP des Spielers (player) reduziert um den vom Gegner zugefügten Schaden (damage).




      if (player.hp <= 0) {              //Hier wird geprüft, ob die Lebenspunkte (hp) des Spielers kleiner oder gleich 0 sind.



        console.log(`${player.name} fainted. Removing from battle.`);   /*
                                                                        *Ist dies der Fall, wird eine Nachricht mit dem Namen des Spielers und dem Hinweis, dass er in Ohnmacht gefallen ist, ausgegeben.
                                                                        "fainted"

                                                                        Außerdem wird der Spieler aus dem Kampf entfernt, indem er aus der Liste der Spieler entfernt wird.            "Removing from battle"
                                                                        */




        players.splice(playerIndex, 1);                               /*
                                                                      *Hier wird ein Element (Spieler) aus einem Array entfernt. Das erste Argument (playerIndex) ist der Index des Elements (Spieler) im Array, das entfernt wird. Das zweite Argument (1) teilt dem Code mit, wie viele Elemente aus dem Array entfernt werden sollen. In diesem Fall ist es nur ein Element (also der Spieler der keine HP mehr hat).
                                                                      */



      } 
      else {
        console.log(`${enemy.name} did ${enemyDamage} damage to ${player.name}.`);  /*
                                                                                    *Diese Zeile gibt eine Meldung aus, die den Angriff des Gegners und die Höhe des dem Spieler's zugefügten Schadens angibt.
                                                                                    */




        console.log(`${player.name} has ${player.hp} HP remaining.`);       /*
                                                                            *Diese Zeile gibt eine Meldung aus, die den Namen des Spieler's und seine verbleibende Lebensenergie angibt.
                                                                            Wenn der Name des Spieler's "Monkey D. Luffy" lautet und er noch 20 Lebenspunkte hat, würde die Meldung lauten: "Monkey D. Luffy hat noch 20 Lebenspunkte."
                                                                            "Monkey D. Luffy has 20 HP remaining"
                                                                            */
      }
    }


  } 

  else if (action === 'r')                                                //Mit dieser Anweisung wird geprüft, ob die Aktion gleich 'r' ist. 

  {
    console.log(`${player.name} is running away!`);       //Ist dies der Fall, gibt das Terminal eine Meldung aus,die besagt,dass der Spieler wegläuft.
                                                                                                                        //    "is running away!"





    // Der Spieler wird aus dem Kampf entfernt da er nicht mehr genügend "HP" besitzt.
    players.splice(playerIndex, 1);
  }
  else 
  {
    console.log(`Invalid action. Please enter 'f' to fight or 'r' to run.`);      /*
                                                                                  *Hier wird der Benutzer aufgefordert, entweder "f" für "fight" 
                                                                                  der "r" für "run" als Eingabe einzugeben.
                                                                                  
                                                                                  Wenn der Benutzer "f" eingibt, führt der Code eine Aktion aus , wenn er "r" eingibt, führt der Code eine andere Aktion aus. Wenn der Benutzer etwas anderes als "f" oder "r" eingibt,
                                                                                  gibt der Code eine Fehlermeldung aus.
                                                                                  "Invalid action. Please enter 'f' to fight or 'r' to run."
                                                                                  */
  }
}




// Wenn es keine weiteren Spieler gibt, verliert der Spieler
if (players.length === 0)                                                         /*
                                                                                  *Diese if-Anweisung besagt, dass, wenn die Länge des Spieler-Arrays 
                                                                                  gleich 0 ist, die Konsole eine Meldung ausgibt.
                                                                                  : z.b wenn alle Spieler von Beginn an wegrennen würden!!
                                                                                  */

{
  console.log('You have no more characters. You lose.');   //die besagt "Du hast keine weiteren Charakter.Du hast verloren"     
                                                           //           "You have no more characters. You lose."                               
}







