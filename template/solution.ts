import { handleInputs } from './inputHelpers'

export const solution = async ({ fileName, input }: { fileName?: string; input?: string[] }) => {
  const data: string[] = await handleInputs({ fileName, input })
  console.log(data)
  return data
}
