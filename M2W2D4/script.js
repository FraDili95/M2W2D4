// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

/*VERSIONE SEMPLICE*/
/*
const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }

  let users = [];
  users.push( marco, paul, amy);
  console.log( users );

  for( let i=0; i <= 2; i++ ){

     if( users[i].isAmbassador ){
        console.log( users[i].name, " ", users[i].lastName," è un ambassator");
     }else{
        console.log( users[i].name, " ", users[i].lastName ,"non è un ambassator");
     }
    }

    let users_ambasciator = [];
    
    for( let i=0; i <= 2; i++ ){

        if( users[i].isAmbassador ){
           users_ambasciator.push(users[i]);
        }    
       }
    console.log(users_ambasciator);
    const prices = [34, 5, 2]
    const shippingCost = 50
    let utenteCheEffettuaLAcquisto = marco
    let  total_price = 0;

        for( let n = 0; n < prices.length; n++){
            total_price += prices[n];
        }

        if( utenteCheEffettuaLAcquisto.isAmbassador ){
             total_price -= (total_price * 0.3); 
             }
        if( total_price <= 100 ){
          total_price += shippingCost;
        }  
            
        console.log( "La spesa totale è ", total_price,"$" );*/

        /*PROVA CON LE FUNZIONI*/
    
     /*
        const marco = {
            name: "Marco",
            lastName: "Rossi",
            isAmbassador: true,
          }
          
          const paul = {
            name: "Paul",
            lastName: "Flynn",
            isAmbassador: false,
          }
          
          const amy = {
            name: "Amy",
            lastName: "Reed",
            isAmbassador: false,
          }
       
          let prices = [34, 5, 2];//VARI PREZZI
          let shippingCost = 50;//COSTO DI SPEDIZIONE
          //let utenteCheEffettuaLAcquisto = marco//NON SERVE A UN CAZZO
          let total_price = 0;//PREZZO TOTALE FINALE
           
          function calculation_price ( user, total_price, prices, shippingCost ){//Dichiarazione parametri
              
            for( let i = 0; i < prices.length; i++ ){//sommo la spesa totale
                total_price += prices[i];
            }
            if( user.isAmbassador ){//eventuale sconto
                total_price -= (total_price) * 0.3;
            }
            if( total_price <= 100 ){//eventuale spedizione
                total_price += 50;
            }  
            return total_price; //valore restituito dalla funzione
          }

          total_price = calculation_price( marco, total_price, prices, shippingCost);
          console.log( "total_price: ", total_price );


          /*fine seconda versione con le funzioni


          /*esperimento personale tipo banca simone*/
        
          const marco = {
            name: "Marco",
            lastName: "Rossi",
            isAmbassador: true,
          }
          
          const paul = {
            name: "Paul",
            lastName: "Flynn",
            isAmbassador: false,
          }
          
          const amy = {
            name: "Amy",
            lastName: "Reed",
            isAmbassador: false,
          }
           
          let items =  ["Dizionario", "Penna", "Gomma", "Astuccio", "Libro", "PChina"];/*Nome aticoli */
          let prices = [34, 5, 2, 8, 55, 88];//VARI PREZZI
          let shippingCost = 50;//COSTO DI SPEDIZIONE
          let total_shop = 0;//carrello

          let users = [];
          users.push( marco, paul, amy);//creo un array con gli utenti
          let utenteCheEffettuaLAcquisto;
          let flag = false;

          do{//Verifico che l'uente inserito esista
            utenteCheEffettuaLAcquisto = prompt("Benvenuti su Amazzone\nInserire nome utente:");//chiedo utente 
            utenteCheEffettuaLAcquisto = utenteCheEffettuaLAcquisto.toLocaleLowerCase();//lo metto in minuscolo per sicurezza
            for( let x = 0; x < users.length; x++ ){//cerca in users
              if( users[x].name.toLocaleLowerCase() == utenteCheEffettuaLAcquisto ){//verifica nell database utenti
                flag = true;
                break;
              }//fine if
            }//fine for
            if( flag === true ){
              console.log("Benvenuto ", utenteCheEffettuaLAcquisto, "!");//messaggio di benvenuto
            }else{
              console.log("L'utente ", utenteCheEffettuaLAcquisto, "non esiste!");//messaggio di errore
            }
          }while( flag === false);//finchè non si inserisce utente valido
           //FINE CONTROLLO
           //INIZIO MENU INTERATTIVO
           let scelta;

           while( !( scelta >= 1 && scelta <=3) ){//menu
            //chiede all'utenta una scelta
                scelta = prompt(
                  "Scegli l'operazione voluta:\n1)Effetua logout\n 2)Aggiungi acquisti\n 3)Salva ed esci\n" );
                scelta = parseInt(scelta);//trasforma la scelta in un numero
             //-------------------------------------------------------------
                if( scelta === 1){//LOGOUT
                  do{//Verifico che l'uente inserito esista
                    flag = false;
                    utenteCheEffettuaLAcquisto = prompt("EFFETTUATO LOGOUT\nInserire nome utente:");//chiedo utente 
                    utenteCheEffettuaLAcquisto = utenteCheEffettuaLAcquisto.toLocaleLowerCase();//lo metto in minuscolo per sicurezza
                    for( let x = 0; x < users.length; x++ ){//cerca in users
                      console.log(flag);
                      if( users[x].name.toLocaleLowerCase() == utenteCheEffettuaLAcquisto ){//verifica nell database utenti
                        flag = true;
                        break;
                      }//fine if
                    }//fine for
                    if( flag === true ){
                      console.log("Benvenuto ", utenteCheEffettuaLAcquisto, "!");//messaggio di benvenuto
                    }else{
                      console.log("L'utente ", utenteCheEffettuaLAcquisto, "non esiste!");//messaggio di errore
                    }
                  }while( flag === false);//finchè non si inserisce utente valido
                  scelta = null;
                }
             //-------------------------------------------------------------
                if( scelta === 2){//AGGIUNGI AL CARRELLO
                  //stampa articoli
                  for( let i=0; i<items.length; i++ ){
                    console.log( "Codice:", i, items[i], " ", prices[i], "€");
                  }//fine lista articoli
                 //---------------------
                  
                  do{
                    let quantity; let code_item;
                    code_item = parseInt( prompt( "Scegli codice articolo") );
                    quantity = parseInt( prompt( "Quantità desiderata") );
                    total_shop += prices[code_item] * quantity;
                    if( quantity <= 0 || !( code_item >= 0 && scelta < items.length) ){
                      console.log("EFFUTUATA SCELTA ERRATA");
                    }
                  }while( quantity <= 0 || !( code_item >= 0 && scelta < items.length) )
                  scelta = null;
                }
               //-----------------------------------------------------------------------------  
               //esci
                if( scelta === 3){
                  console.log("Hai speso:", total_shop, "€");
                  console.log("Grazie e arrivederci");
                  break;
                }

             //--------------------------------------------------------------------------------
             //eventualità scelta errata generale
              if( !( scelta >= 1 && scelta <=3 ) && scelta !== null ){
                 console.log("Scelta non disponibile");
               }
              }
             
              
           
          
          