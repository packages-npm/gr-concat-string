# gr-concat-string

Concatenates string array by passing as divider text, initial and final.

### Examples:

```ts
concatString( ['One', 'Two', 'three'], ',', 'Numbers(', ');' );

\\ Numbers(One,Two,three);
```

```ts
concatString(['One', 'Two', 'three'], ' - ', '> ', ' <');

\\ > One - Two - three <
```
