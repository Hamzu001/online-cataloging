export function tryCatch(tryer) {
    try {
      return { data: tryer(), error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
  
  export async function asyncTryCatch(tryer) {
    try {
      return { data: await tryer(), error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
  