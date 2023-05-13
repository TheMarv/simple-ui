export function mergeClasses(...args: (string | string[] | undefined)[]) {
  const flattenedArgs = args
    .filter(arg => arg !== undefined)
    .flat() as string[];
  const classNameSet = new Set<string>(flattenedArgs);
  return Array.from(classNameSet).join(' ');
}
