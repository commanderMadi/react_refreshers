export default function CancelButton({children, ...props }) {
    return (
        <button {...props} className="text-stone-800 hover:text-stone-950">
            {children}
            </button>
    )
}