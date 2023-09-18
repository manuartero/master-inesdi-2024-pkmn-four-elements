# `pkmn-four-elements` exercise

## React Components

How React components enhance code reusability

From:

```js
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

```js
<Element type="fire" />
```
