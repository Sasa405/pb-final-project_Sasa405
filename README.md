# pb-final-project_Sasa405
Javascript Terminal Simulation:    One Piece Battle 




******************************************************************************************************************************

# Projekt - Inhaltsangabe: One Piece Battle

******************************************************************************************************************************

       Das Projekt One Piece Battle ist ein JavaScript-Code, der einen Kampf zwischen dem Spieler-Team 
       und einem Gegner aus dem Anime "One Piece" simuliert. 
       
       
       Das Team des Spielers besteht aus sechs Mitgliedern,
       jeder mit einem Namen, Lebenspunkten (hp) und Angriffskraft (attack). 
       
       Der Gegner hat ebenfalls einen Namen, Lebenspunkte und eine Angriffskraft. 
       
       Das Spiel besteht aus einer Kampfschleife, in der der Spieler einen Charakter auswählt, der den Feind angreift oder wegläuft und dann greift der Feind einen zufälligen Spieler an. 
       




Die folgenden Inhalte sind in diesem Projekt enthalten:


*  1. **Das Modul prompt-sync ist erforderlich!**

      Die prompt-sync-Bibliothek ist eine Node.js-Bibliothek, die verwendet wird, um synchron auf Benutzereingaben zu warten.
      Sie wird verwendet, um Eingaben von Benutzern in der Konsole zu lesen und in Programmen zu verarbeiten.
           
        * Um prompt-sync in einem JavaScript-Code in VS Code zu verwenden,muss Node.js und npm *(Node Package Manager)* 
          auf dem Computer installiert sein.
          Sobald man Node.js installiert hat, kann man das Terminal in VS Code öffnen und prompt-sync installieren.
    


*  2. Um prompt-sync zu installieren, muss das Paket über NPM installiert werden. Dies kann mit dem Befehl 
      **"npm install prompt-sync"** erfolgen.

      Um zu sehen ob prompt-sync,nodemon,npm,jsdoc usw. installiert ist, nutze dazu das Terminal!

      Terminal Befehl: **npm list -g**
      Dieser befehl sollte dann dieses, oder ähnliches anzeigen:

     **/home/user/.nvm/versions/node/v19.7.0/lib**
     **├── corepack@0.16.0**
     **├── jsdoc@4.0.2**
     **├── nodemon@2.0.22**
     **└── npm@9.5.0**


*  3. Importieren der prompt-sync-Bibliothek, die es dem Code ermöglicht, den Benutzer zur Eingabe in der Befehlszeile aufzufordern.

        * Importieren der prompt-sync-Bibliothek mit der **require()-Funktion** und zuweisen einer Variablen.
                                         **const prompt = require('prompt-sync')();**

        * Sobald man die prompt-sync-Bibliothek importiert hat, kann mann die prompt()-Funktion verwenden, 
          um Benutzereingaben von der Befehlszeile zu erhalten.

          Beispiel:     **const name = prompt('What is your name? ');**
                        **console.log(`Hello, ${name}!`);**
                    
                        In diesem Beispiel fordert die Funktion prompt() den Benutzer auf, seinen Namen einzugeben, 
                        und der eingegebene Wert wird in der Variablen name gespeichert. 
                        Die Anweisung console.log() gibt dann eine Begrüßungsnachricht auf der Konsole aus.



*  4. Ein Array von Objekten, die das Team des Spielers darstellen. Jedes Objekt hat einen Namen, 
      eine Stärke und ein Angriffsattribut.

*  5. Ein Objekt, das den Feind darstellt, mit einem Namen, Stärke und Angriffsattribut.

*  6. Eine Nachricht, die den Benutzer im Spiel willkommen heißt.

*  7. Eine Meldung, die die Anzahl der Charaktere im Team des Spielers und den Namen des Gegners angibt.

*  8. Eine while-Schleife, die so lange läuft, wie noch Spieler im Team sind und der Gegner noch HP hat.

*  9. Eine zufällige Ganzzahl zwischen 0 und der Länge des Spieler-Arrays wird generiert,
      um einen zufälligen Spieler aus der Mannschaft für den Angriff auszuwählen,
      indem die Math.random()-Funktion verwendet wird, während der Schaden für den Feind basierend auf dem Schaden des gewählten Spielers berechnet wird.

