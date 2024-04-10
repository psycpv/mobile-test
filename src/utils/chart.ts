export function chartDomain([dataMin, dataMax]: [number, number]): [number, number] {
  const absMax = Math.ceil(Math.max(Math.abs(dataMin), Math.abs(dataMax)))
  return [-absMax, absMax]
}
