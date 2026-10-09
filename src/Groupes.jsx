import {useState, useEffect} from 'react';
import data from './data.js';
import StudentCard from './StudentCard.jsx';

export default function Groupes(){

    const groupes = Object.keys(data)
    const [groupe, setGroupe] = useState(groupes[0])
    const [students, setStudents] = useState(data[groupe])

    function groupeActuel(e){
        setGroupe(e.target.value)
    }

    useEffect(function(){
        setStudents(data[groupe])
    }, [groupe])



    return(
        <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6">
            <section className="mx-auto max-w-3xl">
                <header className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Espace étudiant</p>
                    <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Liste des étudiants</h1>
                    <p className="mt-2 text-slate-500">Choisissez un groupe pour consulter les étudiants et leurs notes.</p>
                </header>

                <label htmlFor="groupe" className="mb-2 block text-sm font-semibold text-slate-700">Groupe</label>
                <select
                    id="groupe"
                    value={groupe}
                    onChange={groupeActuel}
                    className="mb-6 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 sm:w-64"
                >
                    {groupes.map((groupe) => (
                        <option key={groupe} value={groupe}>{groupe}</option>
                    ))}
                </select>

                <div className="grid grid-cols-1 gap-4">
                    {students.map((student) => (
                        <StudentCard key={student.id} student={student} />
                    ))}
                </div>
            </section>
        </main>
    );
};