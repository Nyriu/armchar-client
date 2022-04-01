import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Character, Charsheet } from './charsheet';
import { Saga } from './saga';
// import { MessageService } from './message.service';

// import * as jsonld from 'jsonld';
// var jsonldp = jsonld.promises ;


@Injectable({
  providedIn: 'root'
})
export class ArmcharService {

  static_charsheetURI =   '/assets/summer1217.json';
  static_advancementURI = '/assets/adv_cieran.json';
  //
  charsheetURI = 'http://localhost:8080/armchar/Character/' ;
  advancementURI = 'http://localhost:8080/armchar/Advancement/' ;

  constructor(
    private http: HttpClient
    // public messageService: MessageService
  ) { }

  getSaga(id: string): Observable<Saga> {
     //const url = `${this.charsheetURI}${id}`;
     const url = this.static_charsheetURI;
     const cid = `armchar:${id}`;
     return this.http.get<Saga>(url).pipe( map( j => this.process(j,cid) ) ) ;
  }

  getCharacter(id: string): Observable<Character> {
     //const url = `${this.charsheetURI}${id}`;
     const url = this.static_charsheetURI;
     const cid = `armchar:${id}`;
     console.log( "getCharacter " + url ) ;
     return this.http.get<Character>(url).pipe( map( j => this.process(j,cid) ) ) ;
  }
  getCharsheet2(id: string, t:string): Observable<Charsheet> {
     //const url = `${this.charsheetURI}${id}/${t}`;
     const url = this.static_charsheetURI;
     const cid = `armchar:${id}#${t}`;
     console.log("getCharsheet2 " + url ) ;
     return this.http.get<Charsheet>(url).pipe( 
	 map( j => this.processFramed(j) ) ) ;
  }
  getCharsheet(id: string, year:number, season:string): Observable<Charsheet> {
     //const url = `${this.charsheetURI}${id}/${year}/${season}`;
     const url = this.static_charsheetURI;
     console.log("getCharsheet " + url ) ;
     return this.http.get<Charsheet>(url).pipe( 
	 map( j => this.processFramed(j) ) ) ;
  }
  getAdvancements(id: string ): Observable<any> {
     //const url = `${this.advancementURI}${id}`;
     const url = this.static_advancementURI;
     console.log("getAdvancements " + url ) ;
     return this.http.get<any>(url).pipe( map( j => this.processFramed(j) ) ) ;
  }
  getCharsheetPost( uri: string ): Observable<Charsheet> {
     //const url = `${this.charsheetURI}`;
     const url = this.static_charsheetURI;
     const cid = uri ; // `armchar:${id}#${t}`;
   const headers = new HttpHeaders().set(
     'Content-Type',
    'application/x-www-form-urlencoded;'
   );
     console.log( uri, url ) ;
     return this.http.post<Charsheet>(
	url,
	url,
        {headers: headers }
	).pipe( map( j => this.process(j,cid) ) ) ;
  }


  process(j:any,cid:string): any {
	console.log( cid, j ) ;
	if ( ! ( "@graph" in j ) ) return undefined ;
	var g = j["@graph"] ;
        var r = {} ;
	g.forEach( (el) => { r[el["@id"]] = el } ) ;
	var rr = r[cid] ;
	for ( let key in rr ) {
	  if ( rr[key] instanceof Array ) {
	     rr[key] = rr[key].map( k => r[k["@id"]] ) ;
	  }
	  if ( rr[key] instanceof Object && '@id' in rr[key] ) {
	     rr[key] = [  r[rr[key]["@id"]] ] ;
	  }
	}
	rr["@dict"] = r ;
	console.log( rr ) ;
	return rr ;
  }

  processFramed(j:any): any {
	console.log( "processFramed", j ) ;
	if ( ( "@type" in j ) ) return j ;
	if ( ! ( "@graph" in j ) ) return undefined ;
	var g = j["@graph"] ;
	console.log( "graph", g ) ;
	var cs = g[0] ;
	cs["@context"] = j["@context"] ;
	console.log( "processFramed", cs ) ;
	return cs ;
  }

  private log(message: string) {
	// this.messageService.add(`HeroService: ${message}`);
  }

}
