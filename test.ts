import { concatString, queryEncodeURI } from './index';

console.log( concatString(['One', 'Two', 'three'], ',', 'Numbers(', ');') );

console.log( concatString(['One', 'Two', 'three'], ' - ', '> ', ' <') );

const query: string = `
    ?
    &fields=id,name
    &join=gestor||id,name
    &filter=isActive||eq||true
    &filter=name||$cont||Jhon Doe
`;

console.log(queryEncodeURI(query));
