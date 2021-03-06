import { path as pathModule } from './rambda/path'

export function pathEq(path, target, obj){
  if (arguments.length === 2){
    return objHolder => pathEq(path, target, objHolder)
  }

  return pathModule(path, obj) === target
}
