# `pkmn-four-elements` exercise

## React Components

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
```

To:

```jsx
<Element type="fire" />
<Element type="water" />
<Element type="electric" />
<Element type="grass" />
```
