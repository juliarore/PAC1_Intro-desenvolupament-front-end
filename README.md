# PAC 1 - Introducció al desenvolupament front-end

## Dades bàsiques

- **Nom i cognoms**: Júlia Romero Remacha
- ***Login* UOC**: jromerorem
- **Repositori GitHub**: [PAC1_Intro-desenvolupament-front-end](https://github.com/juliarore/PAC1_Intro-desenvolupament-front-end)

---

## Aclariments
- El correu electrònic configurat al *git config* és el meu personal (**juliarore6@gmail.com**), ja que el tinc vinculat a repositoris d’altres projectes. Quan vaig adonar-me’n, la PAC ja estava força avançada; per això no he canviat l’email pel de la UOC (**jromerorem@uoc.edu**), però si és un requisit important ho tindré en compte per les pròximes pràctiques.
- Els primers *commits* tenen un estil diferent perquè desconeixia com es redactaven correctament els missatges. Després de consultar aquest dubte al professor de l’assignatura, vaig seguir les seves recomanacions per redactar-los en un format adequat i professional.   

---

## Descripció de la pràctica

Aquesta pràctica m'ha servit per treballar la manipulació del DOM, la consulta d'APIs externes i l'ús del *Local Storage* mitjançant exercicis dinàmics i realistes.

També m'ha permès familiaritzar-me amb la redacció de *commits* i l’ús de *Markdown* al `README.md`.

---

### Exercici 1: *Form Validator*
El primer exercici consisteix a crear un formulari i implementar les validacions necessàries per assegurar que les dades introduïdes per l'usuari siguin correctes. A més, s'han aplicat estils visuals per mostrar missatges d’error i d’èxit segons el resultat de les validacions.

#### Millores realitzades
- S'ha afegit un ***tooltip* (*password-hint*)** al camp de la contrasenya per informar l’usuari dels requisits de forma clara.
- S'ha modificat el **missatge d'error** del camp de confirmació de la contrasenya (*password-confirmation*) per substituir “Password2 is required” per "Password confirmation is required", fent-lo més coherent.
- S'ha afegit un efecte ***hover* al botó *Submit*** per millorar la interacció en passar el cursor per sobre.

#### Dificultats
- La principal dificultat ha estat el disseny del *password hint*, ja que al principi apareixia sota els altres elements del formulari i el text del contenidor no quedava ben alineat. El problema es va solucionar amb les propietats CSS `position` i `z-index`.

#### Aclariments
- En un primer moment s'havia considerat fer una **doble validació** del formulari amb HTML i JavaScript, però els estils aplicats amb JavaScript desapareixien perquè el navegador no arribava a executar el codi. Per aquest motiu, s'ha optat per **mantenir únicament la validació amb JavaScript**.

---

### Exercici 2: *Exchange Rate Calculator*
El segon exercici ha consistit a desenvolupar una calculadora de canvi de divises que permet a l’usuari seleccionar dues monedes i calcular l’equivalència entre elles en temps real. S'ha utilitzat una API externa per obtenir els valors actualitzats i s'ha manipulat el DOM per mostrar els resultats de manera dinàmica.

#### Millores realitzades
- S'ha afegit un **indicador de càrrega (*spinner*)** que es mostra mentre es fa la petició a l’API, així l’usuari sap que l’aplicació està processant la informació. Aquest ***loader*** s'ha dissenyat amb l'animació CSS `@keyframes spin`.
- S'han implementat **missatges d'error** visuals per informar l’usuari si hi ha algun problema amb la connexió o la resposta de l’API.

#### Dificultats
- El principal repte ha estat gestionar la **visibilitat de l’*spinner*** durant la petició `fetch`, controlant en quin moment s’havia de mostrar i d'ocultar segons l’estat de la sol·licitud.
- També ha estat complicat entendre el **funcionament la Fetch API**, concretament la transformació de les respostes al format JSON.

---

### Exercici 3: *Movie Seat Booking*
El tercer exercici consisteix a crear una aplicació per reservar seients al cinema, on l’usuari pot seleccionar la pel·lícula, la moneda i els seients desitjats. El preu total es calcula automàticament segons el nombre de seients i la moneda escollida, utilitzant l'API de l'exercici anterior per convertir els preus. Els seients ocupats es mostren de manera diferent i els seients disponibles es poden seleccionar i desseleccionar. 

#### Millores realitzades
- Tal com s'especificava a l'enunciat, s'ha implementat la **conversió de divises** a l'aplicació per permetre a l'usuari canviar la moneda i veure el preu total actualitzat.
- A més, s'ha implementat l'emmagatzematge de les dades al *Local Storage* per mantenir la informació si es recarrega la pàgina.

#### Dificultats
- El més complicat ha estat aconseguir que els preus de les pel·lícules als `option` i el preu total s'actualitzessin correctament en funció de la moneda seleccionada.
- També ha estat un petit repte entendre com emmagatzemar i recuperar correctament les dades del *Local Storage*, ja que era la primera vegada que treballava amb aquesta funcionalitat.
- Pel que fa al codi, he procurat mantenir-lo ben estructurat, però a mesura que s'anava fent més llarg, em sorgia el dubte sobre si l'hauria d'organitzar de manera diferent.
- M'ha semblat interessant utilitzar la propietat CSS `perspective` per aconseguir l'efecte visual de pantalla de cinema amb il·luminació.