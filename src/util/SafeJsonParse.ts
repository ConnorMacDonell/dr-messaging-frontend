export type ParseResult<T> =
  | { parsed: T; hasError: false; error?: undefined }
  | { parsed?: undefined; hasError: true; error?: unknown }

  //Takes a guard function and an object and uses guard function to verify object is
  //of type T
export const safeJsonParse = <T>(guard: (obj: any) => obj is T) => 
  (text: string): ParseResult<T> => {
    const parsed = JSON.parse(text)
    return guard(parsed) ? { parsed, hasError: false } : { hasError: true }
  }