# Master INESDI 2024 / `pkmn-four-elements`

## Week 1: React Components

<a href="https://stackblitz-starters-gjsy5p.stackblitz.io"><img src="./pkmn-four-elements.png" /></a>

How React components enhance code reusability

From:

```jsx
<div className="grid grid-cols-2 grid-rows-2 gap-4">
  <div
    className={c(
      'p-8 rounded-full text-white cursor-pointer hover:opacity-80',
      selectedType === 'fire' ? 'bg-red-500' : 'bg-gray-300'
    )}
    onClick={() => handleTypeClick('fire')}
  >
    <i className="fa fa-fire fa-lg"></i>
  </div>
</div>
<div>...</div>
<div>...</div>
<div>...</div>
```

To:

```jsx
<Element type="fire" />
<Element type="water" />
<Element type="electric" />
<Element type="grass" />
```

***

```bash
git clone git@github.com:manuartero/master-inesdi-2024-pkmn-four-elements.git
cd master-inesdi-2024-pkmn-four-elements/
npm i && npm start
```
