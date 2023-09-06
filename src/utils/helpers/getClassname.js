export const getClassName = (types = []) => {
   const className = types.map(({ type }) => `type-${type.name}`).join(' ')
   return className
}
