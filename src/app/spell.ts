import { Trait, TraitList } from './trait' ;

export class Spell {

    spellName: string ;
    raw: any ;
    range: string ;
    duration: string ;
    target: string ;
    technique: string ;
    form: string ;
    level: number ;
    casting: number ;
    description: string ;
    constructor(ob) {
      // console.log( ob ) ;
      this.spellName = ob["arm:hasLabel"] ;
      this.raw = ob ;
      this.range = ob["arm:hasRangeString"] || "";
      this.duration = ob["arm:hasDurationString"] || "";
      this.target = ob["arm:hasTargetString"] || "";
      this.technique = ob["arm:hasTechniqueString"] || "";
      this.form = ob["arm:hasFormString"] || "";
      this.level = ob["arm:hasLevel"] || 0;
      this.description = ob["arm:hasDescription"] || "";

      if ( "arm:hasCastingScore" in ob ) {
         var casting = ob["arm:hasCastingScore"] ;

	 if ( typeof(this.casting) === "number" ) {
	    this.casting = casting ;
	 } else {
	    this.casting = casting["@value"] ;
	 }
      }
    }
    getSignature() : string {
      return this.technique.substring(0,2) 
           + this.form.substring(0,2) + this.level ;
    }
    get(k) : string {
      if ( k in this ) return this[k] 
      else return this.raw[k] ;
    }



}

export function parseSpells( l: any[] ) : Spell[] {
   if ( typeof(l) === "undefined" ) return [] ;
   if ( !l ) return [] ;
   return l.map( ob => new Spell(ob) ) ;
}
