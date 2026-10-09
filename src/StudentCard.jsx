export default function StudentCard({student}){
    return (
        <article className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
            <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Nom :</p>
                <h3 className="mt-1 text-lg font-bold text-slate-800">{student.nom}</h3>
            </div>
            <div className={`rounded-xl px-4 py-2 text-center ${student.note >= 10 ? 'bg-green-50' : 'bg-red-100'}`}>
                <p className="text-xs font-medium text-indigo-500">Note</p>
                <p className="text-lg font-bold text-indigo-700">{student.note}</p>
            </div>
        </article>
    )
}

//bg-indigo-50