* 10. Eine Aufforderung an den Benutzer, eine Aktion für den ausgewählten Spieler einzugeben, entweder 'f' für kämpfen oder 
      'r' für weglaufen.

* 11. Die Berechnung der Menge an "damage", die der Spieler dem Gegner zufügt, indem das Angriffsattribut "attack" 
      des Spielers verwendet wird.

* 12. Die Reduzierung der HP des Gegners (enemy) um den vom Spieler zugefügten Schaden (damage).

* 13. Eine Meldung, die den Angriff des Spielers und die Höhe des dem Feind zugefügten Schadens angibt.

* 14. Eine Meldung, die besagt, dass der Gegner besiegt wurde und der Spieler gewonnen hat.






     Das Projekt One Piece Battle ist eine unterhaltsame Art, um JavaScript-Fähigkeiten zu üben und 
     gleichzeitig in die Welt von "One Piece" einzutauchen.









# Bedeutung:  "3.1k (gzipped: 1.4k)"  


*****************************************************************************************************************

In dem Kommentar geht es um die Bedeutung der Größenangabe "3.1k (gzipped: 1.4k)", 
die in Zusammenhang mit der Verwendung der Bibliothek "prompt-sync" in diesem JavaScript-Programm steht.


*****************************************************************************************************************


Hier sind die wichtigsten Punkte des Kommentars in Aufzählungen zusammengefasst:



*    Die Größenangabe *"3.1k (gzipped: 1.4k)"* bezieht sich auf die Größe des Codes nach dem Hinzufügen der Zeile 
     **"const prompt = require('prompt-sync')();"** zu einem JavaScript-Programm.

*    Der Wert von 3.1k zeigt die Größe des unkomprimierten Codes an, 
     während der Wert von 1.4k die Größe nach der Komprimierung durch den *Gzip-Algorithmus angibt.*

*    Die Größenangabe bezieht sich nur auf den Code, der ausgeführt wird, 
     und nicht auf die Größe der Bibliothek  "prompt-sync", die durch die require-Anweisung geladen wird.

*    Die Größenangabe ist nützlich, um die Auswirkungen von Änderungen am Code auf die Gesamtgröße einer Anwendung 
     abzuschätzen und sicherzustellen, dass der Code effizient bleibt und nicht zu groß wird.








    # Bedeutung: Gzip-Algorithmus?



*   Der Gzip-Algorithmus ist ein *Kompressionsalgorithmus*, der verwendet wird, um die Größe von Dateien zu reduzieren. 
    Er wurde in den späten 1980er Jahren entwickelt und ist heute einer der am häufigsten verwendeten Kompressionsalgorithmen.



*   Der Gzip-Algorithmus verwendet eine Kombination aus verschiedenen Techniken, um Dateien zu komprimieren. 
    Dazu gehören die Entfernung redundanter Informationen, die *Verwendung von Huffman-Codierung* zum Codieren von Daten 
    *(https://de.wikipedia.org/wiki/Huffman-Kodierung)*

    die Verwendung von *Lempel-Ziv-Welch (LZW)*   **(https://de.wikipedia.org/wiki/Lempel-Ziv-Welch-Algorithmus)**
    zur Erkennung von Mustern und die Verwendung von einer Bitmaske zur Kennzeichnung von Wiederholungen.



*   Die Komprimierung mit dem Gzip-Algorithmus führt in der Regel zu einer erheblichen Reduzierung der Dateigröße, 
    was die Übertragung und Speicherung von Dateien effizienter macht.
    Der Gzip-Algorithmus wird häufig in Webanwendungen eingesetzt, um die Größe von HTTP-Antworten zu reduzieren, 
    was die Ladezeit von Webseiten verkürzt.







# S.M.
Copyright of written text © 2023 S.M. 
This is the official repository for S.M. Here you can find all sorts of resources related to S.M. 














# © 2023 Wikimedia Foundation.All rights reserved.
# Used Link : (https://de.wikipedia.org/wiki/Huffman-Kodierung)
# Used Link : (https://de.wikipedia.org/wiki/Lempel-Ziv-Welch-Algorithmus)








    

    