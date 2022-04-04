

export class CharacteristicList {

   charlist : Characteristic[] ;

   constructor ( r: Characteristic[] ) {
       r.sort( (x,y) => { if ( x.order < y.order ) return -1 ; 
          if ( x.order > y.order ) return 1 ; 
	  return 0 ; }
       ) ;
       this.charlist = r ;
   }
   
   get(k : string) {
     for (const x of this.charlist) {
       if (k === x.label) return x;
     }
     return null;
   }
   
}

export class Characteristic {

    order: number ;
    label: string ;
    spec: string ;
    score: number ;
}

function parseCharacteristic( ob ) : Characteristic {
   return { order: ob["arm:hasOrder"] || 0,
            label: ob["arm:hasLabel"],
            spec: ob["arm:hasSpecialisation"] || "",
            score: ob["arm:hasScore"] || 0
   } as Characteristic ;
}
export function parseCharList( l: any[] ) : CharacteristicList {
   if ( typeof(l) === "undefined" ) return undefined ;
   if ( ! l ) l = [] ;
   return new CharacteristicList( l.map( parseCharacteristic ) ) ;
}
