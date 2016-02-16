const exists = (obj, func)=>{
  let i = 0, l = obj.length;
  for(i;i<l;i++)
    if(func(obj[i]))
      return true;
  return false;
}
export {exists}
