// webpack (CRA) подхватывает все .jpg из этой папки
const context = require.context('./', false, /\.jpg$/);

// numeric-сортировка обязательна: без неё image-10 встанет между image-1 и image-2
export const catalogImages = context.keys()
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map(key => context(key));
