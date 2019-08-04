async function mapFastAsyncFn(fn, arr){
  const promised = arr.map(a => fn(a))

  return Promise.all(promised)
}

export function mapFastAsync(fn, arr){
  if (arguments.length === 1){
    return async holder => await mapFastAsyncFn(fn, holder)
  }

  return new Promise((resolve, reject) => {
    mapFastAsyncFn(fn, arr)
      .then(resolve)
      .catch(reject)
  })
}
