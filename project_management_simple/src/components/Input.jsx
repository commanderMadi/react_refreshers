export default function Input({ textArea, label, ref, ...props }) {
  const classes =
    'w-full p-1 border-b-2 border-stone-300 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
      {textArea ? <textarea ref={ref} className={classes} {...props}></textarea> : <input className={classes} ref={ref} {...props} />}
    </p>
  )
}
