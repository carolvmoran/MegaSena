import React, { useState } from "react";

export default function MegaSena(props) {
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ? 
        gerarNumeroNaoContido(min, max, array) : 
        aleatorio;
    }
    function gerarNumeros(qtd) {
        const numeros = Array(qtd)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [ ...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)
        return numeros
    }

    const qtd = props.qtd || 6
    const numerosIniciais = Array(qtd).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais);
    return (
        <div className="megasenaContainer">
            <h2 className="megasenaTitle">MegaSena</h2>
            <ul className="megasenaContainerNumeros">
                {numeros.map((numero) => {
                    return <li className="megasenaNumero">{numero}</li>
                })}
            </ul>
            <button className="megasenaBtn" onClick={_ => setNumeros(gerarNumeros(qtd))}>Gerar Números</button>
        </div>
    );
}
