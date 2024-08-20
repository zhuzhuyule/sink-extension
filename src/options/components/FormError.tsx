export const FormError = ({ error  }: { error?: string}) =>
  error ? <p className='mt-1 text-xs text-red-500'>{error}</p> : null
