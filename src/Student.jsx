import {useState, useEffect} from 'react'

export default function Student(){
    const [nom, setNom] = useState("vide")
    
    useEffect(function(){
        console.log(nom)
        console.log("visited")
        setNom('Walid')
    }, [])


    useEffect (function(){
        console.log("le nom a changé")
    }, [nom])


    function tester() {
        setNom('Khalid')
    }
        return(
            <>
                <label>Welcome {nom}!!</label>
                <button onClick={tester}>Tester</button>
            </>
        )
}